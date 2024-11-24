import { prisma } from '../config/db.js'

export const createTag = async (req, res) => {
  const { name, color } = req.body
  const userId = req.userId
  try {
    const newTag = await prisma.tags.create({
      data: {
        name,
        color,
        creatorId: userId
      }
    })
    res.json({ message: 'Tag created successfully', tag: newTag })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error creating tag' })
  }
}

export const getTags = async (req, res) => {
  const { userId } = req.userId
  try {
    const tags = await prisma.tags.findMany({
      where: { creatorId: userId }
    })
    res.json({ tags })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error getting tags' })
  }
}

export const updateTag = async (req, res) => {
  const { id } = req.params
  const { name, color } = req.body
  try {
    const updatedTag = await prisma.tags.update({
      where: { id: parseInt(id) },
      data: {
        name,
        color
      }
    })
    res.json({ message: 'Tag updated successfully', tag: updatedTag })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error updating tag' })
  }
}

export const deleteTag = async (req, res) => {
  const { id } = req.params
  try {
    await prisma.tags.delete({ where: { id } })
    res.json({ message: 'Tag deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error deleting tag' })
  }
}

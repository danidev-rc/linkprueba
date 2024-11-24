import { createContext, useContext, useState, useEffect } from 'react'
import {
  createTagRequest,
  getTagsRequest,
  updateTagRequest,
  deleteTagRequest,
} from '../api/tag'

const TagContext = createContext()

export const useTags = () => {
  const context = useContext(TagContext)
  if (!context) throw new Error('useTags must be used within a TagProvider')
  return context
}

export const TagProvider = ({ children }) => {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await getTagsRequest()
        setTags(res.data.tags)
        setLoading(false)
      } catch (error) {
        setErrors(error.response.data.message)
        setLoading(false)
      }
    }
    fetchTags()
  }, [])

  const createTag = async (tag) => {
    try {
      const res = await createTagRequest(tag)
      setTags([...tags, res.data.tag])
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const updateTag = async (id, tag) => {
    try {
      const res = await updateTagRequest(id, tag)
      setTags(tags.map((t) => (t.id === id ? res.data.tag : t)))
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const deleteTag = async (id) => {
    try {
      await deleteTagRequest(id)
      setTags(tags.filter((tag) => tag.id !== id))
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  return (
    <TagContext.Provider
      value={{
        tags,
        loading,
        errors,
        createTag,
        updateTag,
        deleteTag,
      }}
    >
      {children}
    </TagContext.Provider>
  )
}

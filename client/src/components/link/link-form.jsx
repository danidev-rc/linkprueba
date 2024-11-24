import { useState, useEffect } from 'react'
import { Link2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FormLink({ link, onClose, onSubmit }) {
  const [url, setUrl] = useState('')
  const [shortLink, setShortLink] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (link) {
      setUrl(link.url)
      setShortLink(link.linky)
      setDescription(link.description)
      setTags(link.tags.map((tag) => tag.tag))
    }
  }, [link])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ url, linky: shortLink, description, tags })
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h1 className="text-2xl font-semibold text-white mb-6">
            {link ? 'Edit Link' : 'Create new Link'}
          </h1>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-300"
            >
              URL
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="short-link"
              className="block text-sm font-medium text-gray-300"
            >
              Short link
            </label>
            <input
              type="text"
              id="short-link"
              value={shortLink}
              onChange={(e) => setShortLink(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-300"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              value={tags.join(', ')}
              onChange={(e) =>
                setTags(e.target.value.split(',').map((tag) => tag.trim()))
              }
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md flex items-center hover:bg-neutral-600 focus:outline-none focus:ring-2"
            >
              {link ? 'Update' : 'Create'} <Link2 width={18} className="ml-2" />
            </button>
          </div>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  )
}

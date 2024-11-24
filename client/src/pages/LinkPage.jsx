import { useState, useEffect } from 'react'
import { useLinks } from '../context/LinkContext'
import CardLink from '../components/link/link-card'
import {
  ButtonTag,
  ButtonAmount,
  ButtonCreateLink,
} from '../components/link/link-button'
import FormLink from '../components/link/link-form'

export default function LinkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentLink, setCurrentLink] = useState(null)
  const { links, getLinks, createLink, updateLink, deleteLink, searchLinks } =
    useLinks()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getLinks()
  }, [])

  const handleCreateLink = () => {
    setCurrentLink(null)
    setIsModalOpen(true)
  }

  const handleEditLink = (link) => {
    setCurrentLink(link)
    setIsModalOpen(true)
  }

  const handleSubmitLink = async (link) => {
    if (currentLink) {
      await updateLink(currentLink.id, link)
    } else {
      await createLink(link)
    }
    setIsModalOpen(false)
    getLinks()
  }

  const handleDeleteLink = async (id) => {
    await deleteLink(id)
    getLinks()
  }

  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim() === '') {
      getLinks()
    } else {
      searchLinks(query)
    }
  }

  return (
    <div className="text-white pt-8">
      <div className="flex justify-between px-14">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 text-white bg-neutral-900 border rounded-lg border-neutral-500 focus:outline-none focus:border-neutral-400"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <span>
              <ButtonAmount ammount={links.length} />
            </span>
          </div>
          <div>
            <ButtonTag name="Select tag" />
          </div>
          <div>
            <span>
              <ButtonCreateLink onClick={handleCreateLink} />
            </span>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 px-14 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {links.map((link) => (
          <CardLink
            key={link.id}
            linky={link.linky}
            url={link.url}
            clicks={link.clicks}
            date={link.createdAt}
            onEdit={() => handleEditLink(link)}
            onDelete={() => handleDeleteLink(link.id)}
          />
        ))}
      </section>
      {isModalOpen && (
        <FormLink
          link={currentLink}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitLink}
        />
      )}
    </div>
  )
}

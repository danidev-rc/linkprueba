import { createContext, useContext, useState } from 'react'
import {
  createLinkRequest,
  getLinksRequest,
  updateLinkRequest,
  deleteLinkRequest,
  getLinkRequest,
  searchLinksRequest,
} from '../api/link'

const LinkContext = createContext()

export const useLinks = () => {
  const context = useContext(LinkContext)
  if (!context) {
    throw new Error('useLinks must be used within a LinkProvider')
  }
  return context
}

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([])

  const getLinks = async () => {
    try {
      const res = await getLinksRequest()
      setLinks(res.data.links)
    } catch (error) {
      console.log(error)
    }
  }

  const searchLinks = async (query) => {
    try {
      const res = await searchLinksRequest(query)
      setLinks(res.data.links)
    } catch (error) {
      console.log(error)
    }
  }

  const createLink = async (link) => {
    try {
      const res = await createLinkRequest(link)
      setLinks([...links, res.data.link])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteLink = async (id) => {
    try {
      const res = await deleteLinkRequest(id)
      if (res.status === 204) setLinks(links.filter((link) => link.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateLink = async (id, link) => {
    try {
      const res = await updateLinkRequest(id, link)
      setLinks(links.map((l) => (l.id === id ? res.data.link : l)))
    } catch (error) {
      console.log(error)
    }
  }

  const getLinky = async (linky) => {
    try {
      const res = await getLinkRequest(linky)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        getLinks,
        searchLinks,
        createLink,
        deleteLink,
        updateLink,
        getLinky,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}

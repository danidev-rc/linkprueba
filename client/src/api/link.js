import axios from "./axios"

export const createLinkRequest = async (link) => axios.post('/links', link)

export const getLinksRequest = async () => axios.get('/links')

export const updateLinkRequest = async (id, link) => axios.put(`/links/${id}`, link)

export const deleteLinkRequest = async (id) => axios.delete(`/links/${id}`)

export const getLinkRequest = async (linky) => axios.get(`/links/${linky}`)

export const searchLinksRequest = async (query) => axios.get(`/links/search/${query}`)
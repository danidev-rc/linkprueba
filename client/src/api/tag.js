import axios from './axios'

export const createTagRequest = async (tag) => axios.post('/tags', tag)

export const getTagsRequest = async () => axios.get('/tags')

export const updateTagRequest = async (id, tag) => axios.put(`/tags/${id}`, tag)

export const deleteTagRequest = async (id) => axios.delete(`/tags/${id}`)

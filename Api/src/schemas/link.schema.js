import { z } from 'zod'

export const createLinkSchema = z.object({
  url: z.string({
    required_error: 'URL is required'
  }),
  description: z.string({
    required_error: 'Description is required'
  })
})

export const updateLinkSchema = z.object({
  url: z.string({
    required_error: 'URL is required'
  }),
  description: z.string({
    required_error: 'Description is required'
  })
})

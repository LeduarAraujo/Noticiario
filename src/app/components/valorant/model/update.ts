import { Translation } from "./translation"

export interface Update {
    publish: boolean
    author: string
    publish_locations: string[]
    updated_at: string
    translations: Translation[]
    id: number
    created_at: string
  }
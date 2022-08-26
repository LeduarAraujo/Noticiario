import { Item } from "./item"

export interface Channel {
    link: string[]
    title: string
    description: string
    language: string
    creator: string
    rights: string
    item: Item[]
}
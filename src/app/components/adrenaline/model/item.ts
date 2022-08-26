import { Description } from "./description"

export interface Item {
    title: string
    link: string
    guid: string
    description: Description
    pubDate: string
    creator: string
    enclosure: string
}
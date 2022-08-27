import { Enclosure } from "./enclosure"

export interface ListaAdrenalineNoticia {
    title: string[]
    link: string[]
    guid: string[]
    description: string[]
    pubDate: string[]
    "dc:creator": string[]
    enclosure: Enclosure[]
}
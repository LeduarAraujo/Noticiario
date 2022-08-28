import { Image } from "./image"

export interface Store {
    name: string
    slug: string
    url: string
    image: Image
    __typename: string
}
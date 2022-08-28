import { Image } from "./image"
import { Store } from "./store"
import { Timestamps } from "./timestamps"

export interface Edge {
    id: string
    discountFixed: any
    discountPercentage: any
    freeShipping?: boolean
    image: Image
    price: number
    sourceUrl: string
    status: string
    temperature: number
    kind: string
    isTracked: boolean
    couponCode: any
    commentCount: number
    timestamps: Timestamps
    title: string
    store: Store
    __typename: string
}
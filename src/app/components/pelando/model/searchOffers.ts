import { Edge } from "./edge"
import { PageInfo } from "./pageInfo"

export interface SearchOffers {
  edges: Edge[]
  pageInfo: PageInfo
  __typename: string
}
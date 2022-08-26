import { Incident } from "./incident"
import { Maintenance } from "./maintenance"

export interface Noticia {
    id: string
    name: string
    locales: string[]
    maintenances: Maintenance[]
    incidents: Incident[]
  }
  
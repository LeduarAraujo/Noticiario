import { Title } from "./title"
import { Update } from "./update"

export interface Maintenance {
    incident_severity: any
    titles: Title[]
    updates: Update[]
    archive_at: any
    updated_at?: string
    platforms: string[]
    id: number
    maintenance_status: string
    created_at: string
  }
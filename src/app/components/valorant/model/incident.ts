import { Title } from "./Title"
import { Update } from "./update"

export interface Incident {
    incident_severity: string
    id: number
    updates: Update[]
    maintenance_status: any
    updated_at: any
    titles: Title[]
    archive_at: any
    platforms: string[]
    created_at: string
  }
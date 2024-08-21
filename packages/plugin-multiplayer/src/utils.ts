import type {
  LivesharePresenceItem,
  LiveshareType,
  Maybe,
} from 'better-write-types'
import type { RealtimePresenceState } from '@supabase/supabase-js'
import { nanoid } from 'nanoid'

const SEPARATOR = '_'

export const isEmptyObject = (obj: Record<any, any>) =>
  Object.entries(obj).length === 0

export const validadeKey = (key?: string) =>
  key?.split(SEPARATOR)?.pop()?.length === 30
export const getKey = (key?: string): Maybe<LiveshareType> =>
  key?.split(SEPARATOR)?.shift() as LiveshareType

export const entries = (state: RealtimePresenceState<LivesharePresenceItem>) =>
  Object.entries(state)

export const getOwner = (
  presence: RealtimePresenceState<LivesharePresenceItem>
) =>
  entries(presence).find(([_, userPresence]) =>
    userPresence.find(({ type }) => type === 'owner')
  )

export const isCollaborateRoom = (id: string) => /^collaborator/.test(id)
export const isVisiterRoom = (id: string) => /^visit/.test(id)

export const genKey = (type: LiveshareType) =>
  `${type}${SEPARATOR}${nanoid(30)}`

import { Nft, Team } from 'config/constants/types'

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
}


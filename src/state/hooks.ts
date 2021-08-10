import { useEffect, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers'
import { minBy, orderBy } from 'lodash'
import { useAppDispatch } from 'state'
import Nfts from 'config/constants/nfts'
import { State, NodeRound, ReduxNodeLedger, NodeLedger, ReduxNodeRound } from './types'
import { fetchWalletNfts } from './collectibles'
import { parseBigNumberObj } from './predictions/helpers'

// /!\
// Don't add anything here. These hooks will be moved the the predictions folder

// Predictions
export const useGetRounds = () => {
  const rounds = useSelector((state: State) => state.predictions.rounds)
  return Object.keys(rounds).reduce((accum, epoch) => {
    return {
      ...accum,
      [epoch]: parseBigNumberObj<ReduxNodeRound, NodeRound>(rounds[epoch]),
    }
  }, {}) as { [key: string]: NodeRound }
}


import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'

import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import state from 'state'

export default function Swap({ history }: RouteComponentProps) {
  const { account } = useActiveWeb3React()
  console.log("Account", account)

  return (
    <div>
      Token Swap
      { !account ? (
        <UnlockButton width="100%" />
      ) : (
        <div>Start Swap</div>
      )}
    </div>
  )
}

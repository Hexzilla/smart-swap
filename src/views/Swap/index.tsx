import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'

import useActiveWeb3React from '../../hooks/useActiveWeb3React'
export default function Swap({ history }: RouteComponentProps) {
  const { account } = useActiveWeb3React()
  return (
    <div>
      Token Swap
      <UnlockButton></UnlockButton>
    </div>
  )
}

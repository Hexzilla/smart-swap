import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'

export default function Swap({ history }: RouteComponentProps) {
  return (
    <div>
      Token Swap
      <UnlockButton></UnlockButton>
    </div>
  )
}

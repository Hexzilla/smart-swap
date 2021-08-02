import React from 'react'

const UnlockButton = (props) => {
  const onPresentConnectModal = () => {
    
  }

  return (
    <button onClick={onPresentConnectModal} {...props}>
      {'Unlock Wallet'}
    </button>
  )
}

export default UnlockButton

import useAuth from 'hooks/useAuth'

const UnlockButton = (props) => {
  const { login, logout } = useAuth()
  const onPresentConnectModal = () => {
    login('injected')
  }

  return (
    <button onClick={onPresentConnectModal} {...props}>
      {'Unlock Wallet'}
    </button>
  )
}

export default UnlockButton

import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </Provider>
  )
}

export default Providers

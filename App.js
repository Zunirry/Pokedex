import React from 'react';
import Home from './src/containers/Home'
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes'

const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  )
}

export default App;

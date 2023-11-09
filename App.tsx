import { PaperProvider } from 'react-native-paper'
import { theme } from './src/core/theme'
import App from './src'

const Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
)

export default Main

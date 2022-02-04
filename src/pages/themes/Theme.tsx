import { ThemeProvider } from 'styled-components'
import theme from '../styles/Default'

const Theme = ({ children }: { children: React.ComponentState }) => (
	<ThemeProvider theme={theme}>{...children}</ThemeProvider>
)

export default Theme

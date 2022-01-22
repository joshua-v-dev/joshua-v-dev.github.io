import { ThemeProvider } from 'styled-components'
import theme from '../themes/default'

const Theme = ({ children }: { children: any }) => (
	<ThemeProvider theme={theme}>{...children}</ThemeProvider>
)

export default Theme

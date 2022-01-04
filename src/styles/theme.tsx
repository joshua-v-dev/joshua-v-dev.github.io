import { ThemeProvider } from 'styled-components'
import theme from '../themes/default'
import GlobalStyles from '../styles/globals'

const Theme = ({ children }: { children: any }) => (
	<>
		<ThemeProvider theme={theme}>
			<GlobalStyles {...children} />
		</ThemeProvider>
	</>
)

export default Theme

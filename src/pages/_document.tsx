import React, { ReactElement } from 'react'
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentInitialProps,
	DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// NEXT.JS CUSTOM DOCUMENT
// https://nextjs.org/docs/advanced-features/custom-document

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render(): ReactElement {
		return (
			<React.StrictMode>
				<Html lang='en'>
					<Head>
						<link
							href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
							rel='stylesheet'
						/>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</React.StrictMode>
		)
	}
}

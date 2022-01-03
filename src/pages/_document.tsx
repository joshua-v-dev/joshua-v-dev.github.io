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
	async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
		)
	}
}

// import React, {ReactElement} from 'react'
// import { PreviewData } from 'next'
// import Document, {DocumentInitialProps, DocumentContext, Head, Html, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'
// import { ParsedUrlQuery } from 'querystring'
//
// export default class MyDocument extends Document {
// 	async getStaticProps(ctx: {
// 		renderPage?: any
// 		DocumentContext?: any
// 		params?: ParsedUrlQuery
// 		preview?: boolean
// 		previewData?: PreviewData
// 		locale?: string
// 		locales?: string[]
// 		defaultLocale?: string
// 	}) {
// 		const sheet = new ServerStyleSheet()
// 		const originalRenderPage = ctx.renderPage
//
// 		try {
//
// 			ctx.renderPage = () =>
// 				originalRenderPage()({
// 					enhanceApp: (App: any) => (props: JSX.IntrinsicAttributes) =>
// 						sheet.collectStyles(<App {...props} />),
// 				})
//
// 			const staticProps = MyDocument.getStaticProps(ctx)
// 			return {
// 				...staticProps,
// 				styles: (
// 					<>
// 						{staticProps}
// 						{sheet.getStyleElement()}
// 					</>
// 				),
// 			}
// 		} finally {
// 			sheet.seal()
// 		}
// 	}
// 	static getStaticProps(ctx: {
// 		DocumentContext?: any
// 		params?: ParsedUrlQuery
// 		preview?: boolean
// 		previewData?: PreviewData
// 		locale?: string
// 		locales?: string[]
// 		defaultLocale?: string
// 	}) {
// 		throw new Error('Method not implemented.')
// 	}
// 	render(): ReactElement {
// 		return (
// 			<Html lang='en-GB'>
// 				<Head>
// 					<link
// 						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
// 						rel='stylesheet'
// 					/>
// 				</Head>
//
// 				<body>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		)
// 	}
// }
//
// // import { InferGetStaticPropsType } from 'next'
// //
// // type Post = {
// // 	author: string
// // 	content: string
// // }
// //
// // export const getStaticProps = async () => {
// // 	const res = await fetch('https://.../posts')
// // 	const posts: Post[] = await res.json()
// //
// // 	return {
// // 		props: {
// // 			posts,
// // 		},
// // 	}
// // }
// //
// // function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
// // 	// will resolve posts to type Post[]
// // }

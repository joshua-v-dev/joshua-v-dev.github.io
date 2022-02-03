import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles, css, theme, styled, TwStyle } from 'twin.macro'

// Use the `TwStyle` import to type tw blocks
type WrapperVariant = 'light' | 'dark' | 'crazy'
interface ContainerProps {
	variant?: WrapperVariant
	tapColor?: string
	hasBg?: boolean
}

const containerVariants: Record<WrapperVariant, TwStyle> = {
	// Named class sets
	light: tw`bg-white text-black`,
	dark: tw`bg-black text-white`,
	crazy: tw`bg-yellow-500 text-red-500`,
}

const TwinContainer = styled.div(({ hasBg }: ContainerProps) => [
	tw`flex w-full`, // Add base styles first
	hasBg && tw`bg-black`, // Then add conditional styles
])

const TwinColumn = tw.div`w-1/2`

const TwinInputs = ({ tapColor }: ContainerProps) => (
	<input
		css={[
			tw`text-blue-500 border-2`,
			tw`block`,
			`-webkit-tap-highlight-color: ${tapColor};`,
			css({
				WebkitTapHighlightColor: 'transparent', // css properties are camelCased
				backgroundColor: theme`colors.red.500`, // values don’t require interpolation
				'&::selection': tw`text-purple-500`, // single line tailwind selector styling
			}),
		]}
	/>
)
const TwinSection = ({ variant }: ContainerProps) => (
	<section css={styles.container({ variant })}>
		<div css={styles.column} />
		<div css={styles.column} />
	</section>
)

const styles = {
	container: ({ variant = 'dark' }: ContainerProps) => [
		TwinContainer,
		containerVariants[variant], // Grab the variant style via a prop
	],
	column: TwinColumn,
	sm: tw`mt-2`,
	lg: tw`mt-4`,
}

const TwinComponent = ({ hasBg }: ContainerProps) => (
	<TwinContainer {...{ hasBg }}>
		<TwinInputs tapColor='red'></TwinInputs>
		<TwinSection></TwinSection>
		<TwinColumn></TwinColumn>
		<TwinColumn></TwinColumn>
	</TwinContainer>
)
const CustomStyles = createGlobalStyle`
  body {

    ${tw`antialiased`}
  }
`
const GlobalStyles = () => (
	<>
		<TwinComponent />
		<BaseStyles />
		<CustomStyles />
	</>
)
export default GlobalStyles

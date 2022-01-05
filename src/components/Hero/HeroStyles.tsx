import styled from 'styled-components'

export const HeroSection = styled.div`
	display: grid;
	grid-auto-flow: column;

	padding: 0;
	position: relative;
	margin: 0 auto 0 auto;
`

export const LeftSection = styled.div`
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	position: relative;
	margin: 0 auto;
`
export const RightSection = styled.div`
	width: 100vw;
	display: flex;
	flex: 0;
	position: absolute;
	transform: translateX(-35%);
`
export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3rem 0 9rem 0;
	position: relative;
`

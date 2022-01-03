import styled from 'styled-components'

export const HeroSection = styled.div`
	display: grid;
	grid-auto-flow: column;

	padding: 0;
	position: relative;
	margin: 0 auto 0 auto;
	z-index: 100;

	@media ${(props) => props.theme.breakpoints.sm} {
		position: relative;
		display: flex;
		left: 0;
		top: 0;
		max-height: 50vh;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 auto;
		z-index: 100;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`

export const LeftSection = styled.div`
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	position: relative;
	margin: 0 auto;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex: 1;
		z-index: 1000;
		overflow: hidden;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		position: relative;
		flex-direction: column;
		margin: 0 auto;
	}
`
export const RightSection = styled.div`
	width: 100vw;
	display: flex;
	flex: 0;
	position: absolute;
	transform: translateX(-35%);
	z-index: 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100vw;
		transform: translateX(5%);
		position: absolute;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		position: absolute;
		padding-bottom: 3rem;
	}
`
export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3rem 0 9rem 0;
	position: relative;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

import styled from 'styled-components'

export const HeroSection = styled.div`
	display: grid;
	grid-auto-flow: column;
	width: 100vw;
	padding: 0;
	position: relative;
	margin: 0 auto;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100vw;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		// margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100vw;
		position: relative;
		display: flex;
		flex-direction: column;
		// margin: 0 auto;
	}
`

export const LeftSection = styled.div`
	width: 100%;
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	position: relative;
	margin: 0 auto;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		position: relative;
		display: flex;
		// margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		margin: 0 auto;
	}
`
export const RightSection = styled.div`
	// margin-left: 2rem;
	width: 100%;
	min-height: 60vh;
	position: absolute;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		position: absolute;
		padding-bottom: 3rem;
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

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
	}
`

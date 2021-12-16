import styled from 'styled-components'

export const HeroSection = styled.div`
	width: 100vw;
	height: 90vh;
	// padding: 0;
	position: relative;
	margin: 0 auto;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100vw;
		height: 90vh;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		height: 90vh;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`

export const LeftSection = styled.div`
	width: 100%;
	position: relative;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;

		display: flex;
		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`
export const RightSection = styled.div`
	margin-left: 2rem;
	width: 95%;
	height: 90%;
	position: absolute;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`

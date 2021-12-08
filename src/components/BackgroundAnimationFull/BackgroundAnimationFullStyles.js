import styled from 'styled-components'

export const FullAnimation = styled.div`
	width: 100vw;
	height: 100vh;
	// margin: 0;
	// padding: 0;
	// position: absolute;
	// z-index: 2;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
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

import styled from 'styled-components'

export const FullAnimation = styled.div`
	display: grid;

	overflow: hidden;
	margin: 0;
	padding: 0;
	opacity: 0.85;

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

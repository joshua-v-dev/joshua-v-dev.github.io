import styled from 'styled-components'

export const FooterWrapper = styled.section`
	width: calc(100vw - 9.6rem);
	max-width: 1040px;
	padding: 2rem 4.8rem 4rem;
	margin: 1rem auto;
	box-sizing: content-box;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0 1.6rem;
		width: calc(100vw - 3.2rem);
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 1.6rem 4.8rem;
		width: calc(100vw - 3.2rem);
	}
`

export const LinkItem = styled.a`
	font-size: 1.8rem;
	line-height: 3rem;
	color: ${(props) => props.theme.colors.background2};
	margin-bottom: 1.6rem;
	transition: 0.3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: ${(props) => props.theme.colors.accent3};
		left: 0.6rem;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.6rem;
		line-height: 3.5rem;
		display: flex;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.8rem;
		line-height: 1.4rem;
		margin-bottom: 0.8rem;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
	max-width: 1040px;
	display: flex;
	justify-content: space-between;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: space-between;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		width: 100%;
		flex-direction: column;
	}
`

export const CompanyContainer = styled.div`
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	margin-right: auto;

	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
		align-items: baseline;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 0 0 3.2rem;
		align-items: center;
	}
`
//////////////////////////////////////////////////////////////////////////////////////////////////
export const Slogan = styled.p`
	color: ${(props) => props.theme.colors.primary1};
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.6rem;
		line-height: 2.8rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		line-height: 2.2rem;
		font-size: 1.4rem;
		min-width: 10rem;
	}
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		padding-right: 1.6rem;
		flex-wrap: wrap;
	}
`

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: grid;
	grid-template-columns: repeat(3, minmax(8.5rem, 22rem));
	gap: 4rem;
	padding: 4rem 0 2.8rem;

	@media ${(props) => props.theme.breakpoints.lg} {
		padding: 3.2rem 0 1.6rem;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		padding: 3.2rem 0 1.6rem;
		gap: 1.6rem;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 3.2rem 0.4rem 1.6rem;
		gap: 0.5rem;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 22rem;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 2.4rem;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.accent5};
	margin-bottom: 1.6rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1rem;
		line-height: 1.2rem;
		margin-bottom: 0.8rem;
	}
`

import styled from 'styled-components'

export const Section = styled.section`
	display: ${(props) => (props ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props ? 'row' : 'column')};
	padding: ${(props) => (props ? '0' : '1rem')};
	justify-content: ${(props) => (props ? 'center' : 'flex-start')};
	align-items: ${(props) => (props ? 'center' : 'flex-start')};
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
`

export const SectionTitle = styled.h2`
	font-size: ${(props) => (props ? '9rem' : '7rem')};
	line-height: ${(props) => (props ? '10rem' : '8rem')};
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	color: #ffffff;}
	 -webkit-text-fill-color: transparent;
	padding: ${(props) => (props ? '2.5rem 5rem 2.5rem 5rem' : '0')};
	display: flex;
	font-weight: 10000;
	justify-content: center;
	align-items: center;
	position: relative;
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);
`

export const SectionText = styled.p`
	font-size: 6rem;
	line-height: 7rem;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	color: blue;
`
export const SectionDividerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const SectionDivider = styled.div`
	width: 100%;
	height: 0.3rem;
	border-radius: 1rem;
	background-color: red;
	background: ${(props) =>
		props
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

	margin: ${(props) => (props ? '0 10rem 10rem ' : '')};
`

export const SectionSubText = styled.p`
	font-size: 2rem;
	line-height: 3rem;
	color: blue;
`

export const ButtonBack = styled.div`
	width: ${({ ...props }) => (props ? '7.5rem' : '15rem')};
	height: ${({ ...props }) => (props ? '2.5rem' : '5rem')};
	border-radius: 5rem;
	border: none;
	font-size: ${({ ...props }) => (props ? '2rem' : '2.2rem')};
	font-weight: 1000;
	display: flex;
	// flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: ${({ ...props }) => (props ? '0' : '0 0 4rem')};
	color: blue;
	box-shadow: 0.01rem 0.4rem 0.4rem 0.5rem #4b9fe1;
	background: ${({ ...props }) =>
		props
			? 'linear-gradient(270deg, #DF3062  0%, #4BAC3F 100%)'
			: 'linear-gradient(270deg, #F5B935 0%, #11ABC1 100%)'};
	cursor: pointer;
	transition: 1.5s ease;
	position: relative;
	overflow: hidden;
	opacity: ${({ ...props }) => (props ? '.5' : '1')};
`

export const ButtonFront = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 5rem;
	overflow: hidden;
	color: blue;
	box-shadow: 0 0.5rem 0.5rem 0 #150734;
	position: absolute;
	top: 0;
	left: 0;
	width: ${({ ...props }) => (props ? '7.5rem' : '15rem')};
	height: ${({ ...props }) => (props ? '2.5rem' : '5rem')};
	margin: ${({ ...props }) => (props ? '0' : '0 0 4rem')};
	background: ${({ ...props }) =>
		props
			? 'linear-gradient(270deg, #BCFD4C 0%, #3778C2 100%)'
			: 'linear-gradient(270deg, #C1436D 0%, #3778C2 100%)'};
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	transition: 1.5s ease;
	font-size: ${({ ...props }) => (props ? '2rem' : '2.2rem')};
	font-weight: 1000;
	cursor: pointer;
	box-shadow: ${({ disabled }) =>
		disabled
			? 'inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.4rem rgba(20, 20, 55, 0.3)'
			: 'none'};

	&:hover {
		opacity: 0;
	}
	&:focus {
		outline: none;
	}
	&:active {
		opacity: 1;
		box-shadow: inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.4rem rgba(20, 20, 55, 0.3);
	}

	&:disabled {
		background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
		opacity: 0.5;
		box-shadow: inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.2rem rgba(20, 20, 55, 0.3);
	}
`

export const LinkContainer = styled.div`
	margin-left: ${({ ...props }) => (props ? '2rem' : '1rem')};
	transition: 0.5s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5rem;
	padding: 1rem;

	&:hover {
		background-color: blue;
		transform: scale(1.5);
		cursor: pointer;
	}
`

export const LinkIconImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ ...props }) => (props ? '3.2rem' : '2.4rem')};
`

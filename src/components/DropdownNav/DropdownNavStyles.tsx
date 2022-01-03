import styled from 'styled-components'

export const DropdownNavStyles = styled.div`
	.trigger {
		display: flex;
		background-color: transparent;
		color: ${(props) => props.theme.colors.accent4};
		text-color: ${(props) => props.theme.colors.background2};
		visibility: hidden;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		.trigger {
			visibility: visible;
			position: absolute;
			z-index: 2000;

			background: ${({ key }) =>
				key === 'home'
					? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
					: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

			transition: 0.4s ease;
			border-radius: 0.75rem;
			align-items: center;
			justify-content: center;
		}
		.content {
			color: ${(props) => props.theme.colors.accent4};
		}
		.item {
			padding: 1rem 3rem;
		}
		.item:focus {
			background-color: ${(props) => props.theme.colors.button2};
		}
	}
`

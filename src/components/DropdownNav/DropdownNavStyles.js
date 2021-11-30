import styled from 'styled-components'

export const DropdownNavStyles = styled.div`
	.trigger {
		display: flex;
		background-color: transparent;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		.trigger {
			display: flex;
			background: ${({ alt }) =>
				alt
					? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
					: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
			opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
			transition: 0.4s ease;
			border-radius: 0.75rem;
			align-items: center;
			justify-content: center;
		}
		.content {
			background-color: transparent;
			color: primary1;
		}
		.item {
			padding: 1rem 3rem;
		}
		.item:focus {
			background-color: button;
		}
	}
`

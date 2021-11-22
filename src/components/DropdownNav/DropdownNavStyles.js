import styled from 'styled-components'

export const DropdownNavStyles = styled.div`
	.trigger,
	.content,
	.item {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		.trigger {
			display: block;
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
			background-color: background1;
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

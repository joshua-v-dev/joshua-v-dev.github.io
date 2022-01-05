import styled from 'styled-components'

export const DropdownNavStyles = styled.div`
	.trigger {
		display: flex;
		background-color: transparent;
		color: blue;
		text-color: red;
		visibility: hidden;
	}


		.trigger {
			visibility: visible;
			position: absolute;

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
			color: blue;
		}
		.item {
			padding: 1rem 3rem;
		}
		.item:focus {
			background-color:red;
		}
	}
`

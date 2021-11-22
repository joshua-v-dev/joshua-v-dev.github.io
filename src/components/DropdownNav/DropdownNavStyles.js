import styled from 'styled-components'

export const DropdownNavStyles = styled.div`
	.trigger {
		background-color: background2;
		color: button;
	}
	.content {
		background-color: background1;
		color: primary1;
		border-radius: 0 0 4px 4px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
	}
	.item {
		padding: 1rem 3rem;
		line-height: 2rem;
	}
	.item:focus {
		background-color: button;
		padding: 1rem 3rem;
		line-height: 2rem;
`

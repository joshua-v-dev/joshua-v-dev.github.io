import React from 'react'

import { ButtonBack, ButtonFront } from '../GlobalComponents/index'

const Button = (props: {
	alt: any
	form: any
	disabled: boolean
	children: {}
	onClick: React.MouseEventHandler<HTMLButtonElement>
}) => (
	<ButtonBack>
		{props.children}
		<ButtonFront>{props.children}</ButtonFront>
	</ButtonBack>
)

export default Button

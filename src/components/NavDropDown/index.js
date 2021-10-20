import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'

import {
	DropDownContainer,
	DropDownIcon,
	DropDownItem,
	DropDownItemDesc,
	DropDownItemTitle,
	DropDownTextContainer,
} from './NavDropDown'

const NavDropDown = (props) => (
	<DropDownContainer active={props.isOpen}>
		<DropDownItem href='#' target='_blank' rel='noreferrer'>
			<DropDownIcon>
				<AiFillPhone />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Phone</DropDownItemTitle>
				<DropDownItemDesc>Let's have a chat?'</DropDownItemDesc>
			</DropDownTextContainer>
		</DropDownItem>
		<DropDownItem href='#' target='_blank' rel='noreferrer'>
			<DropDownIcon>
				<AiOutlineMail />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Email</DropDownItemTitle>
				<DropDownItemDesc>
					If you want to talk just send a message and I'll get back to you
				</DropDownItemDesc>
			</DropDownTextContainer>
		</DropDownItem>
		<DropDownItem href='#' target='_blank' rel='noreferrer'>
			<DropDownIcon>
				<FaLocationArrow />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Address</DropDownItemTitle>
<<<<<<< HEAD
				<DropDownItemDesc>Puerto Vallarta, Mexico</DropDownItemDesc>
=======
				<DropDownItemDesc>Knoxville, TN</DropDownItemDesc>
>>>>>>> f3bf7db68ee64a75e1bbf4e396f3721862297ea5
			</DropDownTextContainer>
		</DropDownItem>
	</DropDownContainer>
)

export default NavDropDown

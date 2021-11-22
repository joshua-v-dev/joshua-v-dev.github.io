import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownNavStyles } from './DropdownNavStyles'
import { HamburgerMenuIcon } from '@modulz/radix-icons'

export default function DropdownNav() {
	return (
		<div>
			<DropdownNavStyles>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger className='trigger'>
						<HamburgerMenuIcon />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content className='content'>
						<DropdownMenu.Item>Projects</DropdownMenu.Item>
						<DropdownMenu.Item className='item'>Technologies</DropdownMenu.Item>
						<DropdownMenu.Item className='item'>About</DropdownMenu.Item>
						<DropdownMenu.Item className='item'>Contact</DropdownMenu.Item>

						<DropdownMenu.Root>
							<DropdownMenu.TriggerItem />

							<DropdownMenu.Content />
						</DropdownMenu.Root>
						<DropdownMenu.Separator />

						<DropdownMenu.Arrow />
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</DropdownNavStyles>
		</div>
	)
}

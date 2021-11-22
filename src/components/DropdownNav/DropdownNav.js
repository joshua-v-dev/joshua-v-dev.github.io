import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
export default function DropdownNav() {
	return (
		<div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger />
				<DropdownMenu.Content>
					<DropdownMenu.Label />

					<DropdownMenu.Item />
					<DropdownMenu.Group>
						<DropdownMenu.Item />
					</DropdownMenu.Group>
					<DropdownMenu.CheckboxItem>
						<DropdownMenu.ItemIndicator />
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.RadioGroup>
						<DropdownMenu.RadioItem>
							<DropdownMenu.ItemIndicator />
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>
					<DropdownMenu.Root>
						<DropdownMenu.TriggerItem />

						<DropdownMenu.Content />
					</DropdownMenu.Root>
					<DropdownMenu.Separator />

					<DropdownMenu.Arrow />
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	)
}

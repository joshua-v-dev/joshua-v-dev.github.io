import React from 'react'

const data = [
	{ number: 2, text: 'Shopify Apps' },
	{ number: 1, text: 'Shopify Store' },
	{ number: 5, text: 'Progressive Web Apps' },
	{ number: 1, text: 'UI/UX Prototype' },
]

const Acomplishments = () => (
	<>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</>
)

export default Acomplishments

import styled from 'styled-components'

export const Boxes = styled.div`
	object-fit: cover;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.4rem;
	margin: 2.4rem 0 4rem;
	padding: 3rem 3rem;
`

export const Box = styled.div`
	background: #212d45;
	border-radius: 1.2rem;
	height: 14.4rem;
	padding: 2.4rem;
`
export const BoxNum = styled.h5`
	font-style: normal;
	font-weight: 600;
	font-size: 3.6rem;
	line-height: 4rem;
	letter-spacing: 0.01em;
	color: red;
	margin-bottom: 0.8rem;
`

export const BoxText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 1.8rem;
	line-height: 2.4rem;
	letter-spacing: 0.02em;
	color: red;
`

export const Join = styled.div`
	display: flex;
	object-fit: cover;
	justify-content: center;
	align-items: center;
	padding-bottom: 8rem;
`

export const JoinText = styled.h5`
	display: flex;
	font-size: 2.4rem;
	line-height: 4rem;
	letter-spacing: 0.02em;
	color: red;
`

export const IconContainer = styled.div`
	display: flex;
`

//tailwind slider overlay
/* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'
//
// export default function Example() {
//   const [open, setOpen] = useState(true)
//
//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
//         <div className="absolute inset-0 overflow-hidden">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-in-out duration-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in-out duration-500"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//           </Transition.Child>
//           <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-500 sm:duration-700"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-500 sm:duration-700"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <div className="relative w-screen max-w-md">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-in-out duration-500"
//                   enterFrom="opacity-0"
//                   enterTo="opacity-100"
//                   leave="ease-in-out duration-500"
//                   leaveFrom="opacity-100"
//                   leaveTo="opacity-0"
//                 >
//                   <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
//                     <button
//                       type="button"
//                       className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                       onClick={() => setOpen(false)}
//                     >
//                       <span className="sr-only">Close panel</span>
//                       <XIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </Transition.Child>
//                 <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
//                   <div className="px-4 sm:px-6">
//                     <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
//                   </div>
//                   <div className="mt-6 relative flex-1 px-4 sm:px-6">
//                     {/* Replace with your content */}
//                     <div className="absolute inset-0 px-4 sm:px-6">
//                       <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
//                     </div>
//                     {/* /End replace */}
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }

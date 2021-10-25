import { useState, useEffect } from 'react'

export function Spinner({ displayed }) {
	const [show, setShow] = useState(displayed)
	useEffect(() => {
		setShow(displayed)
	}, [displayed])
	return (
		<button
			type='button'
			className={`items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:border-red-700 active:bg-red-700 transition ease-in-out duration-150 cursor-not-allowed mt-4 ${
				show ? 'inline-flex' : 'hidden'
			}`}
			disabled></button>
	)
}

// import { Spinner } from '../Spinner/Spinner'
// import { Video } from '../Video/Video'
//
// import { useState } from 'react'
//
// export function Upload() {
// 	const [showSpinner, setShowSpinner] = useState(false)
// 	const [showVideo, setShowVideo] = useState(false)
// 	const [publicId, setPublicId] = useState('')
// 	const onChange = async (event) => {
// 		setShowSpinner(true)
// 		event.preventDefault()
// 		const formData = new FormData()
// 		const file = event.target.files[0]
// 		formData.append('inputFile', file)
//
// 		try {
// 			const response = await fetch('/api/upload', {
// 				method: 'POST',
// 				body: formData,
// 			})
// 			const data = await response.json()
// 			setPublicId(data.public_id)
// 		} catch (error) {
// 			setShowSpinner(false)
// 		} finally {
// 			setShowSpinner(false)
// 			setShowVideo(true)
// 		}
// 	}
// 	return (
// 		<div>
// 			<Spinner displayed={showSpinner} />
// 			<Video publicId={publicId} />
// 			<label
// 				className={`mx-auto w-64 text-black items-center p-4 m-5 bg-white rounded-lg shadow-2xl tracking-wide uppercase border border-yellow-500 cursor-pointer hover:bg-yellow-200 ${
// 					showSpinner || showVideo ? 'hidden' : 'flex flex-col'
// 				}`}>
// 				<span className='mt-2 text-base text-black leading-normal'>Select a video</span>
// 				<input type='file' onChange={onChange} className='hidden' />
// 			</label>
// 		</div>
// 	)
// }

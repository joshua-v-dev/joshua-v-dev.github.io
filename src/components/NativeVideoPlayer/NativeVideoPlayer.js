import { useEffect } from 'react'
import { Cloudinary } from 'cloudinary-core'

const NativeVideoPlayer = () => {
	const cld = new Cloudinary({ cloud_name: 'dpytkhyme' })
	useEffect(() => {
		const videoPlayer = cld.videoPlayer('video-player', {
			autoplay: true,
			muted: true,
			controls: true,
		})
		videoPlayer.source('src/components/NativeVideoPlayer/NativeVideoPlayer.js')
	})
	return (
		<div>
			<video id='video-player' />
		</div>
	)
}
export default NativeVideoPlayer

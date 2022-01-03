import { useEffect } from 'react'
import { Cloudinary } from 'cloudinary-core'
import 'node_modules/cloudinary-video-player/dist/cld-video-player.min.js'
import 'node_modules/cloudinary-video-player/dist/cld-video-player.min.css'

const NativeVideoPlayer = () => {
	const cld = new Cloudinary({ cloud_name: 'dpytkhyme' })
	useEffect(() => {
		const videoPlayer = cld.videoPlayer('video-player', {
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

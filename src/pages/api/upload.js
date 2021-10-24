// import cloudinary from 'cloudinary-react'
// import { IncomingForm } from 'formidable'
//
// cloudinary.config({
// 	cloud_name: process.env.cloud_name,
// 	api_key: process.env.api_key,
// 	api_secret: process.env.api_secret,
// })
//
// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// }
//
// export default async (req, res) => {
// 	const data = await new Promise((resolve, reject) => {
// 		const form = new IncomingForm()
//
// 		form.parse(req, (err, fields, files) => {
// 			if (err) return reject(err)
// 			resolve({ fields, files })
// 		})
// 	})
//
// 	const file = data?.files?.inputFile.path
//
// 	try {
// 		const response = await cloudinary.v2.uploader.upload(file, {
// 			resource_type: 'video',
// 			public_id:
// 				'https://res.cloudinary.com/dpytkhyme/video/upload/v1634987340/e-commerce-from-scratch_mgh6ci.mp4',
// 		})
// 		return res.json(response)
// 	} catch (error) {
// 		console.log('Error', error)
// 		return res.json(error)
// 	}
// }

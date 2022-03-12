module.exports = {
	webpack: (config) => {

		config.resolve.preferRelative = true
		return config
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
}

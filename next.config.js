module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
			}
		}
		config.resolve.preferRelative = true
		return config
	},
	images: {
		domains: ['res.cloudinary.com', 'static.shuffle.dev'],
	},
}

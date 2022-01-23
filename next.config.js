module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
				process: 'process/browser',
				util: 'util/',
				path: 'path-browserify',
				querystring: 'querystring-es3',
			}
		}

		return config
	},
}

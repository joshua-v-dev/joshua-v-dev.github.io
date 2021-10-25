module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.node = {
			fs: 'true', // This is required
		}
		return config
	},
}

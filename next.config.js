module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.node = {
			fs: 'empty', // This is required
		}
		return config
	},

	async rewrites() {
		return [
			{
				source: '/ProjectsPage',
				destination: '/MernProject',
			},
		]
	},
}

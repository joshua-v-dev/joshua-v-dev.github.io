export function webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
	config.node = {
		fs: 'empty', // This is required
	}
	return config
}
export async function rewrites() {
	return [
		{
			source: '/ProjectsPage',
			destination: '/MernProject',
		},
	]
}
export const env = {
	ROOT: __dirname,
}

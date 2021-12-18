import type { RefObject } from 'react'
import type { Container, ISourceOptions, Main } from 'tsparticles'
import type { CSSProperties } from 'react'

export interface IParticlesProps {
	id?: string
	width?: string
	height?: string
	options?: ISourceOptions
	params?: ISourceOptions
	url?: string
	style?: CSSProperties
	className?: string
	canvasClassName?: string
	container?: RefObject<Container>
	init?: (tsParticles: Main) => void
	loaded?: (container: Container) => void
}

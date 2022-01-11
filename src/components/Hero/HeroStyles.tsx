import styled from 'styled-components'
import tw from 'twin.macro'

export const Tailwindsbutton = tw.button`
  text-white
  bg-blue-500
  py-2
  px-4
  rounded
  font-bold
  text-sm
  mr-2
  transition-colors duration-200
  hover:bg-blue-600
  focus:outline-none
  focus:shadow-outline
  focus:bg-blue-600
  
`

export const HeroSection = styled.div`
	display: grid;
	grid-auto-flow: column;
	padding: 0;
	position: relative;
	margin: 0 auto 0 auto;
`

export const LeftSection = styled.div`
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	position: relative;
	margin: 0 auto;
	color: #fff;
`

export const ButtonContainer = styled.div`
	object-fit: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3rem 0 9rem 0;
	position: relative;
`

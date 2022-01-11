import { NextPage } from 'next'
import Layout from './Layout'
import SecondaryLayout from './SecondaryLayout'

type PageWithMainLayoutType = NextPage & { layout: typeof Layout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType

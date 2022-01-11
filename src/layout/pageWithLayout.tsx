import { NextPage } from 'next'
import Layout from '../layout/Layout'
import SecondaryLayout from '../layout/SecondaryLayout'

type PageWithMainLayoutType = NextPage & { layout: typeof Layout }

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType

export default PageWithLayoutType

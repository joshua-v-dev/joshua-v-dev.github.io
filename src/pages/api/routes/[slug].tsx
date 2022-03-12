/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
interface IParams extends ParsedUrlQuery {
    slug: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = ['slug1', 'slug2']
    const paths = arr.map((slug) => {
        return {
            params: { slug },
        }
    })
    return { 
    paths,
    fallback: true
   }
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async (context) => {
    // This is where the error occurs
   const { slug } = context.params as IParams // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
    const props = fetch(`/api/${slug}`)
    return { props }
}
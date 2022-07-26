import Head from 'next/head'
import React from 'react'

type SEOProps = {
    title: string
}

const SEO = (props: SEOProps) => {
    const { title } = props;
  return (
        <Head>
            <title>{title} | ChangYeol Lee</title>
        </Head>
    )
}

export default SEO;
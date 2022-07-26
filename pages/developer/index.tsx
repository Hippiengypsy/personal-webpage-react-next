import SEO from '@components/common/seo/SEO';
import DeveloperPage from '@components/developer';
import React from 'react'

type DeveloperProps = {}

const Developer = (props: DeveloperProps) => {
  return (
    <>
      <SEO title='Developer' />
      <DeveloperPage />
    </>
  )
}

export default Developer;
import ArtistPage from '@components/artist/index';
import SEO from '@components/common/seo/SEO';
import React from 'react'

type ArtistProps = {}

const Artist = (props: ArtistProps) => {
  return (
    <>
      <SEO title='Artist'/>
      <ArtistPage />
    </>
  )
}

export default Artist;
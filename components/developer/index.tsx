import React from 'react'

import PageDesktopLayout from '@layouts/PageDesktopLayout'

import Contact from '@components/common/contact/Contact'
import DevStrenths from './DevStrenths'
import DevSkills from './DevSkills'
import DevWork from './DevWork'
import DevAbout from './DevAbout'

type Props = {}

const DeveloperPage = (props: Props) => {
  return (
    <PageDesktopLayout>
      <DevAbout />
      <DevSkills />
      <DevStrenths />
      <DevWork />
      <Contact />
    </PageDesktopLayout>
  )
}

export default DeveloperPage;
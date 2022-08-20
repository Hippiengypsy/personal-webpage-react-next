import React from 'react'

import PageDesktopLayout from '@layouts/PageDesktopLayout'

import Contact from '@components/common/contact/Contact'
import DevStrengths from './DevStrengths'
import DevSkills from './DevSkills'
import DevWork from './DevWork'
import DevAbout from './DevAbout'
import ToggleTheme from '@components/common/toggleDarkMode/ToggleTheme'

type Props = {}

const DeveloperPage = (props: Props) => {
  return (
    <PageDesktopLayout>
      <DevAbout />
      <DevSkills />
      <DevStrengths />
      <DevWork />
      <Contact />
      <ToggleTheme className='' />
    </PageDesktopLayout>
  )
}

export default DeveloperPage;
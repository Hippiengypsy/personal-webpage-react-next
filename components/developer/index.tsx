import React from 'react'

import PageDesktopLayout from '@layouts/PageDesktopLayout'

import Contact from '@components/common/contact/Contact'
import DevStrengths from './DevStrengths'
import DevSkills from './DevSkills'
import DevWork from './DevWork'
import DevIntro from './DevIntro'
import ToggleTheme from '@components/common/toggleDarkMode/ToggleTheme'
import DevAboutMe from './DevAboutMe'
import DevMyBackground from './DevMyBackground'

type Props = {}

const DeveloperPage = (props: Props) => {
  return (
    <PageDesktopLayout>
      <DevIntro />
      <DevSkills />
      <DevStrengths />
      <DevWork />
      <DevAboutMe />
      <DevMyBackground />
      <Contact />
      <ToggleTheme />
    </PageDesktopLayout>
  )
}

export default DeveloperPage;
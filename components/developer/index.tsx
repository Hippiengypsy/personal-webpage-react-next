import Contact from '@components/common/contact/Contact'
import PageDesktopLayout from '@layouts/PageDesktopLayout'
import React from 'react'
import MyMindsets from './MyMindsets'
import MySkills from './MySkills'

type Props = {}

const DeveloperPage = (props: Props) => {
  return (
    <PageDesktopLayout>
      <h1>I&apos;m an awesome developer</h1><br/>
      <MySkills />
      <MyMindsets />
      <Contact />
    </PageDesktopLayout>
  )
}

export default DeveloperPage;
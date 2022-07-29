import Col2Box from '@components/common/box/Col2Box';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevAbout = (props: Props) => {
  return (
    <Element name="devAbout">
        <SectionBox>
          <Col2Box>
            <ItemBox>
              <img src='https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg' />
              <div>Some of my photo that looks cool</div>
            </ItemBox>
            <ItemBox>
              <div className='text-2xl font-extrabold'>What to Include in Your Cover Letter and Resume</div>
              <div className='text-xl font-extrabold'>Highlight your skills</div>
              <div>Include keywords from the job listing, especially those related to technical skills.</div>
              <div>Again, front-end developer roles will require knowledge of HTML, CSS, and JavaScript.</div>
              <div>Be sure to include soft skills as well, like the ability to communicate technical issues and solutions to non-technical staff.</div>
              <div className='text-xl font-extrabold'>Emphasize your most relevant experience</div>
              <div>Depending on your work history and the job requirements, you may want to choose a resume type that highlights your related experience.</div>
              <div>For example, if your work history shows a linear progression toward this role, you might choose to use a chronological resume.</div>
              <div>On the other hand, if your career path has taken some zig-zags, you might choose a functional or combination resume that shows off your skills.</div>
            </ItemBox>
          </Col2Box>
        </SectionBox>
    </Element>
  )
}

export default DevAbout;
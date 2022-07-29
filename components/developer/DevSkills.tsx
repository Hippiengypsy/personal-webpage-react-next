import Col2Box from '@components/common/box/Col2Box';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevSkills = (props: Props) => {
  return (
    <Element name="devSkills">
      <SectionBox>
        <Col2Box>
          <ItemBox>
            <li>Javacsript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Typescript</li>
            <li>Redux-Toolkit</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>SASS</li>
            <li>GIT</li>
          </ItemBox>
          <ItemBox>
            <img src='https://www.business2community.com/wp-content/uploads/2015/10/digital-skills2.jpg.jpg' />
            <div>my dev skills with graphic animation</div>
          </ItemBox>
        </Col2Box>
      </SectionBox>
    </Element>
  )
}

export default DevSkills;
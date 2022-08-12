import ContentsBox from '@components/common/box/ContentsBox';
import ItemColBox from '@components/common/box/ItemColBox';
import ItemHeadBox from '@components/common/box/ItemHeadBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevSkills = (props: Props) => {
  return (
    <Element name="devSkills">
      <SectionBox className="bg-grain02 flex">
        {/* <Col2Box>
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
          </Col2Box> */}
          <ContentsBox>
              <ItemHeadBox>
                Skills
              </ItemHeadBox>
              <ItemColBox colNum='box-item-col4'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux-Toolkit</li>
                <li>Bootstrap / Material UI</li>
                <li>TailwindCSS</li>
                <li>SASS</li>
                <li>Git / Git Hub</li>
                <li>Sourcetree</li>
              </ItemColBox>
          </ContentsBox>
      </SectionBox>
    </Element>
  )
}

export default DevSkills;
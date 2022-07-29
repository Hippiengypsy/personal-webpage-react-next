import Col2Box from '@components/common/box/Col2Box';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevStrengths = (props: Props) => {
  return (
    <Element name="devStrength">
      <SectionBox>
        <Col2Box>
          <ItemBox>
            <img src='https://ggjil.com/data/file/gaenews/df714da273619ac13f61be00689546ea_1566549744_3126.jpg' />
            <div>my strenths with animation</div>
          </ItemBox>
          <ItemBox>
            <li>Diverse skills and point of view</li>
            <li>Creative / problem solving</li>
            <li>Focus on user experience</li>
            <li>Attention to detail and quality of work</li>
            <li>Responding to a client brief</li>
            <li>Culture and language</li>
            <li>Working for myself</li>
            <li>Matching my goal with the company`&apos;`s goal</li>
            <li>Inspiring others</li>
            <li>Pacesetting, working hard to find the right solution</li>
            <li>Understanding the structure of how something is made</li>
            <li>Mechanical, technical, logical mind</li>
            <li>Wider life experience and reference points</li>
            <li>Giving feedback and persuading clients about best solutions</li>
          </ItemBox>
        </Col2Box>
      </SectionBox>
    </Element>
  )
}

export default DevStrengths;
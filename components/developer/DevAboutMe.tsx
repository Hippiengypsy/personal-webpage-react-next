import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import SectionBox from '@components/common/box/SectionBox'
import React from 'react'
import { Element } from 'react-scroll'

type Props = {}

const DevAboutMe = (props: Props) => {
  return (
    <Element name='devAboutMe'>
        <SectionBox className="bg-grain02">
            <ContentsBox>
                <ItemBox boxType='box-item-head'>
                    About Me
                </ItemBox>
                <ItemBox boxType='box-item-col2'>
                    <div>something image</div>
                    <div className='text-xl'>
                        <div>I'm a front end web developer, born and raised in South Korea and now based in Scotland.</div><br />

                        <div>My path to becoming a developer started in 2021 when I worked with Korean tech start-up [Tim and Jim Co].</div>
                        <div>Working 12 hours a day, 6 days a week, my colleagues and I learnt the programming skills we needed to launch the company's first service, a new type of SNS called Dongle Space.</div>
                        <div>[Maybe a sentence here to specify what elements you worked on].</div><br />

                        <div>It was hard but I found a lot of joy in solving problems, working with razor sharp focus and applying my skills in the real world.</div>
                        <div>Since moving to Scotland, I have been studying programming languages and building projects.</div><br />
                        
                        <div>I am currently looking to join a passionate and dynamic team. If you have a job role open, please get in touch! [link]</div>
                        <div> I enjoy talking to different people and speak good conversational English - and even a wee bit of Scottish, ken. It would be great to hear from you.</div>
                    </div>
                </ItemBox>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default DevAboutMe;
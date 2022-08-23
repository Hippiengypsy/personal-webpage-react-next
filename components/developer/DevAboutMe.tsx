import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import SectionBox from '@components/common/box/SectionBox'
import React from 'react'
import { Element, Link } from 'react-scroll'

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
                    <div className='space-y-8 p-4 w-full'>
                        <img className='opacity-90' src="/img/me.jpg" alt="dreams" />
                    </div>
                    <div className='space-y-8 p-4 w-full text-xl'>
                        <div>I'm a front end web developer, born and raised in South Korea and now based in Scotland.</div><br />

                        <div>My path to becoming a developer started in 2021 when I worked with Korean tech start-up [Tim and Jim Co].</div>
                        <div>Working 12 hours a day, 6 days a week, my colleagues and I learnt the programming skills we needed to launch the company's first service, a new type of SNS called Dongle Space.</div>
                        <div>It was hard but I found a lot of joy in solving problems, working with razor sharp focus and applying my skills in the real world.</div>
                        <div>That was my "Zero to One" moment of my coding experience.</div><br />

                        <div>Since moving to Scotland, I have been carrying on improving my skills and building projects.</div><br />

                        <div>I am currently looking to join a passionate and dynamic team. If you have a job role open,</div>
                        <div className='underline'>
                            <Link  to="contact" smooth={true} duration={500}>please get in touch!</Link>
                        </div>
                        <div> I enjoy talking to different people and speak good conversational English - and even a wee bit of Scottish, ken. It would be great to hear from you.</div>
                    </div>
                </ItemBox>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default DevAboutMe;
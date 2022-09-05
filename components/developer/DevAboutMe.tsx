import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import SectionBox from '@components/common/box/SectionBox'
import React from 'react'
import { Element, Link } from 'react-scroll'


const DevAboutMe = () => {
  return (
    <Element name='devAboutMe'>
        <SectionBox className="bg-grain02">
            <ContentsBox>
                <ItemBox boxType='box-item-head'>
                    About Me
                </ItemBox>
                <div>
                    {/* <div className='space-y-8 p-4 w-full'>
                        <img className='opacity-90' src="/img/me.jpg" alt="dreams" />
                    </div> */}
                    <div className='space-y-8 p-4 w-full text-xl pb-20'>
                        <div>I'm a front end web developer, born and raised in South Korea and now based in Scotland.</div><br />

                        <div>My path to becoming a developer started in 2021 when I worked with Korean tech start-up Tim and Jim Inc.</div>
                        <div>Working 12 hours a day, 6 days a week, my colleagues and I learnt the programming skills we needed to manage the company's first service, a new type of SNS called Dongle Space.</div>
                        <div>It was hard but I found a lot of joy in solving problems, working with razor sharp focus and applying my skills in the real world.</div><br />

                        <div>Since moving to Scotland, I have been carrying on improving my skills and building projects.</div><br />

                        <div>I am currently looking to join a passionate and dynamic team. If you have a job role open,</div><br />
                        <Link className='underline hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' to="contact" smooth={true} duration={500}>please get in touch!</Link>
                        <div> I enjoy talking to different people and speak good conversational English - and even a wee bit of Scottish, ken. It would be great to hear from you.</div>
                    </div>
                </div>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default DevAboutMe;
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import SectionBox from '@components/common/box/SectionBox'
import React from 'react'
import { Element } from 'react-scroll'

type Props = {}

const DevMyBackground = (props: Props) => {
  return (
    <Element name='devMyBackground'>
        <SectionBox className="bg-grain02">
            <ContentsBox>
                <ItemBox boxType='box-item-head'>
                    My Background
                </ItemBox>
                <ItemBox boxType='box-item-col2'>
                    <div className='space-y-8 p-4 w-full text-xl'>
                        <div>Before becoming a developer, I worked in the music industry as a composer and session guitarist.</div>
                        <div>I have worked in different genres, from hip hop to orchestral composition. Check out my tunes on Spotify. [link]</div><br />

                        <div>My family background is in traditional Korean luthiery, making a stringed instrument called the Gayageum.</div>
                        <div>My lifelong dream is to take up my grandfather's legacy as a woodworker and share the rich heritage of Korean luthiery with the world.</div><br />

                        <div>In my spare time, I enjoy playing board games, taking photos and tasting whiskies from across Scotland.</div>
                    </div>
                    <div className='space-y-8 p-4 w-full'>
                        something image
                    </div>
                </ItemBox>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default DevMyBackground;
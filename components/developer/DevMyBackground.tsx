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
                <div>
                    <div className='space-y-8 p-4 w-full text-xl pb-20'>
                        <div>Before becoming a developer, I worked in the music industry as a composer and session guitarist.</div>
                        <div>I have worked in different genres, from hip hop to orchestral composition. Check out my tunes on &nbsp;
                            <a className='underline hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' href="https://open.spotify.com/album/7nfhivgWtclQl0aw8aJgm6" target="blank">
                                Spotify
                            </a>
                            &nbsp;and&nbsp;
                            <a className='underline hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' href="https://soundcloud.com/hippie-king" target="blank">
                                Soundcloud
                            </a>
                            .
                        </div><br />

                        <div>I'm a proud descendant of traditional Korean luthiers who make Gayageum, a stringed instrument.</div>
                        <div>So it's my lifelong dream to carry on my grandfather's legacy and introduce the world to the rich tradition of Korean luthiery.</div><br />

                        <div>In my spare time, I enjoy playing board games, taking photos and tasting whiskies from across Scotland.</div>
                    </div>
                    {/* <div className='space-y-8 p-4 w-full'>
                        <img className='opacity-90' src="/img/me.jpg" alt="dreams" />
                    </div> */}
                </div>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default DevMyBackground;
import ItemBox from '@components/common/box/ItemBox';
import Rox2Box from '@components/common/box/Rox2Box';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevWork = (props: Props) => {
  return (
    <Element name="devWork">
      <SectionBox>
        <Rox2Box>
          <ItemBox>
            <div>my works(my toy projects)</div>
            <div>the layout of this section should be in 2 row</div>
            <div>todo: make Row2Box component ...done</div>
            <div>todo: make FlexBox component</div>
            <div>todo: responsive styling</div>
          </ItemBox>
          <ItemBox>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>          
          </ItemBox>
        </Rox2Box>
       </SectionBox>
    </Element>
  )
}

export default DevWork;
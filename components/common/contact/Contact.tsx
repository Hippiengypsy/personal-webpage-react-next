import React from 'react'
import { Element } from 'react-scroll';
import ContentsBox from '../box/ContentsBox';
import ItemBox from '../box/ItemBox';
import SectionBox from '../box/SectionBox';
import ContactForm from './ContactForm';

type Props = {}

const Contact = (props: Props) => {
  return (
    <Element name='contact'>
        <SectionBox className="bg-grain02 flex">
            <ContentsBox>
                <ItemBox boxType='box-item-head'>
                    Contact
                </ItemBox>
                <ItemBox boxType='box-item-col2'>
                    <div className="box-item-border my-20 md:my-20 lg:my-20">
                        <ContactForm />
                    </div>
                    <div className='space-y-8 p-4 w-full'>
                        <div className='space-y-8 p-4 w-full my-20 md:my-20 lg:my-20 text-xl'>
                            <div>If you want to connect or have any questions, please feel free to get in touch.</div><br />
                            <div>I'll be happy to grab a coffee and chat.</div>
                            <div>I have more stories that I could't put here</div>
                            <div>and also want to hear about your stories as well.</div><br />
                            <div>Email: kimchihaggis@gmail.com</div><br />
                            <div>[social media / github links]</div>
                        </div>
                    </div>
                </ItemBox>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default Contact;
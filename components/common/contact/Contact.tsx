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
                <div className="box-border my-20 md:my-20 lg:my-20 ">
                    <ContactForm />
                </div>
            </ContentsBox>
        </SectionBox>
    </Element>
  )
}

export default Contact;
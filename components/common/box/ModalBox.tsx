import React, { useState } from 'react'

interface ModalBoxProps {
    readonly children: React.ReactNode;
    readonly isOpen: boolean;
    readonly onClose: CallableFunction;
}
const ModalBox = (props: ModalBoxProps) => {
    const { children, isOpen, onClose } = props
    const handleClose = () => {
        onClose(false)
    }
  return (
        <div className={isOpen? "flex": "hidden"}>
            <button className='w-10 h-10 border-2' onClick={handleClose}>x</button>
            {children}
        </div>
      )
}

export default ModalBox;
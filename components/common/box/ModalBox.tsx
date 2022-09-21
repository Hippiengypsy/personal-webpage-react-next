import React, { Dispatch, SetStateAction } from 'react'

interface ModalBoxProps {
    readonly children: React.ReactNode;
    readonly isOpen: boolean;
    readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalBox = (props: ModalBoxProps) => {
    const { children, isOpen, setIsOpen } = props
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={isOpen? "flex": "hidden"}>
            <button className='w-10 h-10 border-2' onClick={handleClose}>x</button>
            {children}
        </div>
      )
}

export default ModalBox;
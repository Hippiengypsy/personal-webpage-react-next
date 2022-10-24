import React, { useEffect, Dispatch, SetStateAction } from 'react'

interface ModalBoxProps {
    readonly children: React.ReactNode;
    readonly isOpen: boolean;
    readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalBox = (props: ModalBoxProps) => {
    const { children, isOpen, setIsOpen } = props
    const handleClose = () => {
        setIsOpen(false)
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

    return (
        <div className={`fixed top-0 right-0 ease-in-out duration-300 ${isOpen? "-translate-x-0": "translate-x-full"}`}>
            <div className='w-screen h-screen bg-gray-400 bg-opacity-80'>
                {/* <!-- Main modal --> */}
                <div className={`ease-in-out duration-700 ${isOpen? "-translate-x-0": "translate-x-full"}`}>
                    <div className="p-4 w-11/12 sm:w-3/4 lg:w-3/5 h-screen mx-auto">
                        {/* <!-- Modal content --> */}
                        <div className="bg-grain01 rounded-lg h-full overflow-auto">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="p-4 sm:p-6 fixed object-right"
                            >
                                <svg aria-hidden="true" className="w-5 h-5 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <div className="">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ModalBox;
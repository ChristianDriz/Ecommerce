import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react'

const Alert = ({ cartAlert, success }) => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                               
                                <Dialog.Panel className="flex flex-col items-center gap-4 w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${success ? 'bg-green-100' : 'bg-blue-100'}`}>
                                        <Icon icon={`iconamoon:${success ? 'check' : 'information-circle'}`} className={`w-6 h-6 ${success ? 'text-green-600' : 'text-blue-600'} `}/>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <Dialog.Title as="p" className="text-large font-medium leading-6 text-gray-700">{success ? 'Successfully' : 'Oops...'}</Dialog.Title>
                                        <p className="text-regular text-dark-grey">{cartAlert}</p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Alert;

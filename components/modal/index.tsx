import { Dialog, Transition } from '@headlessui/react'
import { TrashIcon, PencilIcon } from '@heroicons/react/outline'
import React, { ReactElement, Fragment, useRef, FC, useState, useEffect } from "react";
import { PropsAllModal } from '../../types/table';


const Modal: FC<PropsAllModal> = (props): ReactElement => {
    const { title = "", info = "", textButton = "", show = false, type = "", callBack = () => { } } = props;
    const cancelButtonRef = useRef(null);
    const COLOR = type === "delete" ? "red" : "sky";
    const TypeIcon = type === "delete" ? TrashIcon : PencilIcon;
    const [openModal, setOpenModal] = useState(show);
    useEffect(() => {
        setOpenModal(show);
    });


    return (
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => { setOpenModal(false) }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex items-center">
                                        <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${COLOR}-100 sm:mx-0 sm:h-10 sm:w-10`}>
                                            <TypeIcon className={`h-6 w-6 text-${COLOR}-600`} aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                {title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    {info}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
                                    <button
                                        type="button"
                                        className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${COLOR}-600 text-base font-medium text-white hover:bg-${COLOR}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${COLOR}-500 sm:ml-3 sm:w-auto sm:text-sm`}
                                        onClick={() => {
                                            callBack();
                                            setOpenModal(false);
                                        }}
                                    >
                                        {textButton}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { setOpenModal(false); }}
                                        ref={cancelButtonRef}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function SliderOverlay ()
{
  const [ open, setOpen ] = useState( true );

  return (
    <Transition.Root show={ open } as={ Fragment }>
      <Dialog
        as="div"
        className="lg:hidden sm:visible fixed inset-0 overflow-hidden"
        onClose={ setOpen }
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={ Fragment }
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-indigo-900 bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={ Fragment }
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={ Fragment }
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 flex pt-4 pr-2 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      onClick={ () => setOpen( false ) }
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex h-full flex-col overflow-y-scroll bg-teal-600 py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      Panel title
                    </Dialog.Title>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */ }
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                    {/* /End replace */ }
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

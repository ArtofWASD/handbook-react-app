import React from "react";
import { Dialog } from "@headlessui/react";

const Modal = (isOpen: any, isOpenHandler: any, children: any) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => isOpenHandler(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
export default Modal;

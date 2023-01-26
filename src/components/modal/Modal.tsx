
import { Dialog } from "@headlessui/react";
// Модальное окно
const Modal = ({ isOpen, children, isModalOpenHandler }: any) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {isModalOpenHandler()}}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-full rounded bg-white px-4">
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
export default Modal;

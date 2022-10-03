/* global document */

import { ReactNode, useEffect, useRef } from "react";
import Transition from "./Transition";

type ModalProps = {
  children: ReactNode;
  id: string;
  ariaLabel: string | undefined;
  show: boolean;
  handleClose: () => void;
};

function Modal({ children, id, ariaLabel, show, handleClose }: ModalProps) {
  const modalContent = useRef<HTMLDivElement>(null);

  // close the modal on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!show || modalContent.current?.contains(event.target as Node)) {
        return;
      }
      handleClose();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      handleClose();
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 bg-white bg-opacity-75 backdrop-blur-sm transition-opacity"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 flex transform items-center justify-center overflow-hidden px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div
          className="max-h-full w-full max-w-6xl overflow-auto bg-white"
          ref={modalContent}
        >
          {children}
        </div>
      </Transition>
    </>
  );
}

export default Modal;

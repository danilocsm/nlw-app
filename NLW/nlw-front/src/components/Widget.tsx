import { ChatTeardropDots } from "phosphor-react";
// import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <>
      {/* <Navbar /> */}
      <Popover className="fixed m-4 bottom-8 right-8 md:bottom-8 md:right-8 flex flex-col items-end">
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button className="bg-white dark:bg-brand-500 dark:text-white rounded-full px-3 h-12 text-blue-400 flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2"></span>
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Th_A from "./Tabel_colum/Th_A";
import Th_B from "./Tabel_colum/Th_B";
import Th_C from "./Tabel_colum/Th_C";
import Th_D from "./Tabel_colum/Th_D";
import Th_E from "./Tabel_colum/Th_E";
import Th_F from "./Tabel_colum/Th_F";
import Add_Modal from "./Add_modal/add_modal";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function Sampah() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum distinctio blanditiis aliquid, doloribus rem eligendi dicta sequi non quibusdam nulla!";
  const truncatedText = text.split(" ").slice(0, 1).join("");

  return (
    <>
      {" "}
      <div className="flex justify-center items-center bg-red-500">
        <div className=" lg:w-10/12  w-full py-10">
          <div className=" flex justify-end px-5">
            <Add_Modal />
          </div>
          <div className="p-6 snap-x">
            <div className="max-h-96 overflow-y-auto">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    <Th_A />
                    <Th_B />
                    <Th_C />
                    <Th_D />
                    <Th_E />
                    <Th_F />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                            01
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <Image
                          src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                          alt="John Michael"
                          width={100}
                          height={100}
                          className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                        />
                        <div className="flex flex-col">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                            John Michael
                          </p>
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                            Images 1
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex flex-col">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                          Manager
                        </p>
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                          Web
                        </p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="w-max">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                          <Button
                            key={"sm"}
                            size={"sm"}
                            onPress={() => handleOpen("sm")}
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                            }}
                          >
                            {truncatedText} ...
                          </Button>
                        </p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        23/04/18
                      </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                              stroke="#000000"
                              // stroke-width="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                              stroke="#000000"
                              // stroke-width="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                        type="button"
                      >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <svg
                            fill="#000000"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                          </svg>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer className="relative pt-8 pb-6 mt-16">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-gray-500  py-1">
                      Made with{" "}
                      <a
                        href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                        className="text-gray-900 hover:text-gray-800"
                        target="_blank"
                      >
                        Soft UI
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://www.creative-tim.com"
                        className="text-gray-900 hover:text-gray-800"
                        target="_blank"
                      >
                        {" "}
                        Creative Tim
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <Modal size={size} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p className="mb-20 md:mb-0 lg:mb-0">{text}</p>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default Sampah;

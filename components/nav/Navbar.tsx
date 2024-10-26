"use client";

import React, { RefObject, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { DownloadIcon, MenuIcon } from "lucide-react";
import DownloadBtn from "@/components/download-btn";

const Navbar = ({ introRef, endUserRef, developerRef, faqRef, downloadRef, newsRef }: {
  introRef: RefObject<any>;
  endUserRef: RefObject<any>;
  developerRef: RefObject<any>;
  faqRef: RefObject<any>;
  downloadRef: RefObject<any>;
  newsRef: RefObject<any>;
}) => {
  const [isTop, setIsTop] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      setIsTop(!isTop);
    });
  }, []);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-30 top-0 text-white transition duration-300 ease-in-out  ${isTop ? "bg-transparent" : "bg-gradient-to-r from-aurora-purple via-aurora-darkblue to-aurora-blue shadow-xl"}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          className="hidden lg:flex w-full font-medium text-white mb-4 md:mb-0 flex-row items-center justify-between gap-4">
          <div className={"cursor-pointer"} onClick={() => {
            introRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            closeNavbar();
          }}>
            <img src={"/aurora-v3-white.svg"} width={60} height={60}
                 className={`${isTop ? "hidden" : "block"}`} />
            <img src={"/aurora-v3_logo.svg"} width={70} height={70}
                 className={`${isTop ? "block" : "hidden"}`} />
          </div>
          <div className="flex flex-row gap-14 text-lg items-center justify-center">
            <button onClick={() => {
              endUserRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              closeNavbar();
            }}>For end-users
            </button>
            <button onClick={() => {
              developerRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              closeNavbar();
            }}>For developers
            </button>
            <button onClick={() => {
              faqRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              closeNavbar();
            }}>FAQ
            </button>
            <button onClick={() => {
              newsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              closeNavbar();
            }}>News
            </button>
          </div>
          <div className={"flex max-h-fit flex-row text-lg items-center justify-center"}>
            <DownloadBtn
              onClick={() => {
                downloadRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
                closeNavbar();
              }}/>
          </div>
        </div>
        <div className={"w-full flex flex-row justify-between items-center lg:hidden"}>
          <div className={"cursor-pointer"} onClick={() => {
            introRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            closeNavbar();
          }}>
            <img src={"/aurora-v3-white.svg"} width={60} height={60}
                 className={`${isTop ? "hidden" : "block"}`} />
            <img src={"/aurora-v3-white.svg"} width={70} height={70}
                 className={`${isTop ? "block" : "hidden"}`} />
          </div>
          <div className={"flex flex-row gap-3"}>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                downloadRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
                closeNavbar();
              }}
            >
              <DownloadIcon width={30} height={30} />
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon width={30} height={30} />
            </button>
          </div>
        </div>
        <Transition
          show={navbarOpen}
          className={"w-full"}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} className={`lg:flex flex-grow items-center rounded-2xl mt-5  ${isTop ? "bg-gradient-to-r from-aurora-purple via-aurora-darkblue to-aurora-blue": "bg-transparent"}`}
                 id="example-navbar-warning">
              <div className="w-full flex flex-col gap-14 p-10 text-lg items-center justify-center">

                <button onClick={() => {
                  endUserRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                  closeNavbar();
                }}>For end-users
                </button>
                <button onClick={() => {
                  developerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                  closeNavbar();
                }}>For developers
                </button>
                <button onClick={() => {
                  faqRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                  closeNavbar();
                }}>FAQ
                </button>
                <button onClick={() => {
                  newsRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                  closeNavbar();
                }}>News
                </button>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
};
export default Navbar;

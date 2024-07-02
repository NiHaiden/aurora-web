"use client";

import React, { RefObject, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { DownloadIcon, MenuIcon } from "lucide-react";

function Navbar2() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header
      className={`z-40 bg-blue-900 top-0 w-full animate-fadeInDown ${scroll ? "sticky bg-white" : "bg-none"} `}>
      <nav className={"flex flex-row gap-16 text-xl text-black justify-center"}>
        <div><a href={"#about"}>About</a></div>
        <div><a href={"#features"}>Features</a></div>
        <div><a href={"#downloads"}>Community</a></div>
      </nav>
      <div className={"items-end text-white"}>
        Download
      </div>
    </header>
  );
}

const Navbar = ({ introRef, endUserRef, developerRef, faqRef, downloadRef }: {
  introRef: RefObject<any>;
  endUserRef: RefObject<any>;
  developerRef: RefObject<any>;
  faqRef: RefObject<any>;
  downloadRef: RefObject<any>;
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
      className={`fixed w-full z-30 top-0 text-white transition duration-300 ease-in-out  ${isTop ? "bg-transparent" : "bg-aurora-purple shadow-xl"}`}>
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
            <img src={"/aurora_v2_logo.svg"} width={60} height={60}
                 className={`${isTop ? "hidden" : "block"}`} />
            <img src={"/aurora_text_logo.svg"} width={100} height={100}
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
          </div>
          <div className={"flex flex-row text-lg items-center justify-center"}>
            <button
              className={"hidden lg:inline-flex gap-2 bg-gradient-to-br from-aurora-lightorange to-aurora-orangina p-3 rounded-xl shadow-xl"}
              onClick={() => {
                downloadRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
                closeNavbar();
              }}><DownloadIcon /> Get Aurora
            </button>
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
            <img src={"/aurora_v2_logo.svg"} width={60} height={60}
                 className={`${isTop ? "hidden" : "block"}`} />
            <img src={"/aurora_text_logo.svg"} width={100} height={100}
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
            <div ref={ref} className="lg:flex flex-grow items-center rounded-2xl mt-5 bg-aurora-purple "
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
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
};
export default Navbar;

"use client";

import React, { RefObject, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { DownloadIcon, MenuIcon } from "lucide-react";
import DownloadBtn from "@/components/download-btn";
import {useTranslations} from 'next-intl';
const Navbar = ({
  introRef,
  endUserRef,
  developerRef,
  faqRef,
  downloadRef,
  newsRef,
}: {
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
  const t = useTranslations('Navbar');
  return (
    <nav
      className={`fixed top-0 z-30 w-full text-white transition duration-300 ease-in-out ${isTop ? "bg-transparent" : "bg-gradient-to-r from-aurora-purple via-aurora-darkblue to-aurora-blue shadow-xl"}`}
    >
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <div className="mb-4 hidden w-full flex-row items-center justify-between gap-4 font-medium text-white md:mb-0 lg:flex">
          <div
            className={"cursor-pointer"}
            onClick={() => {
              introRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              closeNavbar();
            }}
          >
            <img
              src={"/aurora-v3-white.svg"}
              width={60}
              height={60}
              className={`${isTop ? "hidden" : "block"}`}
            />
            <img
              src={"/aurora-v3_logo.svg"}
              width={60}
              height={60}
              className={`${isTop ? "block" : "hidden"}`}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-14 text-lg">
            <button
              onClick={() => {
                endUserRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            >
              {t('end-user')}
            </button>
            <button
              onClick={() => {
                developerRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            >
              {t('developer')}
            </button>
            <button
              onClick={() => {
                faqRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            >
              {t('faq')}
            </button>
            <button
              onClick={() => {
                newsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            >
              {t('news')}
            </button>
          </div>
          <div
            className={
              "flex max-h-fit flex-row items-center justify-center text-lg"
            }
          >
            <DownloadBtn
              onClick={() => {
                downloadRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            />
          </div>
        </div>
        <div
          className={
            "flex w-full flex-row items-center justify-between lg:hidden"
          }
        >
          <div
            className={"cursor-pointer"}
            onClick={() => {
              introRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              closeNavbar();
            }}
          >
            <img
              src={"/aurora-v3-white.svg"}
              width={60}
              height={60}
              className={`${isTop ? "hidden" : "block"}`}
            />
            <img
              src={"/aurora-v3_logo.svg"}
              width={60}
              height={60}
              className={`${isTop ? "block" : "hidden"}`}
            />
          </div>
          <div className={"flex flex-row gap-3"}>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => {
                downloadRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                closeNavbar();
              }}
            >
              <DownloadIcon width={30} height={30} />
            </button>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
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
            <div
              ref={ref}
              className={`mt-5 flex-grow items-center rounded-2xl lg:flex ${isTop ? "bg-gradient-to-r from-aurora-purple via-aurora-darkblue to-aurora-blue" : "bg-transparent"}`}
              id="example-navbar-warning"
            >
              <div className="flex w-full flex-col items-center justify-center gap-14 p-10 text-lg">
                <button
                  onClick={() => {
                    endUserRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    closeNavbar();
                  }}
                >
                   {t('end-user')}
                </button>
                <button
                  onClick={() => {
                    developerRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    closeNavbar();
                  }}
                >
                   {t('developers')}
                </button>
                <button
                  onClick={() => {
                    faqRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    closeNavbar();
                  }}
                >
                   {t('faq')}
                </button>
                <button
                  onClick={() => {
                    newsRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    closeNavbar();
                  }}
                >
                   {t('news')}
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

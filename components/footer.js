import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 sm:p-6 dark:bg-gray-800 dark:border-t-2 border-t-2 border-white dark:border-white ">
      <div className="mx-auto container">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"}>Hyper Teknoloji Case</Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Bağlantılar
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="">
                  <Link href={"/sepet"} className="hover:underline">
                    Sepet
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Beni Takip Et
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://github.com/ZeynelBasaran"
                    target="blank"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/zeynelbasaran/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Zeynel Başaran . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link
              href="https://www.linkedin.com/in/zeynelbasaran/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="blank"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/ZeynelBasaran"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="blank"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

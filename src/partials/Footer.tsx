import { trpc } from "@/utils/trpc";
import getConfig from "next/config.js";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const [webAppVersion, setWebAppVersion] = useState("v0.0.1");
  const [predictionVersion, setPredictionVersion] = useState("v0.0.1");
  const { publicRuntimeConfig } = getConfig();

  const status = trpc.useQuery(["topic.getStatus"]);

  useEffect(() => {
    setPredictionVersion(status.data?.version);
    setWebAppVersion(publicRuntimeConfig.NEXT_PUBLIC_VERSION);
  }, [status, publicRuntimeConfig]);

  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-block" aria-label="CS-Insights">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="footer-logo"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#footer-logo)"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="/terms"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Terms
              </Link>{" "}
              ·{" "}
              <Link
                href="/privacy"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/dashboard"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Author Analysis
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/dashboard"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Conference Manager
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/dashboard"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Topic Viewer
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/documentation"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/support"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/privacy"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">Subscribe</h6>
            <p className="mb-4 text-sm text-gray-600">
              Get the latest news and articles to your inbox once per month.
            </p>
            <form>
              <div className="mb-4 flex flex-wrap">
                <div className="w-full">
                  <label className="sr-only block text-sm" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex max-w-xs items-center">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-800"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="mx-3 h-3 w-3 shrink-0 fill-current text-blue-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  <p className="mt-2 text-sm text-green-600">
                    Thanks for subscribing!
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Bottom area */}
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Social links */}
          <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a
                href="https://github.com/gipplab/cs-insights-main"
                target="_blank"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Github"
                rel="noreferrer"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} by cs-insights.uni-goettingen.de.
            All rights reserved.
          </div>
          <span className="ml-4 hidden text-sm text-gray-600 md:flex">
            WebApp Version {webAppVersion}
          </span>
          <span className="ml-4 hidden text-sm text-gray-600 md:flex">
            Prediction Version {predictionVersion}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

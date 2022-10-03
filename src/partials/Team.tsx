import Image from "next/future/image";

import JanPhilipWahle from "../images/about-jan-philip-wahle.png";
import SaifMMohammad from "../images/about-saif-m-mohammad.jpg";
import TerryRuas from "../images/about-terry-ruas.jpg";

function Team() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2">Who is behind the product?</h2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:flex sm:max-w-5xl sm:flex-wrap sm:justify-center xl:-my-8"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="py-6 sm:w-1/2 sm:py-8 sm:px-3 md:w-1/3"
              data-aos="zoom-y-out"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="mb-4 rounded-full"
                  src={JanPhilipWahle}
                  width="120"
                  height="120"
                  alt="Jan Philip Wahle"
                />
                <h4 className="mb-1 text-xl font-bold">Jan Philip Wahle</h4>
                <div className="mb-2 font-medium text-blue-600">
                  Tech Lead & Co-founder
                </div>
                <p className="mb-3 text-center text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm font-medium text-gray-600">
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://jpwahle.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Webpage
                  </a>{" "}
                  ·{" "}
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://twitter.com/jpwahle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="py-6 sm:w-1/2 sm:py-8 sm:px-3 md:w-1/3"
              data-aos="zoom-y-out"
              data-aos-delay="150"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="mb-4 rounded-full"
                  src={TerryRuas}
                  width="120"
                  height="120"
                  alt="Dr. Terry Lima Ruas"
                />
                <h4 className="mb-1 text-xl font-bold">Dr. Terry Ruas</h4>
                <div className="mb-2 font-medium text-blue-600">
                  Head of Operations & Co-founder
                </div>
                <p className="mb-3 text-center text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm font-medium text-gray-600">
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://gipplab.org/team/dr-terry-lima-ruas/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Webpage
                  </a>{" "}
                  ·{" "}
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://twitter.com/ruasterry"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="py-6 sm:w-1/2 sm:py-8 sm:px-3 md:w-1/3"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="mb-4 rounded-full"
                  src={SaifMMohammad}
                  width="130"
                  height="130"
                  alt="Dr. Saif M. Mohammad"
                />
                <h4 className="mb-1 text-xl font-bold">Dr. Saif M. Mohammad</h4>
                <div className="mb-2 font-medium text-blue-600">
                  Head of Research & Co-Founder
                </div>
                <p className="mb-3 text-center text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat.
                </p>
                <div className="text-sm font-medium text-gray-600">
                  <a
                    className="text-gray-900 hover:underline"
                    href="http://saifmohammad.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Webpage
                  </a>{" "}
                  ·{" "}
                  <a
                    className="text-gray-900 hover:underline"
                    href="https://twitter.com/SaifMMohammad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

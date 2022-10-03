import Image from "next/future/image";
import AboutImage from "../images/about-01.jpg";

function AboutIntro() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h1 mb-4">
              We enable developers to perform amazing research projects
            </h1>
            <p className="text-xl text-gray-600">
              We have transformed product development, making it faster,
              simpler... better!
            </p>
          </div>

          <figure className="flex items-start justify-center">
            <Image
              className="rounded shadow-2xl"
              src={AboutImage}
              width="768"
              height="432"
              alt="The view over Marseilla at the LREC conference 2022"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;

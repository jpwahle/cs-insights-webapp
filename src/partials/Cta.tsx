import { useSession } from "next-auth/react";
import Link from "next/link";

function Cta() {
  const { data: session } = useSession();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="rounded bg-blue-600 py-10 px-8 shadow-2xl md:py-16 md:px-12"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mr-16 lg:mb-0 lg:text-left">
                <h3 className="h3 mb-2 text-white">Ready to get started?</h3>
                <p className="text-lg text-white opacity-75">
                  Our free tier will get you started right away.
                </p>
              </div>

              {/* CTA button */}
              <div>
                <Link href="/dashboard">
                  <a className="btn bg-gradient-to-r from-blue-100 to-white text-blue-600">
                    {session?.user ? "To the App" : "Get started for free"}
                    <svg
                      className="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

import Footer from "@/partials/Footer";
import Header from "@/partials/LandingHeader";
import Link from "next/link";
import { FormEvent } from "react";

function Support() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/* Contact section */}
        <section>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                <h1 className="h1">
                  Have a question about{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                    CS-Insights
                  </span>
                  ? Contact us directly
                </h1>
              </div>

              {/* Contact form */}
              <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800"
                      htmlFor="first-name"
                    >
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="form-input w-full text-gray-800"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800"
                      htmlFor="last-name"
                    >
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="form-input w-full text-gray-800"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800"
                      htmlFor="email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full text-gray-800"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800"
                      htmlFor="subject"
                    >
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="form-input w-full text-gray-800"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>
                <div className="-mx-3 mb-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="form-textarea w-full text-gray-800"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="-mx-3 mt-4 flex flex-wrap">
                  <div className="w-full px-3">
                    <button
                      className="btn w-full bg-blue-600 text-white hover:bg-blue-700"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  By clicking &quot;send&quot; you consent to allow CS-Insights
                  to store and process the personal information submitted above
                  and agree to our{" "}
                  <Link href="/terms">
                    <a className="underline">Terms of Service</a>
                  </Link>{" "}
                  as well as our{" "}
                  <Link href="/privacy">
                    <a className="underline">Privacy Policy</a>
                  </Link>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Support;

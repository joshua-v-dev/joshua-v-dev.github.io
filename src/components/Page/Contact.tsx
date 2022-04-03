

export default function Contact ()
{
  return (
    <>

      <div className="block h-full w-full space-y-16 bg-gradient-to-r from-blue-600 via-teal-500 to-purple-500">
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
                <div className="max-w-lg">
                  <h2 className="font-heading mb-8 text-3xl font-bold leading-tight md:text-4xl md:leading-tight lg:mb-12 lg:text-5xl lg:leading-tight">
                    I look forward to hearing from you.
                  </h2>
                  <h3 className="font-heading mb-1 text-2xl font-bold">
                    Office Hours:
                  </h3>
                  <p className="mb-6 text-lg font-bold leading-loose">
                    Mon-Sat 9am - 9pm
                  </p>
                  <h3 className="font-heading mb-1 text-2xl font-bold">
                    Let&apos;s innovate together!
                  </h3>
                  <p className="text-lg font-bold leading-loose ">
                    What are you waiting for? Let&apos;s get in touch!
                  </p>
                  <p className="text-lg font-bold leading-loose">
                    Thank you for your time
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <form action="#">
                  <input
                    className="mb-4 w-full rounded border py-3 pl-3"
                    type="text"
                    placeholder="Name"
                  ></input>
                  <input
                    className="mb-4 w-full rounded border py-3 pl-3"
                    type="email"
                    placeholder="E-mail"
                  ></input>
                  <textarea
                    className="mb-4 w-full resize-none rounded border p-3"
                    name="message"
                    cols={ 30 }
                    rows={ 10 }
                    placeholder="Your Message..."
                  ></textarea>
                  <button className="block rounded border border-indigo-500 bg-indigo-500 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:border-indigo-600 hover:bg-indigo-600">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

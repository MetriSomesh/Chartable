


export default function Hero() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center">
            <h1 className=" animate-fadeIn text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Podcast</span>
              <span className="block text-indigo-500 mt-2">
                With AI-Powered Analytics
              </span>
            </h1>

            <p className="animate__animated animate__fadeIn animate__delay-1s mt-6 max-w-2xl mx-auto text-xl text-neutral-300">
              Unlock deep insights into your audience, automate outreach, and
              scale your podcasts growth with advanced analytics and AI tools.
            </p>

            <div className="animate__animated animate__fadeIn animate__delay-2s mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <div className="rounded-md shadow">
                <a
                  href="signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0">
                <a
                  href="/signin"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-neutral-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeIn animate__delay-3s mt-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-lg shadow-xl overflow-hidden bg-neutral-800 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-500 mb-2">
                      500K+
                    </div>
                    <div className="text-neutral-300">Episodes Analyzed</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-500 mb-2">
                      10M+
                    </div>
                    <div className="text-neutral-300">Listener Insights</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-500 mb-2">
                      98%
                    </div>
                    <div className="text-neutral-300">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
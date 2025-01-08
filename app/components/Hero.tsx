
export default function Hero() {
    
    return (
      <section className="bg-neutral-900 min-h-[70vh] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft ">
              <h1 className="text-4xl  md:text-6xl  font-bold text-white mb-6 ">
                Transform Your Podcast Analytics
                <span className="text-indigo-500"> Into Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Unlock powerful analytics and attribution tools to understand
                your audience, track performance, and grow your podcast across
                all major platforms.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a
                  href=""
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 "
                >
                  Start Free Trial
                </a>
                <a
                  href=""
                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2  sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 "
                >
                  See Features
                </a>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400">
                  <span className="text-white font-semibold">1000+</span>
                  podcast creators trust Chartable
                </p>
              </div>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="bg-neutral-800 rounded-2xl p-6 shadow-2xl">
                <div className="bg-neutral-900 rounded-xl p-4 mb-4">
                  <div className="h-2 bg-indigo-500 rounded-full w-3/4 mb-4"></div>
                  <div className="h-2 bg-neutral-700 rounded-full w-1/2 mb-4"></div>
                  <div className="h-2 bg-neutral-700 rounded-full w-5/6"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="h-20 bg-indigo-500/20 rounded-lg mb-2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-3/4"></div>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="h-20 bg-indigo-500/20 rounded-lg mb-2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
}
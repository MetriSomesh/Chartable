
export default function Analytics() {
    return (
        <section id="Analytics" className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="animate-fadeInLeft">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Analytics Dashboard</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Deep insights into your podcast performance
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Make data-driven decisions with comprehensive analytics that matter.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Audience Demographics</h3>
                <p className="mt-2 text-base text-gray-300">
                  Understand your listeners with detailed age, location, and device analytics.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Growth Trends</h3>
                <p className="mt-2 text-base text-gray-300">
                  Track your podcasts growth with historical data and predictive analytics.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Episode Performance</h3>
                <p className="mt-2 text-base text-gray-300">
                  Monitor engagement metrics and download statistics for each episode.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 animate-fadeInRight">
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-6">
            <div className="relative h-96">
              {/* <!-- Analytics Dashboard Mock --> */}
              <div className="space-y-4">
                <div className="bg-neutral-700 rounded-lg p-4">
                  <div className="h-8 bg-neutral-600 rounded w-1/3 mb-4"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-neutral-600 rounded"></div>
                    <div className="h-20 bg-neutral-600 rounded"></div>
                    <div className="h-20 bg-neutral-600 rounded"></div>
                  </div>
                </div>
                
                <div className="bg-neutral-700 rounded-lg p-4">
                  <div className="h-40 bg-neutral-600 rounded"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-700 rounded-lg p-4">
                    <div className="h-24 bg-neutral-600 rounded"></div>
                  </div>
                  <div className="bg-neutral-700 rounded-lg p-4">
                    <div className="h-24 bg-neutral-600 rounded"></div>
                  </div>
                </div>
              </div>

              {/* <!-- Animated Overlay Effects --> */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4">
                <div className="h-24 w-24 bg-indigo-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4">
                <div className="h-24 w-24 bg-violet-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
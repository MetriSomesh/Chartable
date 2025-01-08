

export default function Analytics() {
    return (
      <section
        id="analytics_dashboard"
        className="bg-neutral-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Podcast Analytics Dashboard
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get deep insights into your podcast performance with our
                comprehensive analytics dashboard.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Real-time Metrics
                    </h3>
                    <p className="text-gray-400">
                      Monitor downloads, listeners, and engagement in real-time
                      across all platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Audience Demographics
                    </h3>
                    <p className="text-gray-400">
                      Understand your listeners with detailed demographic and
                      geographic insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Performance Trends
                    </h3>
                    <p className="text-gray-400">
                      Track growth patterns and identify trending episodes with
                      advanced analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="bg-neutral-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-700 rounded-full w-32"></div>
                    <div className="h-3 bg-neutral-700 rounded-full w-24"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-indigo-600 rounded-lg"></div>
                    <div className="h-8 w-8 bg-neutral-700 rounded-lg"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="h-2 bg-neutral-700 rounded-full w-16 mb-2"></div>
                    <div className="h-8 bg-indigo-600 rounded-lg"></div>
                    <div className="h-24 bg-indigo-500/20 rounded-lg mt-4"></div>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="h-2 bg-neutral-700 rounded-full w-16 mb-2"></div>
                    <div className="h-8 bg-indigo-600 rounded-lg"></div>
                    <div className="h-24 bg-indigo-500/20 rounded-lg mt-4"></div>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-2 bg-neutral-700 rounded-full w-24"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-16"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-indigo-500 rounded-full w-3/4"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-1/2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-5/6"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-2/3"></div>
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
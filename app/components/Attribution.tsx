

export default function Attribution() {
    return (
      <section
        id="attribution"
        className="bg-neutral-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-white mb-6">
                Cross-Platform Attribution Analytics
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Track and understand your listener's journey across every
                platform and marketing channel.
              </p>

              <div className="space-y-8">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Multi-Touch Attribution
                    </h3>
                    <p className="text-gray-400">
                      Understand which marketing channels drive the most
                      valuable listeners to your podcast.
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
                      Campaign Performance
                    </h3>
                    <p className="text-gray-400">
                      Track ROI across advertising campaigns and promotional
                      efforts.
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Conversion Tracking
                    </h3>
                    <p className="text-gray-400">
                      Monitor listener actions and engagement across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="bg-neutral-800 rounded-2xl p-6 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                        <span className="text-white">Direct Traffic</span>
                      </div>
                      <span className="text-indigo-500 font-semibold">45%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full width-[45%]"
                       
                      ></div>
                    </div>
                  </div>

                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-white">Social Media</span>
                      </div>
                      <span className="text-purple-500 font-semibold">30%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full w-[30%]"
                       
                      ></div>
                    </div>
                  </div>

                  <div className="bg-neutral-900 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white">Ad Campaigns</span>
                      </div>
                      <span className="text-blue-500 font-semibold">25%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full w-[25%]"
                        
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-neutral-900 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      Attribution Summary
                    </div>
                    <p className="text-gray-400 text-sm">
                      Last 30 Days Performance
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-500">
                        87%
                      </div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-500">
                        12K
                      </div>
                      <div className="text-gray-400 text-sm">Trackings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-500">
                        3.2x
                      </div>
                      <div className="text-gray-400 text-sm">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
}
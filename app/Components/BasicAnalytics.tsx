export default function BasicAnalytics() {
    return (
      <div>
        <section
          id="overview"
          className="p-6 bg-neutral-900 text-white"
        >
          <div className="grid gap-6 mb-8">
            {/* <!-- Summary Cards --> */}
            <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6">
              {/* <!-- Total Episodes --> */}
              <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Total Episodes</p>
                    <h3 className="text-2xl font-bold mt-1">2</h3>
                    <p className="text-sm text-green-400 mt-2">
                      ↑ 100% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-700/50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Total Downloads --> */}
              <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Total Downloads</p>
                    <h3 className="text-2xl font-bold mt-1">0</h3>
                    <p className="text-sm text-green-400 mt-2">
                      ↑ 0% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-700/50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Active Listeners --> */}
              <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Active Listeners</p>
                    <h3 className="text-2xl font-bold mt-1">2</h3>
                    <p className="text-sm text-green-400 mt-2">
                      ↑ 50% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-700/50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Engagement Rate --> */}
              <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Engagement Rate</p>
                    <h3 className="text-2xl font-bold mt-1">68%</h3>
                    <p className="text-sm text-green-400 mt-2">
                      ↑ 5% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-700/50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-neutral-300"
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
              </div>
            </div>

            {/* <!-- Recent Episodes --> */}
            <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Episodes</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-neutral-400 text-sm border-b border-neutral-700">
                      <th className="text-left pb-3">Episode Title</th>
                      <th className="text-left pb-3">Release Date</th>
                      <th className="text-left pb-3">Duration</th>
                      <th className="text-left pb-3">Downloads</th>
                      <th className="text-left pb-3">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-700">
                      <td className="py-4">Test my voice</td>
                      <td className="py-4">Jan 08, 2025</td>
                      <td className="py-4">3s</td>
                      <td className="py-4">0</td>
                      <td className="py-4">2/5</td>
                    </tr>
                    <tr className="border-b border-neutral-700">
                      <td className="py-4">Funny Stoy</td>
                      <td className="py-4">Jan 11, 2025</td>
                      <td className="py-4">1min</td>
                      <td className="py-4">0</td>
                      <td className="py-4">3/5</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Audience Growth Chart --> */}
            {/* <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Audience Growth</h2>
                <select className="bg-neutral-700 text-white rounded-lg px-3 py-1 text-sm border border-neutral-600">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-64 bg-neutral-700/30 rounded-lg flex items-center justify-center">
                <p className="text-neutral-400">
                  Chart Placeholder - Audience Growth Trends
                </p>
              </div>
            </div> */}

            {/* <!-- Top Performing Episodes --> */}
            <div className="grid grid-cols-1 lggrid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Top Performing Episodes
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        Funny Story
                      </h4>
                      <p className="text-sm text-neutral-400">
                        0 downloads
                      </p>
                    </div>
                    <span className="text-green-400">↑ 0%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        Test Voice
                      </h4>
                      <p className="text-sm text-neutral-400">
                        0 downloads
                      </p>
                    </div>
                    <span className="text-green-400">↑ 0%</span>
                  </div>
                  
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Listener Demographics
                </h2>
                <div className="h-64 bg-neutral-700/30 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">
                    Chart Placeholder - Demographics Distribution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}


export default function OtherAnalytics() { 
    return (
      <div>
        <section
          id="episode_performance"
          className="p-6 bg-neutral-900 text-white"
        >
          <div className="grid gap-6">
            {/* <!-- Performance Overview Cards --> */}
            <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-neutral-400">Total Downloads</h3>
                  <svg
                    className="w-5 h-5 text-green-400"
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
                <p className="text-2xl font-bold mt-2">458,291</p>
                <p className="text-sm text-green-400 mt-1">
                  ↑ 23% vs last month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-neutral-400">
                    Avg. Completion Rate
                  </h3>
                  <svg
                    className="w-5 h-5 text-green-400"
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
                <p className="text-2xl font-bold mt-2">82%</p>
                <p className="text-sm text-green-400 mt-1">
                  ↑ 5% vs last month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-neutral-400">Engagement Score</h3>
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <p className="text-2xl font-bold mt-2">8.7/10</p>
                <p className="text-sm text-green-400 mt-1">
                  ↑ 0.5 vs last month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-neutral-400">Avg. Listen Time</h3>
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p className="text-2xl font-bold mt-2">3824</p>
                <p className="text-sm text-green-400 mt-1">
                  ↑ 215 vs last month
                </p>
              </div>
            </div>

            {/* <!-- Episode Performance Table --> */}
            <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Episode Performance</h2>
                <div className="flex space-x-4">
                  <select className="bg-neutral-700 text-sm rounded-lg px-3 py-1 border border-neutral-600">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                  </select>
                  <button className="bg-blue-600 text-sm px-4 py-1 rounded-lg hoverbg-blue-700 transition-colors">
                    Export Data
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-neutral-400 border-b border-neutral-700">
                      <th className="pb-3 font-medium">Episode Title</th>
                      <th className="pb-3 font-medium">Release Date</th>
                      <th className="pb-3 font-medium">Downloads</th>
                      <th className="pb-3 font-medium">Completion Rate</th>
                      <th className="pb-3 font-medium">Engagement</th>
                      <th className="pb-3 font-medium">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-700">
                      <td className="py-4">
                        How AI is Changing Content Creation
                      </td>
                      <td className="py-4">Mar 15, 2024</td>
                      <td className="py-4">45,892</td>
                      <td className="py-4">87%</td>
                      <td className="py-4">9.2/10</td>
                      <td className="py-4 text-green-400">↑ 32%</td>
                    </tr>
                    <tr className="border-b border-neutral-700">
                      <td className="py-4">Interview with Tech Leaders</td>
                      <td className="py-4">Mar 12, 2024</td>
                      <td className="py-4">38,567</td>
                      <td className="py-4">85%</td>
                      <td className="py-4">8.9/10</td>
                      <td className="py-4 text-green-400">↑ 28%</td>
                    </tr>
                    <tr className="border-b border-neutral-700">
                      <td className="py-4">Future of Digital Marketing</td>
                      <td className="py-4">Mar 08, 2024</td>
                      <td className="py-4">35,234</td>
                      <td className="py-4">83%</td>
                      <td className="py-4">8.7/10</td>
                      <td className="py-4 text-green-400">↑ 25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Performance Charts --> */}
            <div className="grid grid-cols-1 lggrid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h3 className="text-lg font-semibold mb-4">Download Trends</h3>
                <div className="h-80 bg-neutral-700/30 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">Download Trends Chart</p>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Listener Drop-off Analysis
                </h3>
                <div className="h-80 bg-neutral-700/30 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">Listener Drop-off Chart</p>
                </div>
              </div>
            </div>

            {/* <!-- Episode Insights --> */}
            <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <h3 className="text-lg font-semibold mb-4">
                Key Episode Insights
              </h3>
              <div className="grid grid-cols-1 mdgrid-cols-3 gap-6">
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">
                    Peak Engagement Points
                  </h4>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm">• 530 - AI Discussion Peak</li>
                    <li className="text-sm">• 1545 - Key Interview Insights</li>
                    <li className="text-sm">• 2815 - Case Study Review</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">Popular Segments</h4>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm">• Tech Predictions (35%)</li>
                    <li className="text-sm">• Industry Analysis (28%)</li>
                    <li className="text-sm">• Q&amp;A Session (22%)</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">
                    Listener Feedback
                  </h4>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm">• Content Quality 9.2/10</li>
                    <li className="text-sm">• Audio Quality 9.5/10</li>
                    <li className="text-sm">• Guest Rating 9.0/10</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
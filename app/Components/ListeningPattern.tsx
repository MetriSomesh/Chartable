
export default function ListningPattern() {
    return (
      <div>
        <section
          id="audience_analytics"
          className="p-6 bg-neutral-900 text-white"
        >
          <div className="grid gap-6">
            {/* <!-- Audience Overview Cards --> */}
            <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-3 gap-6">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Total Listeners</h3>
                  <select className="bg-neutral-700 text-sm rounded-lg px-3 py-1 border border-neutral-600">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="mt-4">
                  <h4 className="text-3xl font-bold">3</h4>
                  <p className="text-green-400 text-sm mt-2">
                    ↑ 50.3% vs previous period
                  </p>
                </div>
                {/* <div className="h-32 mt-4 bg-neutral-700/30 rounded-lg"></div> */}
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Average Listen Time</h3>
                  <select className="bg-neutral-700 text-sm rounded-lg px-3 py-1 border border-neutral-600">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="mt-4">
                  <h4 className="text-3xl font-bold">22s</h4>
                  <p className="text-green-400 text-sm mt-2">
                    ↑ 8.7% vs previous period
                  </p>
                </div>
                {/* <div className="h-32 mt-4 bg-neutral-700/30 rounded-lg"></div> */}
              </div>

              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Listener Retention</h3>
                  <select className="bg-neutral-700 text-sm rounded-lg px-3 py-1 border border-neutral-600">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="mt-4">
                  <h4 className="text-3xl font-bold">76%</h4>
                  <p className="text-green-400 text-sm mt-2">
                    ↑ 5.2% vs previous period
                  </p>
                </div>
                {/* <div className="h-32 mt-4 bg-neutral-700/30 rounded-lg"></div> */}
              </div>
            </div>

            {/* <!-- Demographic Analysis --> */}
            <div className="grid grid-cols-1 lggrid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-20 text-sm">18-24</span>
                    <div className="flex-1 h-4 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-1/4 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm">25%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">25-34</span>
                    <div className="flex-1 h-4 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-2/5 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm">40%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">35-44</span>
                    <div className="flex-1 h-4 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm">33%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">45+</span>
                    <div className="flex-1 h-4 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-1/12 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm">2%</span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Geographic Distribution
                </h3>
                <div className="h-64 bg-neutral-700/30 rounded-lg"></div>
              </div> */}
            </div>

            {/* <!-- Listening Patterns --> */}
            <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <h3 className="text-lg font-semibold mb-4">Listening Patterns</h3>
              <div className="grid grid-cols-1 mdgrid-cols-2 lggrid-cols-4 gap-6">
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">
                    Peak Listening Hours
                  </h4>
                  <p className="text-2xl font-bold mt-2">6PM - 9PM</p>
                  <p className="text-sm text-neutral-400 mt-1">UTC</p>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">Most Active Day</h4>
                  <p className="text-2xl font-bold mt-2">Wednesday</p>
                  <p className="text-sm text-neutral-400 mt-1">Weekly</p>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">Device Usage</h4>
                  <p className="text-2xl font-bold mt-2">Web 78%</p>
                  <p className="text-sm text-neutral-400 mt-1">
                    Primary Platform
                  </p>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <h4 className="text-sm text-neutral-400">
                    Avg. Session Length
                  </h4>
                  <p className="text-2xl font-bold mt-2">11 secs</p>
                  <p className="text-sm text-neutral-400 mt-1">Per Listen</p>
                </div>
              </div>
            </div>

            {/* <!-- Engagement Metrics --> */}
            <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6">
              <h3 className="text-lg font-semibold mb-4">
                Engagement Over Time
              </h3>
              <div className="grid grid-cols-1 lggrid-cols-3 gap-6">
                {/* <div className="col-span-2">
                  <div className="h-80 bg-neutral-700/30 rounded-lg"></div>
                </div> */}
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-700/30 rounded-lg">
                    <h4 className="text-sm text-neutral-400">Comments</h4>
                    <p className="text-2xl font-bold mt-2">0</p>
                    <p className="text-green-400 text-sm">↑ 0% increase</p>
                  </div>
                  <div className="p-4 bg-neutral-700/30 rounded-lg">
                    <h4 className="text-sm text-neutral-400">Shares</h4>
                    <p className="text-2xl font-bold mt-2">0</p>
                    <p className="text-green-400 text-sm">↑ 0% increase</p>
                  </div>
                  <div className="p-4 bg-neutral-700/30 rounded-lg">
                    <h4 className="text-sm text-neutral-400">Subscriptions</h4>
                    <p className="text-2xl font-bold mt-2">0</p>
                    <p className="text-green-400 text-sm">↑ 0% increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
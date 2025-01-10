
export default function Features(){
    return (
        <section id="Features" className="py-20  bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fadeIn">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-white sm:text-4xl animate-fadeIn">
          Everything you need to grow your podcast
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* <!-- Analytics Feature --> */}
          <div className="group relative animate-fadeInUp">
            <div className="relative p-6  bg-neutral-700 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-xl font-medium  text-white">Advanced Analytics</h3>
                <p className="mt-4 text-base  text-gray-300">
                  Track audience trends, demographic breakdowns, and download statistics with detailed insights.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- AI Templates Feature --> */}
          <div className="group relative animate-fadeInUp delay-200">
            <div className="relative p-6  bg-neutral-700 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-xl font-medium  text-white">AI-Powered Templates</h3>
                <p className="mt-4 text-base  text-gray-300">
                  Generate engaging outreach templates and email campaigns using advanced AI technology.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Automated Workflow Feature --> */}
          <div className="group relative animate-fadeInUp delay-200">
            <div className="relative p-6  bg-neutral-700 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-xl font-medium  text-white">Automated Workflows</h3>
                <p className="mt-4 text-base  text-gray-300">
                  Streamline your outreach process with automated email sequences and campaign management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#PricingPlans" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-colors duration-300">
            View Pricing Plans
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
    );
}
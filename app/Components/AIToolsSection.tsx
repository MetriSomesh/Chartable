

export default function AITools() {
    return (
        <section id="AITools" className="py-20  bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base  text-indigo-400 font-semibold tracking-wide uppercase animate-fadeIn">AI-Powered Tools</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-white sm:text-4xl animate-fadeIn">
          Supercharge Your Outreach with AI
        </p>
        <p className="mt-4 max-w-2xl text-xl  text-gray-300 mx-auto animate-fadeIn">
          Let artificial intelligence handle your cold outreach and email campaigns while you focus on creating great content.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* <!-- AI Template Generator --> */}
          <div className="relative animate-fadeInLeft">
            <div className=" bg-neutral-700 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 bg-indigo-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
              
              <h3 className="text-2xl font-bold  text-white mb-4">AI Template Generator</h3>
              
              <div className="space-y-4">
                <div className=" bg-neutral-600 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium  text-white">Smart Templates</h4>
                      <p className="mt-1  text-gray-300">Generate personalized outreach templates based on your podcasts niche and audience.</p>
                    </div>
                  </div>
                </div>

                <div className=" bg-neutral-600 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium  text-white">Multi-Language Support</h4>
                      <p className="mt-1  text-gray-300">Create templates in multiple languages to reach a global audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Automated Workflow Builder --> */}
          <div className="relative animate-fadeInRight">
            <div className=" bg-neutral-700 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 bg-violet-500 opacity-20 rounded-full blur-xl animate-pulse"></div>

              <h3 className="text-2xl font-bold  text-white mb-4">Automated Workflow Builder</h3>
              
              <div className="space-y-4">
                <div className=" bg-neutral-600 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium  text-white">Smart Automation</h4>
                      <p className="mt-1  text-gray-300">Create automated email sequences that adapt based on recipient engagement.</p>
                    </div>
                  </div>
                </div>

                <div className=" bg-neutral-600 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium  text-white">Campaign Management</h4>
                      <p className="mt-1  text-gray-300">Track and optimize your outreach campaigns with detailed analytics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fadeIn">
          <a href="#PricingPlans" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-all duration-300">
            Start Using AI Tools
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


export default function Pricing() {
    return(
        <section id="PricingPlans" className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center animate__animated animate__fadeIn">
          Choose the Perfect Plan for Your Podcast
        </h2>
        <p className="mt-5 text-xl text-gray-300 text-center max-w-2xl mx-auto animate__animated animate__fadeIn">
          Scale your podcast growth with our flexible pricing options designed for creators at every stage
        </p>
      </div>

      <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {/* <!-- Free Tier --> */}
        <div className="relative p-8 bg-neutral-800 rounded-2xl shadow-xl animate__animated animate__fadeInLeft">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl"></div>
          <div className="relative">
            <h3 className="text-xl font-semibold text-white">Basic Analytics</h3>
            <p className="mt-4 text-gray-300">Perfect for podcasters just starting their journey</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">Free</span>
              <span className="text-base font-medium text-gray-300">/month</span>
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Basic listener analytics</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Download statistics</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Basic email collection</span>
              </li>
            </ul>

            <a href="#" className="mt-8 block w-full bg-neutral-700 border border-neutral-600 rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-neutral-600 transition-colors duration-300">
              Start for Free
            </a>
          </div>
        </div>

        {/* <!-- Premium Tier --> */}
        <div className="relative p-8 bg-indigo-600 rounded-2xl shadow-xl animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-2xl"></div>
          <div className="relative">
            <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
              Popular
            </div>
            <h3 className="text-xl font-semibold text-white">Premium Analytics</h3>
            <p className="mt-4 text-indigo-100">Advanced features for growing podcasts</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">$29</span>
              <span className="text-base font-medium text-indigo-100">/month</span>
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-white">Everything in Basic</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-white">Advanced demographics</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-white">Audience trend analysis</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-white">Email automation tools</span>
              </li>
            </ul>

            <a href="#" className="mt-8 block w-full bg-white rounded-md py-3 text-sm font-semibold text-indigo-600 text-center hover:bg-gray-100 transition-colors duration-300">
              Start Premium Trial
            </a>
          </div>
        </div>

        {/* <!-- Pro Tier --> */}
        <div className="relative p-8 bg-neutral-800 rounded-2xl shadow-xl animate__animated animate__fadeInRight">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl"></div>
          <div className="relative">
            <h3 className="text-xl font-semibold text-white">Enterprise AI</h3>
            <p className="mt-4 text-gray-300">Complete suite with AI-powered features</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">$99</span>
              <span className="text-base font-medium text-gray-300">/month</span>
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Everything in Premium</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">AI-powered templates</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Advanced automation</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-300">Priority support</span>
              </li>
            </ul>

            <a href="#" className="mt-8 block w-full bg-neutral-700 border border-neutral-600 rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-neutral-600 transition-colors duration-300">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
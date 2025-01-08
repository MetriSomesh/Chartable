

export default function Pricing() {
    return (
      <section
        id="pricing"
        className="bg-white py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Choose the plan that's right for your podcast's growth journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Starter Plan --> */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Starter
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">
                    Basic Analytics Dashboard
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">
                    Up to 10,000 Monthly Listeners
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">Basic SmartLinks</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">Email Support</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* <!-- Professional Plan --> */}
            <div className="bg-neutral-900 rounded-2xl p-8 border border-indigo-500 shadow-xl scale-105 animate-fadeInUp delay-200 ">
              <div className="absolute -top-4 right-4">
                <span className="bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Professional
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-5xl font-bold text-white">$149</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Advanced Analytics Dashboard
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Up to 100,000 Monthly Listeners
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-300">
                    Advanced SmartLinks + Attribution
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-300">Campaign Tracking</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* <!-- Enterprise Plan --> */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise
                </h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    Custom
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">
                    Custom Analytics Solutions
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Listeners</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">Custom Integration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">24/7 Dedicated Support</span>
                </li>
              </ul>
              <button className="w-full bg-neutral-800 hover:bg-neutral-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}
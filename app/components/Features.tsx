export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Podcast Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand your audience, track performance,
            and grow your podcast presence across all major platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AnalyticCard */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Podcast Analytics
            </h3>
            <p className="text-gray-600">
              Comprehensive analytics dashboard with real-time insights into
              listeners, downloads, and engagement metrics.
            </p>
          </div>
          {/* SmartLinks Card */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              SmartLinks
            </h3>
            <p className="text-gray-600">
              Create branded landing pages and track clicks across different
              podcast platforms and destinations.
            </p>
          </div>
          {/* Attribution Card */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Cross-Platform Attribution
            </h3>
            <p className="text-gray-600">
              Track and attribute listeners across multiple platforms and
              marketing campaigns.
            </p>
          </div>
          {/* Ad Campaign Card  */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ad Campaign Tracking
            </h3>
            <p className="text-gray-600">
              Monitor and optimize your advertising campaigns with detailed
              performance metrics.
            </p>
          </div>
          {/* Rank Monitoring Card */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Rank Monitoring
            </h3>
            <p className="text-gray-600">
              Track your podcast's ranking across different categories and
              platforms.
            </p>
          </div>
          {/* Platform Integration Card */}
          <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Platform Integration
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate with major podcast platforms including
              Spotify, Apple Podcasts, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

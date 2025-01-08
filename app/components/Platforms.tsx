

export default function Platfomrs() {
    return (
        <section id="integrations" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center animate-fadeIn mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Platform Integrations</h2>
        <p className="text-xl text-gray-600">Connect with all major podcast platforms and marketing tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Spotify Integration --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Spotify</h3>
          </div>
          <p className="text-gray-600">Track performance and analytics across Spotify's podcast platform.</p>
        </div>

        {/* <!-- Apple Podcasts --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200" >
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 3c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3s3-1.343 3-3V9c0-1.657-1.343-3-3-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Apple Podcasts</h3>
          </div>
          <p className="text-gray-600">Monitor downloads and audience engagement on Apple Podcasts.</p>
        </div>

        {/* <!-- Google Podcasts --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Google Podcasts</h3>
          </div>
          <p className="text-gray-600">Access detailed analytics from Google Podcasts platform.</p>
        </div>
        
        {/* <!-- Marketing Tools --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200" >
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Marketing Tools</h3>
          </div>
          <p className="text-gray-600">Integrate with your favorite marketing and analytics tools.</p>
        </div>

        {/* <!-- Analytics Platforms --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200" >
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Analytics Platforms</h3>
          </div>
          <p className="text-gray-600">Connect with popular analytics platforms for deeper insights.</p>
        </div>

        {/* <!-- Custom Integration --> */}
        <div className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp delay-200">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 ml-4">Custom Integration</h3>
          </div>
          <p className="text-gray-600">Build custom integrations using our robust API.</p>
        </div>
      </div>
    </div>
  </section>
    );
}
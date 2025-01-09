import React from "react";

export default function Testimonials() {
  return (
    <section
      id="Testimonials"
      className="py-20 bg-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate-fadeIn">
            Trusted by Podcast Creators
          </h2>
          <p className="mt-4 text-xl text-gray-300 animate-fadeIn">
            See what other podcasters are saying about PodPulse
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col bg-neutral-700 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fadeInLeft">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 inline"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-8 text-gray-300">
                  &ldquo;PodPulse transformed how I understand my audience. The
                  AI features save me hours of work every week.&rdquo;
                </blockquote>
              </div>
              <footer className="mt-8">
                <p className="text-base font-semibold text-white">
                  Sarah Johnson
                </p>
                <p className="text-base text-gray-500">
                  Tech Talk Daily Podcast
                </p>
              </footer>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col bg-neutral-700 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 inline"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-8 text-gray-300">
                  &ldquo;The analytics insights helped me grow my audience by
                  300% in just 6 months. Absolutely game-changing!&rdquo;
                </blockquote>
              </div>
              <footer className="mt-8">
                <p className="text-base font-semibold text-white">
                  Michael Chen
                </p>
                <p className="text-base text-gray-500">
                  Startup Stories Podcast
                </p>
              </footer>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col bg-neutral-700 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 animate-fadeInRight">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 inline"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-8 text-gray-300">
                  &ldquo;The automated outreach tools have helped me connect
                  with amazing guests I never thought possible.&rdquo;
                </blockquote>
              </div>
              <footer className="mt-8">
                <p className="text-base font-semibold text-white">
                  Emma Williams
                </p>
                <p className="text-base text-gray-500">
                  Creative Minds Podcast
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

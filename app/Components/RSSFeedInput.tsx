"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { redirect } from "next/navigation";

export default function RSSFEED() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rssFeed, setRssFeed] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  async function handleSubmit() {
    if (!rssFeed) {
      toast.error("Please fill in all required fields");
      return;
    }

    const loadingToast = toast.loading("Please wait...");

    try {
      const updateRssFeed = await axios.post("/api/rssfeed", {
        rssFeed: rssFeed,
      });

      if (updateRssFeed.status == 200) {
        toast.dismiss(loadingToast);
          toast.success(updateRssFeed.data.msg);
          redirect("/connectspotify")
      } else if (updateRssFeed.status == 400) {
        toast.dismiss(loadingToast);
        toast.error(updateRssFeed.data.msg);
      } else if (updateRssFeed.status == 403) {
        toast.dismiss(loadingToast);
        toast.error(updateRssFeed.data.msg);
      }
    } catch (error) {
        console.log("Error Occured: ",error)
      toast.dismiss(loadingToast);
      toast.error("Something Went Wrong");
    }
  }

  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setRssFeed(e.target.value);
  }

  return (
    <section
      id="rssform"
      className="min-h-screen bg-neutral-900 p-6 flex justify-center items-center"
    >
      <div className="max-w-2xl mx-auto pt-8">
        <div className="bg-neutral-800 border border-neutral-700/30 rounded-lg p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">
              Add Your RSS Feed
            </h2>
            <p className="text-neutral-400">
              Enter your podcast&#39s RSS feed URL to get started with analytics
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <label
                htmlFor="rss-url"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                RSS Feed URL
              </label>
              <div className="flex">
                <input
                  onChange={handleInputChange}
                  type="url"
                  id="rss-url"
                  name="rss-url"
                  placeholder="https://example.com/feed.xml"
                  className="flex-1 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 text-sm rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full p-3"
                  required
                />
                <button
                  type="button"
                  className="bg-neutral-700 border border-l-0 border-neutral-600 px-4 rounded-r-lg hover:bg-neutral-600 transition-colors"
                  title="Validate RSS Feed"
                >
                  <svg
                    className="w-5 h-5 text-neutral-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Make sure your RSS feed is publicly accessible
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                {/* <div className="h-px flex-1 bg-neutral-700"></div>
                <span className="px-4 text-sm text-neutral-400">
                  Optional Settings
                </span>
                <div className="h-px flex-1 bg-neutral-700"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Update Frequency
                  </label>
                  <select className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full p-3">
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div> */}

                {/* <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Category
                  </label>
                  <select className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent block w-full p-3">
                    <option value="tech">Technology</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                  </select>
                </div> */}
              </div>
            </div>

            <div className="bg-neutral-700/50 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-neutral-300">
                    RSS Feed Requirements
                  </h3>
                  <div className="mt-2 text-sm text-neutral-400">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Must be a valid RSS 2.0 feed</li>
                      <li>Feed must be publicly accessible</li>
                      <li>Should contain at least one episode</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                onClick={openModal}
              >
                Preview Feed
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add RSS Feed
              </button>
            </div>
          </form>
        </div>

        {/* Feed Preview Modal (Hidden by default) */}
        <div
          id="preview-modal"
          className={`${
            isModalOpen ? "flex" : "hidden"
          } fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm items-center justify-center`}
        >
          <div className="bg-neutral-800 border border-neutral-700/30 rounded-lg max-w-2xl w-full m-4">
            <div className="p-6 border-b border-neutral-700/30">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">Feed Preview</h3>
                <button
                  className="text-neutral-400 hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {rssFeed ? (
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-2 h-2 bg-[#26bd30] rounded-full animate-pulse"></div>
                    <h3 className="text-[#26bd30] font-medium">RSS Feed</h3>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <div
                      className="text-neutral-200 leading-relaxed space-y-4 [&_a]:text-[#26bd30] [&_a]:no-underline [&_a]:hover:text-[#1e9526] [&_a]:transition-colors"
                      dangerouslySetInnerHTML={{ __html: rssFeed }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-neutral-700 rounded-full"></div>
                    <div className="h-4 bg-neutral-700 rounded w-24"></div>
                  </div>
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-neutral-700/50 rounded-full w-3/4"></div>
                    <div className="h-4 bg-neutral-700/50 rounded-full w-1/2"></div>
                    <div className="h-4 bg-neutral-700/50 rounded-full w-5/6"></div>
                    <div className="h-4 bg-neutral-700/50 rounded-full w-2/3"></div>
                    <div className="h-4 bg-neutral-700/50 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

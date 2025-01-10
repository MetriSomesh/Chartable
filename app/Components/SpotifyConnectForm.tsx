
"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "sonner";


export default function SpotifyConnect() {
  const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);
   const router = useRouter();


  const handleConnect = async () => {
      const loadingToast = toast.loading("Please Wait...");
      setError(null);
      setIsLoading(true);

      try {
         const response = await axios.get("/api/auth/spotify");

          // Step 2: If the backend returns the Spotify authorization URL, redirect the user
          console.log("RESPOSNE: ", response.data.url);
         if (response.data?.url) {
             router.push(response.data.url);
            
         } else {
                   setIsLoading(false);
             toast.dismiss(loadingToast);
             console.log("REAched here");
             toast.error("Failed to fetch Spotify authorization URL.");
        
         }
      // Simulate the connection process (you can replace this with actual API logic)
          // Example: await connectToSpotifyAPI();
                setIsLoading(false);
          toast.dismiss(loadingToast);
          toast.success("Connected")
      } catch (err) {
                setIsLoading(false);
          console.log("ERROR OCCURED: ", err);
          toast.dismiss(loadingToast);
          toast.error("Failed to connect to Spotify. Please try again.");
      setError("Failed to connect to Spotify. Please try again.");
    }
  };

  return (
    <section
      id="spotifyconnect"
      className="min-h-screen bg-neutral-900 p-6 flex justify-center items-center"
    >
      <div className="max-w-2xl mx-auto pt-8">
        <div className="bg-neutral-800 border border-neutral-700/30 rounded-lg p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Connect with Spotify
            </h2>
            <p className="text-neutral-400">
              Link your Spotify account to sync and manage your podcast content
            </p>
          </div>

          <div className="bg-neutral-700/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-white mb-4">
              Benefits of Connecting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
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
                <span className="text-neutral-300">
                  Sync episode statistics
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
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
                <span className="text-neutral-300">Audience insights</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
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
                <span className="text-neutral-300">Automated analytics</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
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
                <span className="text-neutral-300">Cross-platform metrics</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-700/30 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-blue-400 mt-1"
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
              <div>
                <h3 className="text-sm font-medium text-neutral-300">
                  Before you connect
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Make sure you have:
                </p>
                <ul className="mt-2 text-sm text-neutral-400 space-y-1">
                  <li>• A Spotify for Podcasters account</li>
                  <li>• Admin access to your podcast</li>
                  <li>• Verified email address</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              className={`w-full md:w-auto px-8 py-3 ${
                isLoading ? "bg-gray-600" : "bg-green-600"
              } text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2`}
              onClick={handleConnect}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Connecting...</span>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                  </svg>
                  <span>Connect Spotify Account</span>
                </>
              )}
            </button>
            <p className="text-sm text-neutral-400">
              You can disconnect your account at any time
            </p>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

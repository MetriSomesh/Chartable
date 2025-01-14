// "use client"

// import axios from "axios";
// import { useEffect, useState } from "react";

// const makeRequest = async () => {
//   const res = await axios.post("/api/getspotifyanalytics", {
//     timeRange: "30days",
//   });
//   return res.data; // Ensure you return the response data
// };

// const Dash = () => {
//   const [analytics, setAnalytics] = useState(null); // Initialize state to null
//   const [error, setError] = useState<string | null>(null); // Handle errors

//   useEffect(() => {
//     const fetchAnalytics = async () => {
//       try {
//         const resData = await makeRequest(); // Await the response
//         setAnalytics(resData); // Set analytics data to state
//       } catch (err: any) {
//         console.error("Failed to fetch analytics:", err);
//         setError(err.response?.data?.error || "Failed to fetch analytics."); // Set error message
//       }
//     };

//     fetchAnalytics();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!analytics) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   return (
//     <div>
//       <h1>Spotify Analytics</h1>
//       <pre>{JSON.stringify(analytics, null, 2)}</pre> {/* Render analytics */}
//     </div>
//   );
// };

// export default Dash;


const Dash = () => {
  return (
    <div>
      hi
    </div>
  );
 }
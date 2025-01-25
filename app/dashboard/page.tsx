// "use client";

// import { JSX, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import BasicAnalytics from "../Components/BasicAnalytics";
// import ListningPattern from "../Components/ListeningPattern";
// // import OtherAnalytics from "../Components/OtherAnalytics";

// interface NavItem {
//   href: string;
//   icon: JSX.Element;
//   label: string;
// }

// export default function DashboardLayout() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("overview");

//   const navItems: NavItem[] = [
//     {
//       href: "#overview",
//       icon: (
//         <svg
//           className="w-5 h-5 mr-3"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           />
//         </svg>
//       ),
//       label: "Overview",
//     },
//     {
//       href: "#audience",
//       icon: (
//         <svg
//           className="w-5 h-5 mr-3"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//           />
//         </svg>
//       ),
//       label: "Audience",
//     },
//     {
//       href: "#episodes",
//       icon: (
//         <svg
//           className="w-5 h-5 mr-3"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
//           />
//         </svg>
//       ),
//       label: "Episodes",
//     },
//     {
//       href: "#analytics",
//       icon: (
//         <svg
//           className="w-5 h-5 mr-3"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//           />
//         </svg>
//       ),
//       label: "Analytics",
//     },
//     {
//       href: "#settings",
//       icon: (
//         <svg
//           className="w-5 h-5 mr-3"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//       label: "Settings",
//     },
//   ];

//   return (
//     <div className="flex">
//       {/* Desktop Sidebar */}
//       <nav className="h-screen bg-neutral-800 w-64 fixed top-0 left-0 flex-shrink-0 hidden lg:flex flex-col border-r border-neutral-700">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-white">PodPulse</h1>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           <ul className="space-y-2 px-4">
//             {navItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   className={`flex items-center p-3 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all ${
//                     activeLink === item.label.toLowerCase()
//                       ? "bg-neutral-700 text-white"
//                       : ""
//                   }`}
//                   onClick={() => setActiveLink(item.label.toLowerCase())}
//                 >
//                   {item.icon}
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="p-4 border-t border-neutral-700">
//           <div className="flex items-center">
//             <Image
//               src="/api/placeholder/40/40"
//               alt="Profile"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <div className="ml-3">
//               <p className="text-sm font-medium text-white">Admin User</p>
//               <p className="text-xs text-neutral-400">admin@podpulse.com</p>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div className="lg:hidden fixed top-4 right-4 z-50">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="bg-neutral-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
//         >
//           {!isMobileMenuOpen ? (
//             <svg
//               className="h-6 w-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="h-6 w-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="fixed inset-0 bg-neutral-800/95 backdrop-blur-sm">
//             <div className="p-4">
//               <ul className="space-y-2">
//                 {navItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       href={item.href}
//                       className="block p-3 rounded-lg text-white hover:bg-neutral-700"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 ml-0 lg:ml-64 min-h-screen overflow-y-auto bg-neutral-900">
//         <header className="sticky top-0 z-40 bg-neutral-800 border-b border-neutral-700">
//           <div className="flex items-center justify-between p-4">
//             <div className="flex items-center">
//               <h2 className="text-xl font-semibold text-white">
//                 Dashboard Overview
//               </h2>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 text-neutral-400 hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//               <button className="p-2 text-neutral-400 hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                   />
//                 </svg>
//               </button>
//               <Image
//                 src="/api/placeholder/32/32"
//                 alt="Profile"
//                 width={32}
//                 height={32}
//                 className="rounded-full cursor-pointer"
//               />
//             </div>
//           </div>
//         </header>
//         <BasicAnalytics />
//         <ListningPattern />
//         {/* <OtherAnalytics/> */}
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import axios, { AxiosError } from "axios";
// import { Loader2 } from "lucide-react";

// export default function DashboardLayout() {
//   const [userData, setUserData] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSpotifyUserData = async () => {
//       try {
//         setIsLoading(true);

//         const response = await axios.get("/api/getcurrentuser", {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         setUserData(response.data);
//         setError(null);
//       } catch (err) {
        
//           // Handle non-Axios errors
//           setError("An unexpected error occurred");
//         console.log(err);

//         setUserData(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSpotifyUserData();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-full min-h-screen">
//         <Loader2
//           className="animate-spin text-blue-500"
//           size={48}
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-full min-h-screen">
//         <div className="text-red-500 text-center">
//           <p className="text-2xl font-bold">Error Fetching Spotify Data</p>
//           <p className="mt-2">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Spotify Creator Dashboard</h1>

//       {userData ? (
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <div className="grid grid-cols-2 gap-4">
//             {Object.entries(userData).map(([key, value]) => (
//               <div
//                 key={key}
//                 className="border-b pb-2"
//               >
//                 <span className="font-semibold text-gray-600 capitalize">
//                   {key.replace(/_/g, " ")}:
//                 </span>
//                 <span className="ml-2 text-gray-800">
//                   {typeof value === "object"
//                     ? JSON.stringify(value)
//                     : String(value)}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="text-gray-500">No user data available</div>
//       )}
//     </div>
//   );
// }

"use client"

import axios from "axios";

const fetchSpotifyUserData = async () => {
  try {
    const response = await axios.get(
      "https://creators.spotify.com/pod/api/currentuser",
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-GB,en;q=0.9",
          "cache-control": "max-age=0",
          cookie: `sssss=1; sp_t=6da555777edd35b0b4f7b9518a89737b; sp_m=in-en; sp_adid=c9376540-ba55-4f74-9a95-155e20fd3a3a; _gcl_au=1.1.89969736.1736315293; _fbp=fb.1.1736315296850.37092786228496672; _hjSessionUser_3893126=eyJpZCI6ImE3ZDBkYmU2LWE0MTMtNTM3ZC04MjVmLWE2MDMwZDY5ZGEzMCIsImNyZWF0ZWQiOjE3MzYzMTUzNTY3OTEsImV4aXN0aW5nIjp0cnVlfQ==; reduxPersist%3AlocalStorage={%22lastPlayedSegment%22:{}}; reduxPersist%3Atutorial={%22dismissedBanners%22:{}%2C%22dismissedTutorialPopups%22:{}%2C%22isOptedOutOfDistribution%22:false%2C%22isShortMetadataFormModalShowing%22:false}; _scid=MdKEEdooTwvj7DHhEiHfZkbnQJ0r24JD; LPVID=U1ZGNkYTVkNzRhZWU2NzZm; OptanonAlertBoxClosed=2025-01-08T05:49:54.752Z; sp_gaid=0088fc870bd89827aa667149ca73611a389d9484d6787472f5e652; _cs_c=0; sp_last_utm=%7B%22utm_campaign%22%3A%22your_account%22%2C%22utm_medium%22%3A%22menu%22%2C%22utm_source%22%3A%22spotify%22%7D; _hp5_event_props.4043975597=%7B%22market%22%3A%22in%22%2C%22loggedIn%22%3Atrue%2C%22language%22%3A%22en%22%7D; _hp5_meta.4043975597=%7B%22userId%22%3A%221662500271414952%22%2C%22sessionId%22%3A%221885383582520049%22%2C%22lastEventTime%22%3A1736584583963%2C%22sessionProperties%22%3A%7B%22time%22%3A1736584583963%2C%22referrer%22%3A%22https%3A%2F%2Fopen.spotify.com%2F%22%2C%22id%22%3A%221885383582520049%22%2C%22search_keyword%22%3A%22%22%2C%22utm%22%3A%7B%22source%22%3A%22spotify%22%2C%22medium%22%3A%22menu%22%2C%22term%22%3A%22%22%2C%22content%22%3A%22%22%2C%22campaign%22%3A%22your_account%22%7D%2C%22initial_pageview_info%22%3A%7B%22time%22%3A1736584583963%2C%22id%22%3A%223479103619151749%22%2C%22title%22%3A%22Spotify%22%2C%22url%22%3A%7B%22domain%22%3A%22www.spotify.com%22%2C%22path%22%3A%22%2Fin-en%2Faccount%2Foverview%2F%22%2C%22query%22%3A%22%3Futm_source%3Dspotify%26utm_medium%3Dmenu%26utm_campaign%3Dyour_account%22%2C%22hash%22%3A%22%22%7D%2C%22source_properties%22%3A%7B%22screen_height%22%3A965%2C%22screen_width%22%3A1920%7D%7D%7D%7D; _cs_id=3d76c7c9-227c-a962-b6f7-fee90261ff8c.1736333945.7.1736584586.1736584586.1732551656.1770497945583.1; _ga_LJDH9SQRHZ=GS1.1.1736587935.1.1.1736588055.0.0.0; _ga_BS28GFQSGL=GS1.1.1736588123.2.0.1736588123.0.0.0; _ga_ZWG1NSHWD8=GS1.1.1736588127.10.0.1736588127.0.0.0; _ga_S35RN5WNT2=GS1.1.1736588188.10.0.1736588188.0.0.0; _ga_ZWRF3NLZJZ=GS1.1.1736844922.12.1.1736845613.0.0.0; _ScCbts=%5B%5D; reduxPersistIndex=[%22reduxPersist:localStorage%22%2C%22reduxPersist:tutorial%22]; _sctr=1%7C1737225000000; _ga_BMC5VGR8YS=GS1.2.1737289458.12.0.1737289458.60.0.0; _gid=GA1.2.682833222.1737803938; ab.storage.deviceId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3Aa10850fd-b96c-053d-b0d8-71515fac1eac%7Ce%3Aundefined%7Cc%3A1736315307328%7Cl%3A1737803939518; ab.storage.userId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3A00f54e911cfec51dba30ff75cf81404514ab44634b0de8778d686d%7Ce%3Aundefined%7Cc%3A1736315307321%7Cl%3A1737803939519; LPSID-2422064=taQfkWPiTfW7Garu4QrUxw; anchorpw_s=s%3A1Ji4dXiH2D2oQbSR7eenVWDZL9wlWgm-.cNMXIvd3HyhZ4a3MAIHH7C7viV05tR6JxBBHYo6rYKY; sp_dc=AQDLw5zDTuSM7gg8OgOqryhmG7cmcuziFOStWqZjUlkQZorHnytZq_qG0eW7h40_5qU3wPHooPOl0cuZWx6FAnp_34FYbCIpSiX_Jo70pZCP-B8x6CkbcGZyhgP_LMEM_4ruGhxDYFhrTsa56JpoKLPThzzj_jtUWCub2GWLNHI9QXaiNexMGnlk5rGDssX76PX3ru0o1r8hgZnp3cJCK-6KoJvO7xS6RnrUdagLa9swLsfc_ul76ylR8qt3X7zhZ4F95bDVOLhsnBs; sp_key=bd4cf09b-84ba-42a0-9098-1046d196e916; _ga=GA1.2.1550281532.1736315186; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Jan+25+2025+17%3A00%3A23+GMT%2B0530+(India+Standard+Time)&version=202411.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=s00%3A1%2Cf00%3A1%2Cm00%3A1%2Ct00%3A1%2Ci00%3A1%2Cf11%3A1%2Cm03%3A1&AwaitingReconsent=false&geolocation=IN%3BMH; _scid_r=PVKEEdooTwvj7DHhEiHfZkbnQJ0r24JD3Rns1Q; _ga_B7DHJZL7G0=GS1.1.1737803933.20.1.1737804625.0.0.0; ab.storage.sessionId.91ac64b1-3e86-476a-9953-ccba0370c1d6=g%3A6c4eea40-e8bf-e438-a066-b249ed6eb34b%7Ce%3A1737806724482%7Cc%3A1737803939517%7Cl%3A1737804924482`, // Add your cookies here
        },
        withCredentials: true, // Allows sending cookies with request
      }
    );

    console.log("User Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify user data:", error);
    throw error;
  }
};

export default function SpotifyUser() {
  const handleFetch = async () => {
    try {
      const data = await fetchSpotifyUserData();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <div>
      <h1>Spotify User Data</h1>
      <button onClick={handleFetch}>Fetch Data</button>
    </div>
  );
}

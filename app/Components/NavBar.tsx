import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
import { signOut } from "next-auth/react";
import SignButton from "./landing/SignButton";

export default async function Nav() {
  const session = await getServerSession(NEXT_AUTH);
  if (session?.user) {
    // redirect("/");
    console.log(session);
  }
  return (
    <nav
      id="Navbar"
      className=" bg-[#171717] fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <!-- Logo --> */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold  text-neutral-100">
              PodPulse
            </span>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#Hero"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#Features"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#Analytics"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Analytics
              </a>
              <a
                href="#AITools"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                AI Tools
              </a>
              <a
                href="#PricingPlans"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#Contact"
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
              <SignButton/>
            </div>
          </div>

          {/* <!-- Theme Toggle --> */}

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="menu-icon"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className="close-icon hidden"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu --> */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-neutral-800"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#Hero"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="#Features"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Features
          </a>
          <a
            href="#Analytics"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Analytics
          </a>
          <a
            href="#AITools"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            AI Tools
          </a>
          <a
            href="#PricingPlans"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Pricing
          </a>
          <a
            href="#Contact"
            className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

"use-client"

import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index:any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What analytics features are included in the free tier?",
      answer:
        "The free tier includes basic listener analytics, download statistics, and simple demographic data. You'll get essential insights to understand your podcast's performance.",
    },
    {
      question: "How does the AI-powered outreach system work?",
      answer:
        "Our AI system analyzes successful outreach patterns and generates personalized templates based on your podcast's niche and target audience. It continuously learns and improves based on engagement rates.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
    },
    {
      question: "Is there a limit to how many emails I can send?",
      answer:
        "Email limits vary by plan. Free tier includes 100 emails/month, Premium offers 1,000/month, and Enterprise provides unlimited outreach capabilities.",
    },
  ];

  return (
    <section
      id="FAQ"
      className="py-20 bg-white dark:bg-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Everything you need to know about PodPulse
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item bg-gray-50 dark:bg-neutral-700 rounded-lg p-6 transition-transform duration-300 ${
                  openFaq === index ? "animate-fadeInUp" : ""
                }`}
              >
                <button
                  className="faq-button flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <svg
                    className={`faq-icon w-6 h-6 text-indigo-500 transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`faq-answer mt-4 ${
                    openFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

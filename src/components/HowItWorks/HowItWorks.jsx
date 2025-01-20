import SectionTitle from "../SectionTitle/SectionTitle";
import { FaRegLightbulb, FaHandHoldingHeart, FaGlobe } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create a Campaign",
      description: "Start your donation drive by creating a campaign.",
      icon: <FaRegLightbulb size={28} className="text-indigo-500" />,
    },
    {
      number: 2,
      title: "Receive Donations",
      description: "Let people contribute to your cause effortlessly.",
      icon: <FaHandHoldingHeart size={28} className="text-green-500" />,
    },
    {
      number: 3,
      title: "Make an Impact",
      description: "Deliver the donations and share the joy.",
      icon: <FaGlobe size={28} className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <div className="px-4 max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionTitle
          title="How It Works"
          subtitle="Discover how simple it is to start making a difference"
        />
        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-1 bg-indigo-300 dark:bg-indigo-500"></div>
              )}
              {/* Step Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-lg">
                {step.icon}
              </div>
              {/* Step Number */}
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400">
                Step {step.number}
              </div>
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


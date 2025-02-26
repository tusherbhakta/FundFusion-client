import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import techInnovationBanner from '../../assets/tech company-rafiki.svg';
import communityProjectBanner from "../../assets/Community-bro.svg";
import environmentalCauseBanner from "../../assets/metaverso-bro.svg";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  const banners = [
    {
      src: techInnovationBanner,
      alt: "Empower Next-Gen Tech Innovators",
      title: "Empower Next-Gen Tech Innovators",
      description:
        "Support groundbreaking tech projects and innovations. Your contribution can shape the future of technology and inspire the next big ideas.",
      linkPrimary: { path: "/add-campaign", text: "Launch Your Project" },
      linkSecondary: { path: "/campaigns", text: "Explore Projects" },
    },
    {
      src: communityProjectBanner,
      alt: "Strengthen Communities, Foster Change",
      title: "Strengthen Communities, Foster Change",
      description:
        "Back impactful community-driven initiatives. Together, we can create meaningful change and build stronger, thriving communities.",
      linkPrimary: { path: "/add-campaign", text: "Start a Campaign" },
      linkSecondary: { path: "/campaigns", text: "View Campaigns" },
    },
    {
      src: environmentalCauseBanner,
      alt: "Protect the Planet, Fund Sustainability",
      title: "Protect the Planet, Fund Sustainability",
      description:
        "Contribute to environmental conservation and green projects. Join the movement for a cleaner, healthier, and sustainable world.",
      linkPrimary: { path: "/add-campaign", text: "Initiate Change" },
      linkSecondary: { path: "/campaigns", text: "Support Causes" },
    },
  ];

  return (
    <div className="my-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch
        interval={3000}
        stopOnHover
        dynamicHeight={false}
        swipeScrollTolerance={5} // Allow vertical scroll tolerance
        preventMovementUntilSwipeScrollTolerance
        className="max-w-7xl mx-auto rounded-lg"
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              {/* Text Section */}
              <div className="px-4">
                <div className="text-left max-w-2xl">
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    {banner.title}
                  </h1>
                  <p className="mt-6 text-justify text-lg font-semibold text-gray-600 dark:text-gray-300">
                    {banner.description}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
                    <Link
                      to={banner.linkPrimary.path}
                      className="px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-md font-bold rounded-lg shadow-lg transition-all"
                    >
                      {banner.linkPrimary.text}
                    </Link>
                    <Link
                      to={banner.linkSecondary.path}
                      className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-bold rounded-lg shadow-lg transition-all"
                    >
                      {banner.linkSecondary.text}
                    </Link>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div>
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="object-cover w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;

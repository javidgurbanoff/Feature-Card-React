import React from "react";

const features = [
  {
    title: "Service Premises",
    description:
      "Our complex has office space and convenience stores on the ground floor. There’s lot of hate out there for a text.",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-1-1.svg",
  },
  {
    title: "Safety and Security",
    description:
      "Reliable round-the-clock surveillance by a security system using modern technologies. The villagers are out there with",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-2-1.svg",
  },
  {
    title: "Environmental Solutions",
    description:
      "We care about the environment, which is why we use LED lighting and have a charging station for electric vehicles.",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-3-1.svg",
  },
  {
    title: "Ease of Management",
    description:
      "You just buy an apartment, and a professional hotel operator will do the rest for you. That amounts to little more than garbled words",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-4-1.svg",
  },
  {
    title: "Guaranteed Income",
    description:
      "Guaranteed monthly incom is prescribed in advance in the contract. True enough, but that’s not all that it takes to get things.",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-5-1.svg",
  },
  {
    title: "Great Location",
    description:
      "A pledge of a secure rental of your apartment. A client that’s unhappy for a reason is a problem, a client that’s unhappy",
    icon: "https://woodmart.xtemos.com/wp-content/uploads/2021/05/w-investment-advantage-6-1.svg",
  },
];

const FeatureGrid = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-20 mx-auto p-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white w-[377px] h-[235px] rounded-md p-6 flex flex-col justify-between transition-all duration-300 hover:bg-[#106cd8] group"
          style={{ boxSizing: "border-box" }}
        >
          {/* Icon */}
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-12 h-12 mb-4 transition-all duration-300 group-hover:filter group-hover:invert"
          />
          {/* Title */}
          <h4 className="text-[22px] font-semibold mb-2 transition-all duration-300 group-hover:text-[#fff]">
            {feature.title}
          </h4>
          {/* Description with line-clamp */}
          <p className="text-[#767676] transition-all duration-300 group-hover:text-[#fff] line-clamp-3 h-[72px]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;

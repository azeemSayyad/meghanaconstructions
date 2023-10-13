import React from "react";
import HouseCard from "./HouseCard";

import img1 from "../Images/img3.jpeg";
import img2 from "../Images/img6.jpeg";

const Projects = () => {
  const sampleData = [
    {
      title: "3BHK Luxury villa",
      city: "Kothagudem",
      locality: "vidhyanagar",
      description:
        "Our 3BHK residences redefme complete with spacious cupboards and a lush garden, making each day an invitation to relish the perfect blend of style and comfort.",
      price: "40 lakhs",
      img: img1,
    },
    {
      title: "4BHK Luxury villa",
      city: "Palwancha",
      locality: "Palwancha",
      description:
        "Our 3BHK residences redefine modern living with their exquisite full tile and granite accents. These thoughtfully designed homes come complete with spacious cupboards and a lush garden, making each day an invitation to relish the perfect blend of style and comfort.",
      price: "70 lakhs",
      img: img2,
    },
  ];

  return (
    <div className="mx-4">
      <p className="text-black text-4xl ml-4 my-4 font-semibold">
        Ongoing Projects
      </p>
      <div className="grid md:grid-cols-2 gap-3 ">
        {sampleData.map((data)=>(
            <HouseCard data={data}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;

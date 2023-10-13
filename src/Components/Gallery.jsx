import img1 from "../Images/img7.jpeg";
import img2 from "../Images/img8.jpeg";
import img3 from "../Images/img9.jpeg";
import img4 from "../Images/img10.jpeg";
import HouseCard from "./HouseCard";

import img11 from "../Images/house_1_1.jpg"
import img12 from "../Images/house_1_2.jpeg"
import img13 from "../Images/house_1_3.jpg"
import img14 from "../Images/house_1_4.jpg"
import img15 from "../Images/house_1_5.jpg"

import img21 from "../Images/house_2_1.jpeg"
import img22 from "../Images/house_2_2.jpeg"
import img23 from "../Images/house_2_3.jpeg"
import img24 from "../Images/house_2_4.jpg"

const Gallery = () => {
  const sampleData = [
    {
      title: "3BHK Luxury villa",
      city: "Kothagudem",
      locality: "vidhyanagar",
      description:
        "Our 3BHK homes offer a harmonious combination of style and functionality, featuring luxurious full tiles and granite finishes. With spacious cupboards and a beautiful garden, every day in your new home is a step closer to a life of contentment and serenity.",
        price:"40 lakhs",
        img:img1,
        gallery:[img11,img12,img13,img14,img15]
    },
    {
      title: "2BHK Luxury villa",
      city: "Kothagudem",
      locality: "Sujathanagar",
      description:
        "Our 2BHK homes offer al garden, every day in your new home is a step closer to a life of contentment and serenity.",
        price:"30 lakhs",
        img:img2,
        gallery:[img21,img22,img23,img24]
    },
    {
      title: "3BHK Luxury villa",
      city: "Kothagudem",
      locality: "Vepalagadda",
      description:
        "Our 2BHK homes offer a harmonious combination of style and functionality, featuring luxurious full tiles and granite finishes. With spacious cupboards and a beautiful garden, every day in your new home is a step closer to a life of contentment and serenity.",
        price:"29 lakhs",
        img:img3,
        gallery:[img11,img12,img13,img14,img15]
    },
    {
      title: "3BHK Luxury villa",
      city: "Kothagudem",
      locality: "Palwancha",
      description:
        "Our 3BHK homes offer a harmonious combination of style and functionality, featuring luxurious full tiles and granite finishes. With spacious cupboards and a beautiful garden, every day in your new home is a step closer to a life of contentment and serenity.",
        price:"42 lakhs",
        img:img4,
        gallery:[img21,img22,img23,img24]
    },
  ];

  return (
    <div className="mx-4 mb-5">
      <p className="text-black text-4xl ml-4 my-4 font-semibold">Our Gallery</p>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sampleData.map((data)=>(
            <HouseCard data={data}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

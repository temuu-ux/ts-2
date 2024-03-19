import { SideDes } from "@/component/SideDes";
import { SideMenu } from "@/component/SideMenu";
import React, { useState } from "react";

let sideMenus = [
  {
    id: 1,
    title: "Travel",
    buttonText: "Travel",
    contents: [
      {
        name: "Benefit of Travel Insurance",
        dateOfYear: "Mar 11 2024",
        isVerified: false,
        tag: "Travel",
        description:
          "The Best Women's Clothing Made Available for You with our Accessories, T-Shirts, Dresses, Sweatshirts, Pants, Jewelry, Shoes, Bag, and many more about Women Fashion.",
      },
      {
        name: "Romantic Hideaways: Intimate Retreats for Couples in Southernmost India",
        dateOfYear: "Feb 29 2024",
        isVerified: false,
        tag: "Travel",
        description:
          "The Best Women's Clothing Made Available for You with our Accessories, T-Shirts, Dresses, Sweatshirts, Pants, Jewelry, Shoes, Bag, and many more about Women Fashion.",
      },
      {
        name: "Georgia Travel Tips for First-time Visitors",
        dateOfYear: "Jan 29 2024",
        isVerified: false,
        tag: "Travel",
        description:
          "The Best Women's Clothing Made Available for You with our Accessories, T-Shirts, Dresses, Sweatshirts, Pants, Jewelry, Shoes, Bag, and many more about Women Fashion.",
      },
    ],
  },
  {
    id: 2,
    title: "Fashion",
    buttonText: "Fashion",
    contents: [
      {
        name: "Get Ready to Shine: Unleash Your Professional Aura with Glasses",
        dateOfYear: "Feb 29 2024",
        isVerified: false,
        tag: "Fashion",
        description:
          "Wearing glasses can enhance your professional and business appearance. We need to consider the style of glasses, the material of the glasses, the comfort of the frame, lens requirements, and specific requirements for the work environment.",
      },
      {
        name: "One Piece Dress For Women",
        dateOfYear: "Feb 16 2024",
        isVerified: false,
        tag: "Fashion",
        description:
          "In the ever-evolving world of fashion, certain classics stand the test of time, and one such wardrobe staple that has maintained its allure is the one-piece dress for women. Combining style, comfort, and versatility, these dresses have been a fashion favorite for decades, transcending trends and seasons.",
      },
      {
        name: "Make Your Day Amazing With Good Fashion",
        dateOfYear: "Dec 23 '23 2023",
        isVerified: false,
        tag: "Fashion",
        description:
          "The Best Women's Clothing Made Available for You with our Accessories, T-Shirts, Dresses, Sweatshirts, Pants, Jewelry, Shoes, Bag, and many more about Women Fashion.",
      },
    ],
  },
  {
    id: 3,
    title: "Technology",
    buttonText: "Technology",
    contents: [
      {
        name: "AI in Healthcare",
        dateOfYear: "Feb 1 2024",
        isVerified: false,
        tag: "Technology",
        description:
          "Artificial Intelligence (AI) in healthcare is not just a futuristic vision but a present-day reality that's transforming the landscape of medical care, diagnostics, and patient engagement.",
      },
      {
        name: "The Importance of Data Science in Today’s World",
        dateOfYear: "Mar 12 2024",
        isVerified: false,
        tag: "Technology",
        description:
          "In an era where data is ubiquitously recognized as the new oil, the role of data science in deciphering complex datasets to yield actionable insights cannot be overstated.",
      },
      {
        name: "The Pioneer: Sherry Guidry Device Technologies",
        dateOfYear: "Mar 13 2024",
        isVerified: false,
        tag: "Technology",
        description:
          "Once, inside the busy global of generation, there lived a visionary called Sherry Guidry.",
      },
    ],
  },
  {
    id: 4,
    title: "Branding",
    buttonText: "Branding",
    contents: [
      {
        name: "The Guild - Rebranding in open source",
        dateOfYear: "Feb 24 2024",
        isVerified: false,
        tag: "Branding",
        description:
          "The Guild never had a marketing, design or branding function As we see our tools as best of breed in any category we work in, we want to get more exposure to it on our ecosystem.",
      },
      {
        name: "Best digital marketing agency in India",
        dateOfYear: "Feb 19 2024",
        isVerified: false,
        tag: "Branding",
        description:
          "In the digital age, a strong online presence is essential for success. Our digital marketing services are tailored to enhance your brand's visibility and drive meaningful engagement.",
      },
      {
        name: "Digital marketing and advertising agency",
        dateOfYear: "Feb 13 2024",
        isVerified: false,
        tag: "Branding",
        description:
          "Are you ready to take your brand to new heights? Look no further than Akko World Wide Communications Pvt Ltd, Hyderabad's premier digital marketing agency.",
      },
    ],
  },
  {
    id: 5,
    title: "Financial",
    buttonText: "Financial",
    contents: [
      {
        name: "Morgan Stanley names a head of artificial intelligence",
        dateOfYear: "Mar 14 2024",
        isVerified: false,
        tag: "Financial",
        description:
          "Morgan Stanley promoted a tech executive in its wealth management division to become the bank’s first head of firm-wide Artificial Intelligence, CNBC has learned.",
      },
      {
        name: "Wall Street isn’t happy Kevin Plank is back as Under Armour CEO, shares fall 12%",
        dateOfYear: "Mar 14 2024",
        isVerified: false,
        tag: "Financial",
        description:
          "Shares of Under Armour plunged about 12% after the retailer announced that CEO Stephanie Linnartz would be stepping down after barely a year on the job.",
      },
      {
        name: "SpaceX’s Starship notches flight test milestones, breaks up over Indian Ocean",
        dateOfYear: "Mar 14 2024",
        isVerified: false,
        tag: "Financial",
        description:
          "The company pushed development of the mammoth vehicle past new milestones, with NASA chief Bill Nelson congratulating SpaceX “on a successful test flight!”",
      },
    ],
  },
];

export default function Home() {
  const [sec, setSec] = useState<number>(1);

  return (
    <div className="flex h-screen">
      <div className="bg-gray-600 w-[300px]  text-white ">
        {sideMenus.map((menu) => {
          // console.log(menu);
          return <SideMenu data={menu} state={setSec} />;
        })}
      </div>
      <div className="flex w-screen justify-center py-10">
        {" "}
        <SideDes data={sideMenus[sec]} />
      </div>
    </div>
  );
}

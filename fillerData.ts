import { v4 } from "uuid";

export type EduOrEx = {
  from: string;
  to: string;
  institution: string;
  title: string;
  description: string;
  id: string;
};

export type PersonalDetails = {
  "full name": string;
  email: string;
  address: string;
  "phone number": string;
};

export type AllData = {
  personalDetails: PersonalDetails;
  educations: EduOrEx[];
  experiences: EduOrEx[];
};

export const fillerData: AllData = {
  personalDetails: {
    ["full name"]: "Lebron James",
    email: "BroniPoni@zzzz.com",
    address: "Miami ok",

    ["phone number"]: "052-232-1129",
  },
  educations: [
    {
      from: "2015",
      to: "2018",
      institution: "Adipiscing",
      title: "Computer Sciene",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      id: v4(),
    },
    {
      from: "2018",
      to: "2022",
      institution: "Commodo",
      title: "Horse Riding",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: v4(),
    },
  ],
  experiences: [
    {
      from: "2011",
      to: "2015",
      institution: "IndiFraud",
      title: "Tech Support",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      id: v4(),
    },
    {
      from: "2011",
      to: "2015",
      title: "Ragdoll Physics",
      institution: "Global Offensive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: v4(),
    },
    {
      from: "2016",
      to: "2024",
      title: "Some Title",
      institution: "Institution",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: v4(),
    },
  ],
};

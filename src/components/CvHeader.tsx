import phone from "../assets/phone.svg";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import { PersonalDetails } from "../../fillerData";

export default function CvHeader({ pd }: { pd: PersonalDetails }) {
  const [firstName, lastName] = pd["full name"].split(" ");
  return (
    <div
      className="grid min-h-[18vh] grid-cols-2  
     bg-gradient-to-r from-cyan-900 to-cyan-600  "
    >
      <div className="my-auto flex h-full w-4/5 flex-wrap content-center items-center gap-2 self-end    pl-7    text-3xl text-gray-100 md:text-4xl md:tracking-wider">
        <span>{firstName}</span>

        <span>{lastName}</span>
      </div>
      <div
        className=" grid h-[80%] w-[100%] auto-rows-min content-center  gap-3 space-y-2 self-end 
     justify-self-end  rounded-sm rounded-t-none bg-gray-100  p-3 md:w-[90%] overflow-auto overflow-y-hidden "
      >
        <div className=" flex items-center gap-2 ">
          <img
            className="h-5 rounded-full bg-cyan-800 bg-opacity-95 p-[2.4px]"
            src={phone}
            alt=""
          />
          <span>{pd["phone number"]}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            className="h-5 rounded-full bg-cyan-800 bg-opacity-95 p-[2.4px]"
            src={mail}
            alt=""
          />
          <span>{pd["email"]}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            className="h-5 rounded-full bg-cyan-800 bg-opacity-95 p-[2.4px]"
            src={home}
            alt=""
          />
          <span>{pd["address"]}</span>
        </div>
      </div>
    </div>
  );
}

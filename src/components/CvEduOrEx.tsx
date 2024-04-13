import workLogo from "../assets/work.svg";
import educationLogo from "../assets/education.svg";
import { EduOrEx } from "../../fillerData";

export default function CvEduOrEx({
  title,
  data,
}: {
  title: string;
  data: EduOrEx[];
}) {
  return (
    <article className=" p-3 pl-5 ">
      <div className="mb-4 flex items-center gap-3">
        <img
          className="rounded-full bg-cyan-800 p-1"
          src={title == "experience" ? workLogo : educationLogo}
          alt=""
        />
        <h3 className="text-2xl font-semibold capitalize">{title}</h3>
      </div>

      {/* showing each */}
      <div className="grid gap-4">
        {data.map((d) => {
          return (
            <article
              className="flex max-w-[45ch] items-center gap-4 md:max-w-[65ch] "
              key={d.id}
            >
              <div className="grid gap-1 self-start font-light">
                <span>{d.from}</span> <span>{d.to}</span>
              </div>

              <div className="grid gap-y-0.5">
                <h4 className="font-medium">
                  {d.title && d.title + " - " + d.institution}
                </h4>
                <p className="">{d.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
}

import CvEduOrEx from "./CvEduOrEx";
import CvHeader from "./CvHeader";
import { useAppContext } from "../AppContext";

export default function CvPreview() {
  const { allDetails } = useAppContext();
  return (
    <section className="cv-display">
      <h2 className="my-2 mt-3 text-xl font-semibold tracking-wide xl:hidden">
        Preview{" "}
        <span className="text-xs font-normal">
          (view on "SAVE & PRINT")
        </span>
      </h2>
      <article className="preview min-h-[100vh] w-full  border border-gray-700 ">
        <CvHeader pd={allDetails.personalDetails} />
        <div className="pt-3">
          <CvEduOrEx
            title={"experience"}
            data={allDetails.experiences}
          />
          <hr className="m-2" />

          <CvEduOrEx
            title={"education"}
            data={allDetails.educations}
          />
        </div>
      </article>
    </section>
  );
}

import { ReactNode, useState } from "react";
import downArrow from "../assets/chevron-down.svg";
import upArrow from "../assets/chevron-up.svg";
import plus from "../assets/plus-circle.svg";
import { EduOrExAction } from "../reducers/eduOrExReducer";

type FormContainerProps = {
  children: ReactNode;
  name: string;
  addable: boolean;
  dispatch: null | React.Dispatch<EduOrExAction>;
};

export default function FormContainer({
  children,
  name,
  dispatch,
}: FormContainerProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className=" w-full  justify-center  ">
      <h2 className="flex justify-between rounded-sm border border-slate-200 bg-slate-100  bg-gradient-to-r p-2 font-semibold  xl:p-3">
        <div className="flex items-center gap-1">
          <span
            className="cursor-pointer xl:text-lg"
            onClick={() => setExpanded(!expanded)}
          >
            {name}
          </span>

          {dispatch && (
            <img
              onClick={() => dispatch({ type: "added_form" })}
              src={plus}
              className="mt-0.5 h-4 cursor-pointer"
            />
          )}
        </div>
        <img
          src={expanded ? upArrow : downArrow}
          alt=""
          className="h-full cursor-pointer rounded-[50%]  bg-slate-300 text-white xl:p-0.5"
          onClick={() => setExpanded(!expanded)}
        />
      </h2>
      {expanded && (
        <div className="bg-slate-100 p-4 pt-2">{children}</div>
      )}
    </div>
  );
}

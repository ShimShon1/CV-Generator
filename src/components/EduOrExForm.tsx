import DescriptionArea from "./DescriptionArea";
import InfoInput from "./InfoInput";
import trash from "../assets/trash.svg";
import { EduOrExAction } from "../reducers/eduOrExReducer";
import { EduOrEx } from "../../fillerData";

type EduOrExFormProps = {
  title: string;
  dispatch: React.Dispatch<EduOrExAction>;
  index: number;
  data: EduOrEx;
};

export default function EduOrExForm({
  title,
  dispatch,
  index,
  data,
}: EduOrExFormProps) {
  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const target = e.target;
    dispatch({ type: "edited_field", formIndex: index, target });
  }
  return (
    <div className="mb-2 grid grid-cols-[5fr,1fr] border-b border-gray-300">
      <div>
        <h4 className="mb-2 py-1 font-medium ">
          {title + " " + (index + 1)}
        </h4>
        <InfoInput
          title={"from"}
          onInputChange={handleInputChange}
          value={data.from}
        />
        <InfoInput
          title={"to"}
          onInputChange={handleInputChange}
          value={data.to}
        />
        <InfoInput
          title={"title"}
          onInputChange={handleInputChange}
          value={data.title}
        />
        <InfoInput
          title={"institution"}
          onInputChange={handleInputChange}
          value={data.institution}
        />
        <DescriptionArea
          title={"description"}
          onInputChange={handleInputChange}
          value={data.description}
        />
      </div>
      <div
        className="grid h-min cursor-pointer items-center justify-center self-center justify-self-center rounded-md bg-slate-200
      p-2  opacity-60 hover:opacity-100"
      >
        <img
          className=""
          src={trash}
          onClick={() =>
            dispatch({ type: "removed_form", id: data.id })
          }
        />
      </div>
    </div>
  );
}

import { v4 } from "uuid";
import { EduOrEx } from "../../fillerData";

export type EduOrExAction = {
  type: "cleared" | "added_form" | "removed_form" | "edited_field";
  target?: HTMLInputElement | HTMLTextAreaElement;
  id?: string;
  formIndex?: number;
};

export function eduOrExReducer(
  state: EduOrEx[],
  action: EduOrExAction
): EduOrEx[] {
  switch (action.type) {
    case "cleared": {
      return [];
    }
    case "added_form": {
      const newForm = {
        title: "",
        institution: "",
        from: "",
        to: "",
        description: "",
        id: v4(),
      };
      return [...state, newForm];
    }
    case "removed_form": {
      if (action.id == undefined) {
        throw new Error("Bad Action.id provided");
      }
      return state.filter((item) => item.id != action.id);
    }
    case "edited_field": {
      const newState = [...state];
      if (
        action.formIndex == undefined ||
        action.target == undefined
      ) {
        throw new Error("Bad Action provided");
      }
      newState[action.formIndex] = {
        ...newState[action.formIndex],
        [action.target.name]: action.target.value,
      };
      return newState;
    }
  }
}

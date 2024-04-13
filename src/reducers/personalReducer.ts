import { PersonalDetails } from "../../fillerData";

export type PersonalAction = {
  type: "cleared" | "edited";
  target?: HTMLInputElement;
};
export function personalRedcuer(
  state: PersonalDetails,
  action: PersonalAction
) {
  switch (action.type) {
    case "cleared": {
      return {
        "full name": "",
        email: "",
        address: "",
        "phone number": "",
      };
    }
    case "edited": {
      if (action.target != undefined) {
        return {
          ...state,
          [action.target!.name]: action.target!.value,
        };
      }
      throw new Error(
        "No Target specified while editing personal details"
      );
    }
    default:
      return state;
  }
}

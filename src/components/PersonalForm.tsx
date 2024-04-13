import { ChangeEvent } from "react";
import InfoInput from "./InfoInput";
import { useAppContext } from "../AppContext";

export default function PersonalForm() {
  const { allDetails, personalDispatch } = useAppContext();
  const { personalDetails } = allDetails;

  function handlePersonalChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    personalDispatch({ type: "edited", target });
  }
  return (
    <>
      <InfoInput
        title={"full name"}
        onInputChange={handlePersonalChange}
        value={personalDetails["full name"]}
      />
      <InfoInput
        title={"email"}
        onInputChange={handlePersonalChange}
        value={personalDetails["email"]}
      />
      <InfoInput
        title={"phone number"}
        onInputChange={handlePersonalChange}
        value={personalDetails["phone number"]}
      />
      <InfoInput
        title={"address"}
        onInputChange={handlePersonalChange}
        value={personalDetails["address"]}
      />
    </>
  );
}

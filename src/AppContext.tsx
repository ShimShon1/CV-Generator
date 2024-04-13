import { createContext, useContext, useReducer } from "react";
import {
  PersonalAction,
  personalRedcuer,
} from "./reducers/personalReducer";
import { AllData, fillerData } from "../fillerData";
import {
  EduOrExAction,
  eduOrExReducer,
} from "./reducers/eduOrExReducer";

type AppContextType = {
  allDetails: AllData;
  personalDispatch: React.Dispatch<PersonalAction>;
  educationsDispatch: React.Dispatch<EduOrExAction>;
  experiencesDispatch: React.Dispatch<EduOrExAction>;
};

export const AppContext = createContext<AppContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error("Context has bad value");
  }
  return context;
}
//actual context component
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [personalDetails, personalDispatch] = useReducer(
    personalRedcuer,
    fillerData.personalDetails
  );
  const [educations, educationsDispatch] = useReducer(
    eduOrExReducer,
    fillerData.educations
  );
  const [experiences, experiencesDispatch] = useReducer(
    eduOrExReducer,
    fillerData.experiences
  );

  const allDetails = { personalDetails, educations, experiences };
  return (
    <AppContext.Provider
      value={{
        allDetails,
        personalDispatch,
        educationsDispatch,
        experiencesDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

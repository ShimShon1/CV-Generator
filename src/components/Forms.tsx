/* eslint-disable @typescript-eslint/no-unused-vars */
import EduOrExForm from "./EduOrExForm";
import FormContainer from "./FormContainer";
import PersonalForm from "./PersonalForm";
import { useAppContext } from "../AppContext";

export default function Forms() {
  const { allDetails, educationsDispatch, experiencesDispatch } =
    useAppContext();
  const { educations, experiences } = allDetails;

  return (
    <section className="forms xl:my-1">
      <h2 className="my-2 text-xl font-semibold tracking-wide xl:hidden">
        Your Details
      </h2>
      <FormContainer
        addable={false}
        name={"Personal Details"}
        dispatch={null}
      >
        <PersonalForm />
      </FormContainer>

      <FormContainer
        addable={true}
        name={"Experience"}
        dispatch={experiencesDispatch}
      >
        {experiences.map((ex, index: number) => {
          return (
            <EduOrExForm
              index={index}
              key={ex.id}
              data={ex}
              title={"Experience"}
              dispatch={experiencesDispatch}
            />
          );
        })}
      </FormContainer>

      <FormContainer
        addable={true}
        name={"Education"}
        dispatch={educationsDispatch}
      >
        {educations.map((edu, index: number) => {
          return (
            <EduOrExForm
              index={index}
              key={edu.id}
              data={edu}
              title={"Educations"}
              dispatch={educationsDispatch}
            />
          );
        })}
      </FormContainer>
    </section>
  );
}

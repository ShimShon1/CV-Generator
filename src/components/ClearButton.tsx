import { useAppContext } from "../AppContext";

export default function ClearButton() {
  const {
    personalDispatch,
    educationsDispatch,
    experiencesDispatch,
  } = useAppContext();

  function clearData() {
    personalDispatch({ type: "cleared" });

    experiencesDispatch({ type: "cleared" });

    educationsDispatch({ type: "cleared" });
  }

  return (
    <button
      onClick={clearData}
      className="  rounded-xl bg-gray-100 px-4 py-2 uppercase tracking-tighter text-cyan-800 border border-cyan-800 hover:bg-gray-200 active:bg-gray-500"
    >
      Clear Data
    </button>
  );
}

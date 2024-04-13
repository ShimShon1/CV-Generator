import Forms from "./components/Forms";
import CvPreview from "./components/CvPreview";
import AppContextProvider from "./AppContext";
import ClearButton from "./components/ClearButton";

export default function App() {
  return (
    <AppContextProvider>
      <main className="m-auto max-w-[850px] grid-cols-2 gap-10 p-3 xl:grid xl:max-w-[1700px]">
        <div className="forms grid content-start gap-5">
          <Forms />
          <div className="flex justify-center gap-2 md:text-xl">
            <button
              onClick={() => print()}
              className="  rounded-xl bg-cyan-800 px-4 py-2 uppercase tracking-tighter text-gray-100 hover:bg-cyan-700 active:bg-cyan-600"
            >
              Save & Print
            </button>
            <ClearButton />
          </div>
        </div>
        <CvPreview />
      </main>
    </AppContextProvider>
  );
}

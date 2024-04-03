import Tooltip from "./components/Tooltip";

const App = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Tooltip content="This is tooltip">
        <button type="button" className="border py-[10px] px-3 text-[12px] font-Libre-Franklin rounded-[4px] bg-gray-50 text-gray-600">
          Hover me
        </button>
      </Tooltip>
    </main>
  );
};

export default App;

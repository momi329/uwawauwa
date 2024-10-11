import { AgeGroupPriceList } from "./components/AgeGroupPrice";

function App() {
  return (
    <div className="flex flex-col gap-2 p-2  w-[560px]">
      <AgeGroupPriceList
        onChange={(result) => {
          console.log("result", result);
        }}
      />
    </div>
  );
}

export default App;

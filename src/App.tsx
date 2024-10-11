import { AgeGroupPriceList } from "./components/AgeGroupPriceList";

function App() {
  return (
    <div className="flex flex-col gap-2 p-2 mx-auto w-[560px]">
      <AgeGroupPriceList
        onChange={(result) => {
          console.log(result);
        }}
      />
    </div>
  );
}

export default App;

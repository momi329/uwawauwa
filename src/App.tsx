import { AgeGroupPriceList } from "./components/AgeGroupPriceList";

function App() {
  return (
    <div className="flex flex-col gap-2 p-2  ">
      <AgeGroupPriceList
        onChange={(result) => {
          console.log(result);
        }}
      />
    </div>
  );
}

export default App;

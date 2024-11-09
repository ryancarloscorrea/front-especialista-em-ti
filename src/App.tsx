import { useState } from "react";
import { ImFire } from "react-icons/im";
import { Caption } from "./components/Caption";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { Category } from "./enums";


function App() {

  const [category, setCategory] = useState<Category>(Category.BLACK)

  return (
    <div className="h-screen bg-gray-200">
      <Header />
      <SubHeader />
      <main className="mt-6 w-[1440px] min-w-[100%-32px] m-auto">
        <div className="flex items-center justify-center flex-col">
          <p className="text-4xl">Qual notebook comprar?</p>
          <div className="flex items-center mt-2 gap-x-2">
            <ImFire size={48} className="text-red-600" />
            <p className="text-4xl">Black Friday</p>
          </div>
        </div>

        <Caption category={category} setCategory={setCategory}/>
        </main>
      <footer></footer>
    </div>
  );
}

export default App;

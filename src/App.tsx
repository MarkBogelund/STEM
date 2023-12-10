import Banner from "./components/Banner";
import Menus from "./components/Menus";
import Pages from "./components/Pages";
import { SectionContextProvider } from "./components/SectionContext";

function App() {
  return (
    <SectionContextProvider>
      <div className="w-full bg-light">
        <Banner />
        <Menus />
        <Pages />
      </div>
    </SectionContextProvider>
  );
}

export default App;

import axios from "axios";
import React, { createContext, useState } from "react";
import Master from "./components/master/Master";
import ShortToUrl from "./components/ShortToUrl/ShortToUrl";
import UrlToShort from "./components/UrlToShort/UrlToShort";

interface StateData {
  state?: number;
  setState?: React.Dispatch<React.SetStateAction<number>>;
}

// active tab context
export const activeTabIndexContext = createContext<StateData>({});

// axios base url
axios.defaults.baseURL = "http://localhost:5000/api";

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  return (
    <div className="App ">
      <activeTabIndexContext.Provider
        value={{ state: activeTabIndex, setState: setActiveTabIndex }}
      >
        <Master>
          {activeTabIndex === 0 ? <UrlToShort /> : <ShortToUrl />}
        </Master>
      </activeTabIndexContext.Provider>
    </div>
  );
}

export default App;

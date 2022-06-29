import { useState, createContext, useContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  // ********STYLES********
  const styles = {
    serviceContainer:
      "bg-white p-4 rounded-sm shadow flex flex-col justify-between",
    iconStyle:
      "bg-orange-100 rounded text-orange-600 text-3xl h-30 w-fit flex p-2 px-4 flex-col my-3",
    h4Style: "text-gray-700 text-2xl font-bold my-2",
    contentStyle: "text-sm text-gray-700 my-3",
    btnStyle:
      "bg-orange-600 rounded text-white text-sm w-fit p-2 px-4 my-3 hover:bg-orange-700 transition hover:text-gray-200",
    line: "w-1/3 my-2  mx-auto border-2 border-orange-600 rounded-lg",
    h2Style: "text-center font-bold text-3xl md:text-4xl",
  };
  const {
    serviceContainer,
    iconStyle,
    h4Style,
    contentStyle,
    btnStyle,
    line,
    h2Style,
  } = styles;

  // **********************btnStyle
  return (
    <AppContext.Provider
      value={{
        serviceContainer,
        iconStyle,
        h4Style,
        contentStyle,
        btnStyle,
        line,
        h2Style,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

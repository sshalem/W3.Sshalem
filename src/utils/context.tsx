import { createContext, useContext, useState } from "react";

export interface AppContextData {
  openList: boolean;
  handleOpenList(): void;
}

const AppContext = createContext<AppContextData>({
  openList: false,
  handleOpenList: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openList, setOpenList] = useState<boolean>(false);

  const handleOpenList = () => {
    setOpenList(!openList);
  };

  return <AppContext.Provider value={{ openList, handleOpenList }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;

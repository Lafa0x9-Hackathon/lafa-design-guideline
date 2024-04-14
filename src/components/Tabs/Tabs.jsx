import { useState, createContext } from "react";
import { cn } from "../../utils/cn";

export const TabsContext = createContext({
  active: "",
  setActive: (val) => {},
});

const Tabs = ({ defaultValue, children, className }) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;

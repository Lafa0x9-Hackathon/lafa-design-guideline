import { useContext } from "react";
import { TabsContext } from "./Tabs";

export const useTabs = () => {
  const ctx = useContext(TabsContext)
  if (ctx === undefined)
    throw new Error("Component was used outside of Tabs");
  return ctx;
}
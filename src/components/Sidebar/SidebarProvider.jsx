import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useTheme } from "styled-components";

const SidebarContext = createContext(null);

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
};

export const SidebarProvider = ({ defaultOpen = true, children }) => {
  const [opened, setOpened] = useState(defaultOpen);
  const theme = useTheme();

  const toggleSidebar = useCallback(() => {
    setOpened((v) => !v);
  }, []);

  const value = useMemo(
    () => ({
      opened,
      setOpened,
      toggleSidebar,
      state: opened ? "expanded" : "collapsed",
    }),
    [opened, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>
      <div
        style={{
          padding: 10,
          width: "100%",
          height: "100svh",
          boxSizing: "border-box",
          display: "flex",
          gap: 10,
          background: theme.background,
        }}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

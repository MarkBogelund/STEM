import React, { createContext, useState, useContext, ReactNode } from "react";

interface SectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  activeSectionColor: string;
  setActiveSectionColor: (color: string) => void;
}

const SectionContext = createContext<SectionContextType>({
  activeSection: "",
  setActiveSection: () => {},
  activeSectionColor: "",
  setActiveSectionColor: () => {},
});

interface SectionContextProviderProps {
  children: ReactNode;
}

export const SectionContextProvider: React.FC<SectionContextProviderProps> = ({
  children,
}) => {
  const [section, setSection] = useState("STEM");
  const [sectionColor, setSectionColor] = useState("bg-custom_blue");

  return (
    <SectionContext.Provider
      value={{
        activeSection: section,
        setActiveSection: setSection,
        activeSectionColor: sectionColor,
        setActiveSectionColor: setSectionColor,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => useContext(SectionContext);

export default SectionContext;

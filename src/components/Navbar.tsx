import { useEffect } from "react";
import { useSectionContext } from "./SectionContext";

const Navbar = () => {
  const { activeSectionColor, setActiveSection, setActiveSectionColor } =
    useSectionContext();

  const sections = [
    { id: "science", name: "Science", color: "bg-custom_blue" },
    { id: "technology", name: "Technology", color: "bg-custom_green" },
    { id: "engineering", name: "Engineering", color: "bg-custom_red" },
    { id: "mathematics", name: "Mathematics", color: "bg-custom_yellow" },
  ];

  const offset = 300;

  const getSectionById = (id: string) =>
    document.querySelector(`#${id}`) as HTMLElement;

  const convertSectionHeightToPixels = (section: HTMLElement) => {
    const { top, bottom } = section.getBoundingClientRect();
    return bottom - top;
  };

  const scrollIsWithinSection = (section: HTMLElement) =>
    window.scrollY >= section.offsetTop - offset &&
    window.scrollY <
      section.offsetTop + convertSectionHeightToPixels(section) - offset;

  const handleScroll = () => {
    const activeSection =
      sections.find((section) =>
        scrollIsWithinSection(getSectionById(section.id))
      ) || sections[0];
    setActiveSection(activeSection.name);
    setActiveSectionColor(activeSection.color);
  };

  const addTransitionClass = () => {
    const navbarElement = document.querySelector("#navbar") as HTMLElement;
    if (navbarElement) {
      navbarElement.classList.add("transition-bg-color");
      setTimeout(() => {
        navbarElement.classList.remove("transition-bg-color");
      }, 300);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    addTransitionClass();
  }, [activeSectionColor]);

  return (
    <div className="w-full h-[6vh] flex items-end">
      <div
        id="navbar"
        className={`w-full h-[100%] flex justify-center items-center gap-16 shadow-lg transition-all duration-250 ${activeSectionColor}`}
      >
        {sections.map(({ id, name }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-lg text-light h-full px-2 transition-all hover:bg-[#0000002b] flex items-center font-didact-gothic"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

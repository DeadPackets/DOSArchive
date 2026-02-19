export interface ProgramControl {
  key: string;
  action: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  year: number;
  language: string;
  category: string;
  tags: string[];
  folder: string;
  executable: string;
  needsArabart: boolean;
  controls: ProgramControl[];
  image: string;
  launchNotes?: string;
}

export const programs: Program[] = [
  {
    id: "arabart-demo",
    title: "ARABART - Demo",
    subtitle: "Arabic Graphics Library Showcase",
    description:
      "First written in 1991 and updated till 1993, Yasser wrote the ARABART library which added Arabic support in the DOS graphic mode which allowed him to create programs that display Arabic in different fonts, colors and styles. The library supports auto-shaping (choosing which letter form to use, ie. connected from the beginning, both sides, or end). This program serves as a demo to showcase all the capabilities of the ARABART library.",
    story:
      "The ARABART library was Yasser's foundational work \u2014 a TSR (Terminate and Stay Resident) program that extended DOS with Arabic text rendering in graphics mode. At a time when Arabic computing support was virtually nonexistent, this library enabled proper bidirectional text, auto-shaping of connected Arabic letterforms, and multiple font styles. Nearly every Arabic-capable program Yasser built depended on this library.",
    year: 1991,
    language: "Assembly",
    category: "library",
    tags: ["arabic", "graphics", "library", "tsr", "fonts"],
    folder: "ARABART",
    executable: "DEMO.EXE",
    needsArabart: true,
    controls: [],
    image: "arabart-demo.png",
  },
  {
    id: "arabart-editor",
    title: "ARABART - Editor",
    subtitle: "Interactive Arabic Text Editor",
    description:
      "Written alongside the ARABART library, this demo allows users to interactively try out the features of the ARABART library.",
    story:
      "This interactive editor puts the ARABART library's capabilities in the user's hands, allowing real-time experimentation with Arabic fonts, styles, colors, and text formatting \u2014 all running in DOS graphics mode.",
    year: 1991,
    language: "Assembly",
    category: "tool",
    tags: ["arabic", "editor", "interactive", "fonts"],
    folder: "ARABART",
    executable: "EDITOR.EXE",
    needsArabart: true,
    controls: [
      { key: "SHIFT + 1-4", action: "Toggles italics/bold/underline/size" },
      { key: "SHIFT + Q,W,E,R", action: "Selects between 4 different fonts" },
      { key: "SHIFT + C", action: "Changes the color of the text" },
    ],
    image: "arabart-editor.png",
  },
  {
    id: "arabart-commercial",
    title: "ARABART - Commercial",
    subtitle: "Animated Arabic Store Advertisement",
    description:
      "Also alongside the ARABART library, this is the first practical use of the library for a commercial demo. The commercial displays the name of an egyptian computer hardware store along with other animated multi-colored slides.",
    story:
      "This was the ARABART library's first real-world commercial application \u2014 an animated advertisement for an Egyptian computer hardware store. It demonstrated that the library could power practical business software, not just technical demos.",
    year: 1991,
    language: "Assembly",
    category: "demo",
    tags: ["arabic", "commercial", "animation", "advertising"],
    folder: "ARABIC",
    executable: "DEMO.COM",
    needsArabart: true,
    controls: [],
    image: "arabic-commercial.png",
  },
  {
    id: "digi-test",
    title: "Digi-Test",
    subtitle: "Digital Circuit Simulator",
    description:
      'This software is a part of Yasser\'s graduation project which involved the simulation and testing of digital circuits. This software is the GUI of the graduation project, running on DOS. Additionally, this graduation project included a custom made board and interface with the computer in order to analyze, simulate and reveal faulty ICs. Despite still being able to construct and simulate circuits, due to lack of hardware we cannot view the Truth Table generated or analyze the circuit for faults. To see the circuit used in the graduation defense, load the file "KEMYAM".',
    story:
      "Digi-Test was the centerpiece of Yasser's graduation project \u2014 a full digital circuit simulator with a graphical interface. The complete project included custom hardware that interfaced with a PC to analyze real circuits and detect faulty integrated circuits. While the hardware is lost to time, the software remains fully functional for circuit design and simulation. Loading the file 'KEMYAM' shows the actual circuit used in the graduation defense.",
    year: 1993,
    language: "C++, Assembly",
    category: "tool",
    tags: ["circuits", "simulation", "graduation", "engineering", "gui"],
    folder: "DIGI_T",
    executable: "MAIN.EXE",
    needsArabart: true,
    controls: [
      { key: "F10", action: "Access the top menus" },
      {
        key: "INS",
        action: "Begin drawing a wire/connector between 2 points",
      },
      {
        key: "DEL",
        action: "Delete the component currently under the cursor",
      },
    ],
    image: "digi-test.png",
  },
  {
    id: "text-editor-gui",
    title: "Text Editor - Sample GUI",
    subtitle: "Interview Assignment Editor",
    description:
      "This text editor was Yasser's interview assignment to join his first company for his first official professional job. The assignment was to write a text editor that was capable of saving/loading, scrolling, having a toggle-able insertion mode, and supporting cursor movement.",
    story:
      "When applying for his first professional programming job, Yasser was given an interview assignment: build a text editor from scratch with saving, loading, scrolling, insertion mode, and cursor movement. This is the result \u2014 a complete text editor built in C with a custom GUI.",
    year: 1993,
    language: "C",
    category: "tool",
    tags: ["editor", "text", "gui", "interview", "professional"],
    folder: "EDIT",
    executable: "EDIT.EXE",
    needsArabart: true,
    controls: [
      { key: "F10", action: "Access the top menus" },
      { key: "INS", action: "Toggle text insertion mode" },
    ],
    image: "text-editor-gui.png",
  },
  {
    id: "text-editor-demo",
    title: "Text Editor - Demo",
    subtitle: "Windows-Inspired Text Editor",
    description:
      "This is an alternate windows-inspired version of the same interview assignment that was given to Yasser. It still has all the features as the other text editor, just a different interface.",
    story:
      "Not content with just one implementation, Yasser built a second version of the interview assignment text editor with a Windows-inspired interface, showing his versatility in UI design within the constraints of DOS.",
    year: 1993,
    language: "C",
    category: "tool",
    tags: ["editor", "text", "windows", "gui", "interview"],
    folder: "EDIT",
    executable: "EDITOR.EXE",
    needsArabart: true,
    controls: [
      { key: "F10", action: "Access the top menus" },
      { key: "INS", action: "Toggle text insertion mode" },
    ],
    image: "text-editor-demo.png",
  },
  {
    id: "formula-solver",
    title: "Formula Solver",
    subtitle: "BCD Floating Point Calculator",
    description:
      "This formula solver is the result of a paid challenge to write software that could emulate floating point mathematics in Assembly without using the math co-processor capabilities. This was achieved using by using BCD (Binary Coded Decimal) to represent floating point numbers. You can use this software to calculate the results from almost any simple algebric equation.",
    story:
      "Someone challenged Yasser \u2014 and offered to pay him \u2014 to implement floating point math in pure Assembly without the math co-processor. Using Binary Coded Decimal representation, he built a complete formula solver that could handle algebraic equations with decimal precision, all through software emulation.",
    year: 1992,
    language: "Assembly",
    category: "tool",
    tags: ["math", "calculator", "bcd", "assembly", "floating-point"],
    folder: "FORM_X",
    executable: "FORM_X.EXE",
    needsArabart: true,
    controls: [],
    image: "formula-solver.png",
  },
  {
    id: "kvc-antivirus",
    title: "KVC - Kemyam Virus Capture",
    subtitle: "Antivirus for the Koko Virus",
    description:
      "This software was written as an antivirus for a locally created virus in Egypt called Koko that would wipe infected computers' hard drives. Koko was at the time undetected by any available antiviruses, so Yasser and his colleague Ibrahim wrote this antivirus as a framework with hopes to expand it to include other viruses in the future.",
    story:
      "When the 'Koko' virus began wiping hard drives across Egyptian computers and no existing antivirus could detect it, Yasser and his colleague Ibrahim took matters into their own hands. They built KVC (Kemyam Virus Capture) as both a solution and a framework, designed to be extensible for future virus signatures.",
    year: 1993,
    language: "C, Assembly",
    category: "utility",
    tags: ["antivirus", "security", "virus", "koko", "framework"],
    folder: "KVC",
    executable: "KVC.EXE",
    needsArabart: true,
    controls: [],
    image: "kvc-antivirus.png",
    launchNotes: "Run KVC.EXE C: in the terminal to scan the C drive for the Koko virus.",
  },
  {
    id: "kemyam-splash",
    title: "Kemyam - Group Names",
    subtitle: "Graduation Project Splash Screen",
    description:
      "This splash screen was written alongside Yasser's graduation project as a way to introduce the group members in an impressive and eye-catching way.",
    story:
      "For the Digi-Test graduation project presentation, Yasser created this splash screen to introduce his team members \u2014 the 'Kemyam' group \u2014 with animated flair that made a strong first impression during the defense.",
    year: 1993,
    language: "C, Assembly",
    category: "splash",
    tags: ["splash", "graduation", "animation", "team"],
    folder: "NAMES",
    executable: "NAMES.COM",
    needsArabart: true,
    controls: [],
    image: "kemyam-splash.png",
  },
  {
    id: "arabic-basmallah",
    title: "Arabic Basmallah",
    subtitle: "Islamic Phrase Demo",
    description:
      "Written to demonstrate the capabilities of the ARABART library, this software prints out the Islamic phrase in various styles and colors.",
    story:
      "A demonstration of the ARABART library's rendering capabilities through the display of the Basmallah \u2014 a sacred Islamic phrase \u2014 in multiple Arabic calligraphic styles and colors.",
    year: 1991,
    language: "Assembly",
    category: "demo",
    tags: ["arabic", "islamic", "calligraphy", "arabart", "demo"],
    folder: "PESM",
    executable: "PESM.EXE",
    needsArabart: true,
    controls: [],
    image: "arabic-basmallah.png",
  },
  {
    id: "portsaid-cs-splash",
    title: "Port Said Computer Systems",
    subtitle: "PCS Boot Screen",
    description:
      "This software was used as a boot screen for all computers sold by PCS (Portsaid Computer Systems). Yasser gifted this software to the company and in return he got his very first computer mouse, which at the time, was something very new and rare.",
    story:
      "Yasser gifted this boot screen to Port Said Computer Systems, and every PC they sold would display it on startup. In return, PCS gave Yasser his very first computer mouse \u2014 a device so new and rare in early-90s Egypt that it was a prized possession.",
    year: 1993,
    language: "C, Assembly",
    category: "splash",
    tags: ["splash", "boot", "commercial", "portsaid"],
    folder: "PORTSAID",
    executable: "PORTSAID.EXE",
    needsArabart: true,
    controls: [],
    image: "portsaid-splash.png",
  },
  {
    id: "portsaid-it-screensaver",
    title: "Port Said IT Department",
    subtitle: "Government Screensaver",
    description:
      "Written as a gift during Yasser's internship at Portsaid's Governorate IT Department, this software was used as a screensaver for all the computers at this department.",
    story:
      "During his internship at the Port Said Governorate's IT Department, Yasser created this screensaver as a gift. It was installed on every computer in the department \u2014 a memorable contribution from an intern who would go on to build much more.",
    year: 1991,
    language: "Assembly",
    category: "splash",
    tags: ["screensaver", "government", "internship", "portsaid"],
    folder: "SCREEN",
    executable: "SCREEN.COM",
    needsArabart: true,
    controls: [],
    image: "portsaid-screensaver.png",
  },
  {
    id: "brave-sun",
    title: "The Brave Sun",
    subtitle: "Award-Winning Educational Software",
    description:
      "This software was Yasser's contribution to PC Middle East programming competition for writing Arabic educational software. The software demonstrates many things about the sun, including impressive animations. This application won 3rd place in the competition, earning Yasser a cash prize and enterprise software packages.",
    story:
      "Yasser entered the PC Middle East programming competition for Arabic educational software and created 'The Brave Sun' \u2014 an animated, interactive program teaching children about the sun. With impressive graphics and animations powered by its own Arabic font rendering (ARAB-ART.EXE), it won 3rd place, earning a cash prize and enterprise software packages.",
    year: 1993,
    language: "C, Assembly",
    category: "educational",
    tags: ["educational", "award", "competition", "animation", "sun", "children"],
    folder: "SUN",
    executable: "SUN.EXE",
    needsArabart: true,
    controls: [],
    image: "brave-sun.png",
    launchNotes:
      "This program includes its own Arabic font rendering (ARAB-ART.EXE) separate from the shared ARABART library.",
  },
  {
    id: "taher",
    title: "TAHER",
    subtitle: "Calligraphic Arabic Splash Screen",
    description:
      "As part of a paid job to design software to print lab results for a lab physician, Yasser wrote this software as an extra gift to be displayed as the splash screen for the software, displaying the physician's name in fancy calligraphic Arabic.",
    story:
      "Hired to write lab result printing software for a physician named Taher, Yasser went beyond the job requirements and created this bonus splash screen. It displays the doctor's name in elaborate calligraphic Arabic \u2014 a personal touch that turned a business transaction into a gift.",
    year: 1991,
    language: "Assembly",
    category: "splash",
    tags: ["calligraphy", "arabic", "splash", "medical", "gift"],
    folder: "TAHER",
    executable: "TAHER.COM",
    needsArabart: true,
    controls: [],
    image: "taher.png",
  },
  {
    id: "winkey",
    title: "WINKEY",
    subtitle: "Windowing Library Demo",
    description:
      "Written as part of what was meant to become a windowing library, this software is a demo of some of the features of the library, such as 3D pop-out buttons with different animations when pressed.",
    story:
      "WINKEY was the beginning of an ambitious windowing library for DOS, inspired by the emerging Windows GUI. This demo showcases 3D buttons with press animations \u2014 a glimpse of what could have been a full windowing toolkit had the project continued.",
    year: 1992,
    language: "Assembly",
    category: "library",
    tags: ["gui", "windows", "buttons", "library", "3d"],
    folder: "WINKEY",
    executable: "WINKEY.EXE",
    needsArabart: true,
    controls: [],
    image: "winkey.png",
  },
];

export function getYears(): number[] {
  return [...new Set(programs.map((p) => p.year))].sort();
}

export function getLanguages(): string[] {
  return [...new Set(programs.map((p) => p.language))].sort();
}

export function getCategories(): string[] {
  return [...new Set(programs.map((p) => p.category))].sort();
}

export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}

export function getProgramsByYear(year: number): Program[] {
  return programs.filter((p) => p.year === year);
}

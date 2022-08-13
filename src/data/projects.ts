import antipua from "../assets/img/antipua.jpg";
import plume from "../assets/img/plume.jpg";

export const projects: IProject[] = [
  {
    name: "Anti-PUA",
    tools: ["OCR", "BERT", "AWS", "Flask", "React"],
    image: antipua,
    description:
      "Web app that identifies potential moral coercion through chat history.",
    link: "https://devpost.com/software/team-60",
    award: "Winner at Unihack 2021",
  },
  {
    name: "Plume",
    tools: ["Figma", "Ae", "Logic", "LibGDX"],
    image: plume,
    description:
      "Desktop puzzle/platform/shooting game to reunite NPCs.",
    link: "https://gdiac.cs.cornell.edu/temp/showcase/gallery/plume/",
    award: "Winner at GDIAC showcase 2022",
  },
  // {
  //   name: "Lynz",
  //   tools: ["Unity"],
  //   image: "https://i.ibb.co/m96m8nc/lynz-Cropped.png",
  //   description:
  //     "Web app that calculates how busy nearby grocery stores are based on crowd-sourced data.",
  //   link: "https://devpost.com/software/lynz",
  //   award: "In progress",
  // },
];

export interface IProject {
  name: string;
  tools: string[];
  image: string;
  description: string;
  link: string;
  award?: string;
}

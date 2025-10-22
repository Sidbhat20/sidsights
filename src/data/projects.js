import { getImagePath } from "../utils/getImagePath";

const projects = [
  {
    id: 1,
    title: "JOKER",
    description: "Short film on self-discovery",
    image: getImagePath("/work/joker.JPG"),
  },
  {
    id: 2,
    title: "Micheal Jackson",
    description: "Visual ode to silence",
    image: getImagePath("/work/mj.JPG"),
  },
  {
    id: 3,
    title: "Chroma/City",
    description: "Urban color in motion",
    image: getImagePath("/work/geo.JPG"),
  },
  {
    id: 4,
    title: "Echoes of Silence",
    description: "Grief told through memory",
    image: getImagePath("/work/echos .jpg"),
  },
];

export default projects;

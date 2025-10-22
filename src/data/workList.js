import { getImagePath } from "../utils/getImagePath";

const workList = [
  {
    id: 1,
    title: "JOKER",
    category: "Why So Serious?",
    image: getImagePath("/work/joker.JPG"),
  },
  {
    id: 2,
    title: "Micheal Jackson",
    category: "Experimental",
    image: getImagePath("/work/mj.JPG"),
  },
  {
    id: 3,
    title: "Chroma/City",
    category: "Branded Content",
    image: getImagePath("/work/geo.JPG"),
  },
  {
    id: 4,
    title: "Echoes of Silence",
    category: "Narrative Drama",
    image: getImagePath("/work/echos .jpg"),
  },
];

export default workList;

import {
  faCreditCard,
  faImage,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const cardData = [
  {
    id: 1,
    img: <FontAwesomeIcon icon={faMap} />,
    title: "Books Library",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    color: " #e74040",
    bgColor: " #ffdcd1",
  },
  {
    id: 2,
    img: <FontAwesomeIcon icon={faImage} />,
    title: "Market Analysis",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    color: " #2dc071",
    bgColor: " #b9eaa8",
  },
  {
    id: 3,
    img: <FontAwesomeIcon icon={faCreditCard} />,
    title: "50+ Online Courses",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    color: " #23a6f0",
    bgColor: " #b2e3ff",
  },
];

export const coursesData = [
  {
    id: 1,
    img: "./React.png",
    department: "Web Development",
    title: "React Js",
    rating: "4.7",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: "./TypeScript.png",
    department: "Web Development",
    title: "TypeScript",
    rating: "4,6",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 Lessons",
  },
  {
    id: 3,
    img: "./JavaScript.png",
    department: "Web Development",
    title: "JavaScripts",
    rating: "4.9",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "16hr 30min",
    lessons: "107 Lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: 5,
    img: "./Person1.jpeg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    name: "Saeed Mohammed",
    jop: "Web Developer",
  },
  {
    id: 2,
    stars: 4,
    img: "./Person2.jpeg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    name: "Mohammed Saleh",
    jop: "Software Engineer",
  },
  {
    id: 3,
    stars: 5,
    img: "./Person3.jpeg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus.",
    name: "Omer Ali",
    jop: "Mobile Devloper",
  },
];

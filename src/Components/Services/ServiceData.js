import { GiSewingNeedle } from "react-icons/gi";
import { BsVectorPen } from "react-icons/bs";
import patch from '../../images/Service_icon/patch.png'
import apperal from '../../images/Service_icon/apperal.png'
import promotional from '../../images/Service_icon/promotional-removebg.png'
import { GiWinterHat } from "react-icons/gi";

const ServiceData = [
  {
    id: 1,
    title: "DIGITIZING",
    description: "Build responsive and user-friendly websites.",
    icon: <GiSewingNeedle/>,
    url: "/services/digitizing",
  },
  {
    id: 2,
    title: "PATCH",
    description: "Create mobile apps for iOS and Android.",
    icon: < img src={patch} alt="patch"/>,
    url: "/services/patches",
  },
  {
    id: 3,
    title: "VECTOR",
    description: "Improve your website's visibility on search engines.Improve your website's visibility on search engines.Improve your website's visibility on search engines.",
    icon:<BsVectorPen/> ,
    url: "/services/vector", // Added the missing URL here
  },
  {
    id: 4,
    title: "APPERAL ITEM",
    description: "Promote your business online to a wider audience.",
    icon:< img src={apperal} alt="patch"/>,
    url: "/services/apparel-item",
  },
  {
    id: 5,
    title: "PROMOTIONAL",
    description: "Promote your business online to a wider audience.",
    icon: < img src={promotional} alt="patch"/>,
    url: "/services/promotional",
  },
  {
    id: 6,
    title: "HATS AND BEANIES",
    description: "Promote your business online to a wider audience.",
    icon: <GiWinterHat/>,
    url: "/services/hats-beanies",
  },
];

export default ServiceData;

import { GiSewingNeedle } from "react-icons/gi";
import { BsVectorPen } from "react-icons/bs";
import patch from '../../images/Service_icon/patch.webp'
import apperal from '../../images/Service_icon/apperal.webp'
import promotional from '../../images/Service_icon/promotional-removebg.webp'
import { GiWinterHat } from "react-icons/gi";

const ServiceData = [
  {
    id: 1,
    title: "DIGITIZING",
    description: "Precision-crafted embroidery files with optimal stitch count, minimal trims, and seamless color changes—compatible with all embroidery machines.",
    icon: <GiSewingNeedle/>,
    url: "/services/digitizing",
  },
  {
    id: 2,
    title: "PATCH",
    description: "High-quality custom embroidered patches, durable and vibrant, perfect for branding, uniforms, and personal use.",
    icon: < img src={patch} alt="patch"/>,
    url: "/services/patches",
  },
  {
    id: 3,
    title: "VECTOR",
    description: "Convert raster images into sharp, scalable vector files—ideal for printing, with clean, precise lines.",
    icon:<BsVectorPen/> ,
    url: "/services/vector", // Added the missing URL here
  },
  {
    id: 4,
    title: "APPERAL ITEM",
    description: "Custom embroidered and printed apparel, from t-shirts to Hoodies, ensuring high-quality designs with lasting impact.",
    icon:< img src={apperal} alt="patch"/>,
    url: "/services/apparel-item",
  },
  {
    id: 5,
    title: "PROMOTIONAL",
    description: "Branded promotional items like mugs, keychains, and tote bags—high-quality printing for lasting impressions.",
    icon: < img src={promotional} alt="patch"/>,
    url: "/services/promotional",
  },
  {
    id: 6,
    title: "HATS AND BEANIES",
    description: "Premium custom embroidery for hats and—perfect for brands, events, and personal style with standout quality.",
    icon: <GiWinterHat/>,
    url: "/services/hats-beanies",
  },
];

export default ServiceData;

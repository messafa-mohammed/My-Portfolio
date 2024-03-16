import { useRef } from "react";
import "./portfolio.scss";
import {motion , useScroll , useSpring} from  'framer-motion'

const items = [
    {
      id: 1,
      title: "React.js E-commerce",
      image:
        "https://www.pexels.com/photo/focus-photo-of-super-mario-luigi-and-yoshi-figurines-163036/",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 2,
      title: "Next.js E-commerce",
      image:
        "https://www.pexels.com/photo/turned-on-red-and-green-nintendo-switch-371924/",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 3,
      title: "Vanilla JS App",
      image:
        "https://www.pexels.com/photo/white-gaming-console-on-wooden-surface-275033/",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 4,
      title: "Flutter App",
      image:
        "https://www.pexels.com/photo/red-and-white-tik-tak-toe-game-illustration-220051/",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
  ];

  const Single = ({ item }) => {
    return <section>{item.title}</section>;
  };



const Portfolio = () => {

    const ref = useRef()
  
    const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

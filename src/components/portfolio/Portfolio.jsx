import { useRef } from "react";
import "./portfolio.scss";
import {motion , useScroll , useSpring, useTransform} from  'framer-motion'

const items = [
    {
      id: 1,
      title: "React.js E-commerce",
      image:
        "project00.jpg",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 2,
      title: "Next.js E-commerce",
      image:
        "project01.jpg",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 3,
      title: "Vanilla JS App",
      image:
        "project02.jpg",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
    {
      id: 4,
      title: "Flutter App",
      image:
        "project03.jpg",
      description:
        "A simple e-commerce website built using React and Redux for state management.",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
            target:ref, 
            // offset:["start start","end start"]
            
        })
        const y = useTransform(scrollYProgress,[0,1],[-300,250]);
    return <section>
                <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.image} alt="project image" />
                        </div>
                        
                    <motion.div className="textContainer" style={{y}} >
                        <h2 >{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                    </div>
                    
                </div>
           </section>;
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

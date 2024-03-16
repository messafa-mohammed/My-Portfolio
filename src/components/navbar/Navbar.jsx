import Sidebar from '../sidebar/Sidebar';
import './navbar.scss'
import {motion} from  'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Saidbar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
            initial={{opacity:0 , scale:0.5}}
            animate={{opacity:1 , scale:1}}
            transition={{duration:0.5}}
            >Piuma Nera</motion.span>
        <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61555952563633"><img src="/facebook.png" alt="facebook pic" /></a>
            <a href="https://www.instagram.com/piuma.neraa?igsh=MXYwMmY3cTV2Z2dvZQ=="><img src="/instagram.png" alt="instagram oic" /></a>
            <a href="https://www.threads.net/@piuma.neraa"><img src="/threads.png" alt="thread pic" /></a>
            <a href="https://x.com/Messafa_Mohamed?t=I0rdzh6Dgz8ujmNylM75mQ&s=09"><img src="/twitter.png" alt="x pic" /></a>
            <a href="https://github.com/messafa-mohammed"><img src="/github.png" alt="github pic" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

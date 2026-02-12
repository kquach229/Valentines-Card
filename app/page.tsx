'use client'
import { useState } from "react";
import ConfettiComponent from "./components/ConfettiComponent";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter} from 'next/navigation'


export default function Home() {

   const [pos, setPos] = useState({ top: 100, left: 100 });
   const [accepted, setAccepted] = useState(false);

   const router = useRouter();

    const moveButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;

    setPos({
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    });
  };

  const handleAcceptedClick = () => {
    const currentYear = new Date().getFullYear();
    setAccepted(true);
    setTimeout(() => {
      router.push(`/valentines-card-${currentYear}`);
    }, 6000)
  }

  return (
    <div className="overflow-hidden flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <div className="flex flex-col space-y-5 mx-auto items-center">
      

      <span><span className="text-3xl">Azure, </span>be my Valentine? ❤️</span>
      <div className="space-x-5">

      <motion.button whileHover={{
        scale: 1.1
      }} onClick={handleAcceptedClick} className="text-xl cursor-pointer text-green-300 w-24 h-12 bg-green-500 rounded-md">Yes</motion.button>
      <button  onMouseEnter={moveButton}  style={{
        position: "absolute",
        left: pos.left,
        top: pos.top,
        padding: "12px 20px",
      }} 
      className="text-xl cursor-pointer text-red-300 w-24 h-12 bg-red-500 rounded-md">No</button>
      </div>
      </div>

     <AnimatePresence>
  {accepted && (
    <motion.div
      key="yay"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: -200, y: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-2xl font-bold text-green-500 absolute"
    >
      Wohooo!
    </motion.div>
  )}
</AnimatePresence>



      {accepted &&  <ConfettiComponent />}
     
    </div>
  );
}

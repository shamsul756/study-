"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { SearchX, Home, BedDouble } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  // Container stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Upward floating variants for text/elements
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 px-4 overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Dynamic Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[20%] w-[80vw] h-[80vw] rounded-full bg-blue-600/10 blur-[120px] animate-pulse [animation-duration:8s]" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80vw] h-[80vw] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse [animation-duration:12s]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      {/* Main Content Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-md space-y-8 backdrop-blur-[2px] p-8 rounded-3xl border border-slate-900/50 bg-slate-900/20"
      >
        {/* Micro-interactive Icon */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
            className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] group cursor-pointer"
          >
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-ping opacity-75 [animation-duration:2s]" />
            <SearchX className="w-11 h-11 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className="space-y-3">
          <motion.h1 
            variants={itemVariants}
            className="text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-slate-200 to-slate-500/80 drop-shadow-sm select-none"
          >
            404
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-semibold text-slate-200 tracking-tight"
          >
            Lost in the digital ether?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base text-slate-400 max-w-sm mx-auto font-normal leading-relaxed"
          >
            The destination you are trying to reach has vanished, or perhaps it never existed at all.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
        >
          <Link href="/" className="w-full sm:w-auto">
            <Button 
              size="lg"
              startContent={<Home className="w-4 h-4" />}
              className="w-full sm:w-auto font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Go Home
            </Button>
          </Link>

          <Link href="/allroom" className="w-full sm:w-auto">
            <Button 
              size="lg"
              variant="bordered"
              startContent={<BedDouble className="w-4 h-4" />}
              className="w-full sm:w-auto font-medium text-slate-300 border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Browse Rooms
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
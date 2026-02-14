'use client';

import { motion } from 'framer-motion';

export function FloatingText() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03]'>
      <motion.div
        className='absolute whitespace-nowrap text-[20vw] font-black tracking-tighter'
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          top: '-30%',
        }}
      >
        THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER
      </motion.div>
      <motion.div
        className='absolute whitespace-nowrap text-[20vw] font-black tracking-tighter'
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          top: '0%',
        }}
      >
        THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER
      </motion.div>
      <motion.div
        className='absolute whitespace-nowrap text-[20vw] font-black tracking-tighter'
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          top: '30%',
        }}
      >
        THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER
      </motion.div>

      <motion.div
        className='absolute whitespace-nowrap text-[20vw] font-black tracking-tighter'
        initial={{ x: '-50%' }}
        animate={{ x: '0%' }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          top: '60%',
        }}
      >
        THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER THEBEAEVER
      </motion.div>
    </div>
  );
}

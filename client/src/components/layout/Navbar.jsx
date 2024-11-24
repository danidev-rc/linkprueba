import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from '../icons/logo'
import { Github } from '../icons/logos'
import { ComandK } from '../commandK'
import ButtonUser from '../auth/user-btn'


export default function Navbar() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="sticky top-0 py-4 px-6 bg-neutral-50 dark:bg-neutral-900 z-50 dark:border-b dark:border-neutral-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
    >
      <nav className="flex w-full items-center justify-between container max-w-6xl px-4 mx-auto md:px-6 lg:px-8 xl:px-0 2xl:px-0">
        <motion.div
          className="flex items-center space-x-5"
          variants={itemVariants}
        >
          <Link
            to="/"
            className="flex items-center space-x-3 transition-all duration-300 hover:opacity-80 rtl:space-x-reverse group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size={28} />
            </motion.div>
            <span className="self-center whitespace-nowrap text-xl font-semibold tracking-tight dark:text-white group-hover:text-primary transition-colors duration-300">
              Linky
            </span>
            <motion.span
              className="relative inline-block overflow-hidden rounded-full p-[1px] font-mono"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 text-xs font-medium dark:border-neutral-800 dark:bg-neutral-900 dark:text-white cursor-pointer md:block hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300">
                v1.0.0
              </div>
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center space-x-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/danidev-rc/linky"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
          >
            <Github size="24" />
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ComandK />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ButtonUser />
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

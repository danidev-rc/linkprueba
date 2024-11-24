import { motion } from 'framer-motion'
import { Github, Link, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className="py-48 flex justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        className="flex flex-col items-center px-6 text-center text-white max-w-4xl"
        variants={containerVariants}
      >
        <motion.span
          className="text-sm md:text-base text-neutral-300"
          variants={itemVariants}
        >
          If you spot any issues or have any suggestions, please open an
          <motion.a
            href="https://github.com/danidev-rc/linky/issues/new"
            className="font-bold text-blue-400 hover:text-blue-300 focus-visible:ring-2 px-1 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            issue
          </motion.a>
          in the repository.
        </motion.span>

        <motion.h1
          className="mt-8 text-5xl md:text-6xl font-bold tracking-tight lg:text-7xl max-w-[20ch]"
          variants={itemVariants}
        >
          Welcome to Linky{' '}
          <motion.span
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ yoyo: Infinity, duration: 0.5 }}
          >
            🚀
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-pretty max-w-[75ch] text-sm md:text-base mt-6 text-neutral-300"
          variants={itemVariants}
        >
          Linky is a simple app to save your favorite links. You can add, edit,
          and delete links. You can also add tags to your links to organize
          them.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-6 py-2 shadow-lg shadow-blue-600/20"
            href="/linky"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="mr-2" size={18} />
            Create Linky
            <ArrowRight className="ml-2" size={18} />
          </motion.a>
          <motion.a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-700 text-white hover:bg-neutral-600 h-12 px-6 py-2 shadow-lg shadow-neutral-700/20"
            href="https://github.com/danidev-rc/linky.git"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={18} />
            Start on GitHub
          </motion.a>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

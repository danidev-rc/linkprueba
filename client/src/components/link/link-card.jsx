import { Activity, Copy, Bolt, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { REDIRECT_URL } from '../../config'

dayjs.extend(utc)

export default function CardLink({
  linky,
  clicks,
  url,
  date,
  onEdit,
  onDelete,
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${REDIRECT_URL}/${linky}`)
    toast.success('Link copied to clipboard!')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <motion.a
          href={`${REDIRECT_URL}/${linky}`}
          className="text-white font-mono text-lg hover:text-blue-400 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          /{linky}
        </motion.a>
        <div className="flex gap-3">
          <motion.button
            className="flex items-center gap-1 text-green-500 hover:text-green-400 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Activity size={18} />
            <span className="font-mono">{clicks}</span>
          </motion.button>
          <motion.button
            onClick={copyToClipboard}
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Copy size={18} />
          </motion.button>
          <motion.button
            onClick={() => onEdit({ linky, clicks, url, date })}
            className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bolt size={18} />
          </motion.button>
          <motion.button
            onClick={() => onDelete(linky)}
            className="text-red-500 hover:text-red-400 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 font-mono text-sm truncate hover:text-clip"
      >
        {url}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end font-mono text-xs text-neutral-500 mt-2"
      >
        {dayjs.utc(date).local().format('DD MMMM, YYYY')}
      </motion.div>
    </motion.div>
  )
}

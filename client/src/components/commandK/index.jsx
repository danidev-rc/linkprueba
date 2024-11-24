import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import {
  Search,
  Home,
  Link,
  Settings,
  TreePalm,
  SquareChartGantt,
  HeartHandshake,
  Bug,
  Github,
} from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export const ComandK = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Atajo de teclado Ctrl+K o Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Animaciones para Framer Motion
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-neutral-800 text-neutral-50 transition hover:bg-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <Search size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setOpen(false)} // Cierra el diálogo al hacer clic en el fondo
          >
            <motion.div
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="w-full max-w-lg rounded-lg bg-neutral-50 p-4 shadow-lg dark:bg-neutral-900 max-h-[75vh]"
              onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del diálogo cierre el diálogo
            >
              <DialogTitle className="sr-only">Search Dialog</DialogTitle>

              {/* Campo de búsqueda fijo */}
              <div className="sticky top-0 bg-neutral-50 dark:bg-neutral-900 z-10">
                <Command.Input
                  placeholder="Search..."
                  className="w-full text-white  border-none bg-transparent p-2 text-lg  outline-none placeholder:text-neutral-400 dark:placeholder-text-neutral-500"
                />
              </div>

              {/* Lista desplazable */}
              <div className="mt-4 max-h-[30vh] overflow-y-auto">
                <Command.List>
                  <Command.Empty className="p-4 text-center text-neutral-600 dark:text-neutral-400">
                    No results found.
                  </Command.Empty>
                  <Command.Separator className="my-2 h-[1px] bg-neutral-200 dark:bg-neutral-700" />
                  <Command.Group
                    heading="General"
                    className="mb-2 text-neutral-500"
                  >
                    <Command.Item
                      onSelect={() => {
                        navigate('/')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <Home size={18} />
                      Home
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        navigate('/linky')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <Link size={18} />
                      Linky
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        navigate('/settings')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <Settings size={18} />
                      Settings
                    </Command.Item>
                  </Command.Group>
                  <Command.Separator className="my-2 h-[1px] bg-neutral-200 dark:bg-neutral-700" />
                  <Command.Group
                    heading="Contribute"
                    className="text-neutral-500 "
                  >
                    <Command.Item
                      onSelect={() => {
                        navigate('/getting-started')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <TreePalm size={18} />
                      Getting Started
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        navigate('/roadmap')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <SquareChartGantt size={18} />
                      Roadmap
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        navigate('/contributing')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <HeartHandshake size={18} />
                      Contributing
                    </Command.Item>
                    <Command.Item
                      onSelect={() => {
                        navigate('/report-error')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <Bug size={18} />
                      Report Error
                    </Command.Item>
                  </Command.Group>
                  <Command.Separator className="my-2 h-[1px] bg-neutral-200 dark:bg-neutral-700" />
                  <Command.Group heading="Social" className="text-neutral-500 ">
                    <Command.Item
                      onSelect={() => {
                        navigate('/github')
                        setOpen(false)
                      }}
                      className="cursor-pointer rounded-md p-2 text-neutral-900 hover:bg-neutral-200 dark:text-neutral-500 hover:text-white dark:hover:bg-neutral-700 flex items-center gap-2"
                    >
                      <Github size={18} />
                      Github
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </div>
            </motion.div>
          </Command.Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

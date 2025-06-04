import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: "#services", label: "Especialidades" },
    { href: "#timeline", label: "Formação" },
    { href: "#testimonial", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
    { href: "#blog", label: "Blog" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-base shadow-xl z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-primary">Menu</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-primary">
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  custom={i}
                  variants={itemVariants}
                  onClick={onClose}
                  className="text-lg text-text hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            
            <motion.div
              variants={itemVariants}
              custom={menuItems.length}
              className="mt-8"
            >
              <Button
                onClick={() => {
                  window.open("https://wa.me/5511968942030", "_blank");
                  onClose();
                }}
                className="w-full bg-[#25D366] hover:bg-[#22c35e] text-white"
                size="lg"
              >
                Agendar Consulta
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
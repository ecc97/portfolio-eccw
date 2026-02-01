import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useToast } from '../../hooks/useToasts';
import { useEffect } from 'react';

const TOAST_DURATION = 2500;

interface ToastItemProps {
  id: string;
  title?: string;
  description?: string;
  onDismiss: (id: string) => void;
}

const ToastItem = ({ id, title, description, onDismiss }: ToastItemProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 100 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-auto"
    >
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg overflow-hidden max-w-sm">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {title && (
                <h3 className="font-semibold text-white mb-1">{title}</h3>
              )}
              {description && (
                <p className="text-sm text-white/90">{description}</p>
              )}
            </div>
            <button
              onClick={() => onDismiss(id)}
              className="flex-shrink-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <motion.div
          className="h-1 bg-white/30"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: TOAST_DURATION / 1000, ease: 'linear' }}
          style={{ originX: 0 }}
        />
      </div>
    </motion.div>
  );
};

export const Toaster = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            id={toast.id}
            title={toast.title}
            description={toast.description}
            onDismiss={dismiss}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

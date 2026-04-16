import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Services', path: '/services' },
    { name: 'Workbook', path: '/workbook' },
    { name: 'Tarot Log', path: '/tarot' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Booking', path: '/booking' },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white selection:bg-gold selection:text-navy">
      <div className="background-stars" />
      <div className="geometric-overlay" />
      
      <header className="fixed top-0 w-full z-50 bg-navy/50 backdrop-blur-md border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl tracking-[2px] text-gold uppercase">Handle Tarot</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[13px] tracking-[1px] uppercase transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold opacity-100' : 'text-white opacity-70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="text-[12px] text-gold border border-gold px-[15px] py-[5px] rounded-[20px] cursor-pointer hover:bg-gold hover:text-navy transition-colors">
              MEMBER LOGIN
            </div>
          </nav>

          <button 
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="font-serif text-2xl text-center text-gold/80 hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-glass-border py-6 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[11px] opacity-40 gap-4 text-center md:text-left">
          <div>© 2026 HANDLE TAROT. ALL RIGHTS RESERVED.</div>
          <div>PSYCHOLOGICAL TAROT & BRANDING STRATEGY</div>
          <div>PRIVACY POLICY / TERMS OF SERVICE</div>
        </div>
      </footer>
    </div>
  );
}

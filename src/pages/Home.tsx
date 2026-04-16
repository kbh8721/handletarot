import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Moon, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 relative">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl z-10"
      >
        <div className="flex justify-center gap-4 mb-8 text-gold/60">
          <Moon className="w-6 h-6" />
          <Star className="w-6 h-6" />
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          운명의 핸들을 <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">잡으세요</span>
        </h1>
        
        <p className="text-lg md:text-xl text-soft-white/70 font-light mb-12 leading-relaxed max-w-2xl mx-auto break-keep">
          당신의 잠재의식을 깨우고, 내면의 목소리에 귀 기울이는 시간.
          모던 미스틱 플랫폼 핸들타로에서 새로운 여정을 시작하세요.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/workbook"
            className="group relative px-8 py-3 btn-gold overflow-hidden w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              나의 잠재의식 깨우기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <Link 
            to="/tarot"
            className="px-8 py-3 btn-gold-outline hover:bg-gold/5 transition-colors w-full sm:w-auto text-center"
          >
            타로 로그북 열기
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

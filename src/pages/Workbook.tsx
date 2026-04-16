import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PenLine, BookOpen } from 'lucide-react';

interface Affirmation {
  id: string;
  text: string;
  date: string;
}

export default function Workbook() {
  const [affirmations, setAffirmations] = useState<Affirmation[]>([]);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('handleTarot_affirmations');
    if (saved) {
      setAffirmations(JSON.parse(saved));
    }
  }, []);

  const saveAffirmation = () => {
    if (!currentText.trim()) return;
    
    const newAffirmation: Affirmation = {
      id: Date.now().toString(),
      text: currentText,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    const updated = [newAffirmation, ...affirmations];
    setAffirmations(updated);
    localStorage.setItem('handleTarot_affirmations', JSON.stringify(updated));
    setCurrentText('');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">Subconscious Workbook</h1>
        <p className="text-soft-white/60">당신의 잠재의식에 새기고 싶은 오늘의 확언을 기록하세요.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden h-fit">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
          
          <div className="flex items-center gap-3 mb-6 text-gold">
            <PenLine className="w-5 h-5" />
            <h2 className="font-serif text-2xl">오늘의 확언</h2>
          </div>
          
          <textarea
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            placeholder="나는 인생의 핸들을 잡고 주도적으로 나아간다..."
            className="w-full immersive-input p-3 text-[14px] h-20 resize-none mb-4 placeholder:text-white/30"
          />
          
          <button
            onClick={saveAffirmation}
            className="w-full py-3 btn-gold-outline transition-colors"
          >
            저장하기
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 text-gold">
            <BookOpen className="w-5 h-5" />
            <h2 className="font-serif text-2xl">나의 잠재의식 로그</h2>
          </div>
          
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {affirmations.length === 0 ? (
              <p className="text-soft-white/30 text-center py-12 italic">아직 기록된 확언이 없습니다.</p>
            ) : (
              affirmations.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  className="border-l-2 border-gold pl-3 mb-3"
                >
                  <span className="text-[10px] opacity-50 block">{item.date}</span>
                  <p className="text-[13px] mt-1 leading-[1.4]">{item.text}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

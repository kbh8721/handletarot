import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    topic: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.date && formData.time && formData.topic) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-2xl text-center max-w-lg w-full"
        >
          <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-gold mb-4">예약이 완료되었습니다</h2>
          <p className="text-soft-white/70 font-light leading-relaxed mb-8 break-keep">
            {formData.name}님의 깊은 내면을 탐험할 준비가 되었습니다.<br/>
            선택하신 {formData.date} {formData.time}에 뵙겠습니다.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-gold/10 border border-gold/30 text-gold rounded hover:bg-gold/20 transition-colors"
          >
            새로운 예약하기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">1:1 Private Session</h1>
        <p className="text-soft-white/60">당신만의 이야기를 위한 프라이빗 타로 세션을 예약하세요.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-2xl space-y-8">
        <div>
          <label className="block text-gold text-sm tracking-widest uppercase mb-3">Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full immersive-input p-2.5 text-[12px] mb-2.5"
            placeholder="이름"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="flex items-center gap-2 text-gold text-sm tracking-widest uppercase mb-3">
              <Calendar className="w-4 h-4" /> Date
            </label>
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full immersive-input p-2.5 text-[12px] mb-2.5 [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-gold text-sm tracking-widest uppercase mb-3">
              <Clock className="w-4 h-4" /> Time
            </label>
            <select 
              required
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full immersive-input p-2.5 text-[12px] mb-2.5 [&>option]:bg-navy"
            >
              <option value="">시간 선택</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
              <option value="19:00">19:00</option>
              <option value="21:00">21:00</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-gold text-sm tracking-widest uppercase mb-3">
            <MessageSquare className="w-4 h-4" /> Topic
          </label>
          <textarea 
            required
            value={formData.topic}
            onChange={(e) => setFormData({...formData, topic: e.target.value})}
            className="w-full immersive-input p-2.5 text-[12px] mb-2.5 h-32 resize-none"
            placeholder="어떤 고민이나 주제로 상담을 원하시나요?"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-3 btn-gold mt-4 hover:opacity-90 transition-opacity"
        >
          상담 예약하기
        </button>
      </form>
    </div>
  );
}

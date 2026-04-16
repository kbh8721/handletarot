import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "단순히 미래를 맞추는 것이 아니라, 제 마음 깊은 곳에 있던 두려움을 마주하게 해주셨어요. 세션이 끝난 후 마음이 한결 가벼워졌습니다.",
      author: "J.H",
      tag: "Deep Insight Session"
    },
    {
      text: "고급스러운 분위기와 깊이 있는 해석이 인상적이었습니다. 제 스스로도 몰랐던 저의 패턴을 깨닫게 되는 귀중한 시간이었습니다.",
      author: "S.Y",
      tag: "Yearly Flow Reading"
    },
    {
      text: "관계 문제로 오랫동안 힘들었는데, 타로를 통해 상대방과 저의 에너지를 객관적으로 볼 수 있었어요. 정말 감사합니다.",
      author: "M.K",
      tag: "Relationship Alchemy"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-20">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">Client Stories</h1>
        <p className="text-soft-white/60">핸들타로와 함께 내면의 여정을 경험한 분들의 이야기입니다.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="p-4 border border-glass-border rounded-lg text-[11px] italic leading-[1.5] text-white/70 relative glass-panel"
          >
            <Quote className="w-6 h-6 text-gold/20 absolute top-4 right-4" />
            <p className="mb-4 relative z-10 pt-2 break-keep">
              "{review.text}"
            </p>
            <div className="border-t border-glass-border pt-3">
              <p className="font-serif text-gold text-sm not-italic">{review.author}</p>
              <p className="text-[10px] text-white/40 tracking-widest uppercase mt-1 not-italic">{review.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

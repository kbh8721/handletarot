import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Wand2, Moon, Aperture, Star, Sun } from 'lucide-react';

const TAROT_CARDS = [
  {
    id: 1,
    numeral: "0",
    name: "The Fool",
    keyword: "새로운 시작, 무한한 가능성",
    interpretation: "당신의 잠재의식은 지금 새로운 도약을 원하고 있습니다. 두려움을 내려놓고 직관이 이끄는 대로 첫 걸음을 내딛어 보세요. 완벽한 준비란 없습니다. 지금 이 순간의 용기가 필요할 뿐입니다.",
    icon: Compass
  },
  {
    id: 2,
    numeral: "I",
    name: "The Magician",
    keyword: "창조력, 의지, 실현",
    interpretation: "당신은 이미 필요한 모든 자원을 내면에 가지고 있습니다. 흩어져 있는 생각들을 하나로 모아 현실로 만들어낼 타이밍입니다. 당신의 의지가 곧 마법이 됩니다.",
    icon: Wand2
  },
  {
    id: 3,
    numeral: "II",
    name: "The High Priestess",
    keyword: "직관, 통찰, 내면의 지혜",
    interpretation: "외부의 소음에서 벗어나 내면의 고요함에 귀 기울이세요. 논리나 이성보다 당신의 깊은 직관이 정답을 알고 있습니다. 서두르지 말고 기다림의 미학을 배우세요.",
    icon: Moon
  },
  {
    id: 4,
    numeral: "X",
    name: "The Wheel",
    keyword: "운명, 전환점, 새로운 사이클",
    interpretation: "삶의 수레바퀴가 돌고 있습니다. 예상치 못한 변화가 찾아오더라도, 이는 당신을 더 나은 곳으로 이끌기 위한 우주의 흐름입니다. 흐름에 몸을 맡기세요.",
    icon: Aperture
  },
  {
    id: 5,
    numeral: "XVII",
    name: "The Star",
    keyword: "희망, 영감, 치유",
    interpretation: "어두운 밤하늘을 밝히는 별처럼, 당신의 내면에 새로운 희망과 영감이 피어나고 있습니다. 과거의 상처가 치유되고 긍정적인 에너지가 차오르는 시기입니다.",
    icon: Star
  },
  {
    id: 6,
    numeral: "XIX",
    name: "The Sun",
    keyword: "성공, 긍정, 생명력",
    interpretation: "모든 것이 명확해지고 밝은 에너지가 가득합니다. 당신의 노력과 재능이 빛을 발하며, 주변 사람들에게도 따뜻한 긍정의 힘을 나누어줄 수 있는 때입니다.",
    icon: Sun
  }
];

export default function TarotLogbook() {
  const [selectedCard, setSelectedCard] = useState<typeof TAROT_CARDS[0] | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const drawCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const randomCard = TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)];
      setSelectedCard(randomCard);
      setIsFlipped(true);
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">Digital Tarot Logbook</h1>
        <p className="text-soft-white/60">마음을 비우고, 지금 당신에게 필요한 메시지를 뽑아보세요.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
        {/* Card Area */}
        <div className="w-72 h-[450px] perspective-1000 cursor-pointer" onClick={!selectedCard ? drawCard : undefined}>
          <motion.div
            className="w-full h-full relative transform-style-3d transition-transform duration-1000"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            {/* Card Back */}
            <div className="absolute inset-0 backface-hidden tarot-card-back rounded-xl flex items-center justify-center overflow-hidden">
              {!selectedCard && (
                <p className="absolute bottom-8 text-gold/60 tracking-widest text-sm z-10">CLICK TO DRAW</p>
              )}
            </div>

            {/* Card Front */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 tarot-card-style overflow-hidden flex flex-col items-center justify-between py-8 px-6">
              <div className="absolute inset-2 border border-gold/20 rounded-xl" />
              <div className="absolute inset-3 border border-gold/10 rounded-lg" />
              
              {selectedCard && (
                <>
                  <div className="relative z-10 text-gold/60 font-serif text-2xl">
                    {selectedCard.numeral}
                  </div>
                  
                  <div className="relative z-10 flex-1 flex items-center justify-center w-full">
                    <div className="absolute w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                    <selectedCard.icon className="w-24 h-24 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <p className="font-serif text-2xl text-gold mb-3 tracking-widest uppercase">{selectedCard.name}</p>
                    <div className="w-8 h-px bg-gold/50 mx-auto" />
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Interpretation Area */}
        <div className="flex-1 max-w-xl">
          {selectedCard && isFlipped ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h2 className="font-serif text-3xl text-gold mb-2">{selectedCard.name}</h2>
              <p className="text-gold-light/80 text-sm tracking-widest mb-8 uppercase">{selectedCard.keyword}</p>
              
              <div className="space-y-6 text-soft-white/80 font-light leading-relaxed break-keep">
                <p>{selectedCard.interpretation}</p>
              </div>

              <button
                onClick={() => {
                  setIsFlipped(false);
                  setTimeout(() => setSelectedCard(null), 500);
                }}
                className="mt-12 px-6 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded tracking-widest text-sm uppercase"
              >
                새로운 카드 뽑기
              </button>
            </motion.div>
          ) : (
            <div className="h-full flex items-center justify-center text-soft-white/20 font-serif text-xl italic">
              "당신의 무의식이 이끄는 카드를 선택하세요"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Deep Insight Session",
      price: "₩80,000",
      duration: "60 min",
      desc: "현재 직면한 문제의 근본적인 원인을 파악하고, 잠재의식이 원하는 진정한 방향을 탐색하는 심층 상담입니다."
    },
    {
      title: "Yearly Flow Reading",
      price: "₩120,000",
      duration: "90 min",
      desc: "앞으로의 1년, 당신의 삶에 흐르는 에너지의 흐름을 읽어내고 중요한 선택의 순간들을 대비하는 종합 리딩입니다."
    },
    {
      title: "Relationship Alchemy",
      price: "₩90,000",
      duration: "60 min",
      desc: "연인, 가족, 혹은 비즈니스 파트너와의 관계 역학을 분석하고, 더 건강한 연결을 위한 통찰을 제공합니다."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-20">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">Our Services</h1>
        <p className="text-soft-white/60">당신의 상황에 맞는 최적의 세션을 선택하세요.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="glass-panel p-8 rounded-2xl flex flex-col glow-border group"
          >
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-gold mb-2">{service.title}</h2>
              <div className="flex items-center gap-4 text-sm tracking-widest text-soft-white/50 uppercase">
                <span>{service.duration}</span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span>{service.price}</span>
              </div>
            </div>
            
            <p className="text-soft-white/70 font-light leading-relaxed flex-grow mb-8 break-keep">
              {service.desc}
            </p>
            
            <button className="w-full py-3 btn-gold-outline group-hover:bg-gold group-hover:text-navy transition-colors">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

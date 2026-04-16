import { motion } from 'motion/react';

export default function BrandStory() {
  const sections = [
    {
      title: "The Beginning",
      content: "우리는 모두 각자의 우주를 품고 있습니다. 핸들타로는 그 우주를 탐험하는 나침반이 되고자 합니다. 단순한 점술을 넘어, 내면의 깊은 곳에 숨겨진 당신만의 해답을 찾아가는 여정."
    },
    {
      title: "Modern Mystic",
      content: "고대의 지혜인 타로를 현대 심리학의 관점으로 재해석합니다. 신비로움은 유지하되, 맹신이 아닌 자기 성찰의 도구로서 타로를 활용합니다. 세련되고 감각적인 경험을 통해 당신의 잠재의식을 일깨웁니다."
    },
    {
      title: "Take the Handle",
      content: "운명은 정해진 것이 아니라 만들어가는 것입니다. 타로 카드가 보여주는 것은 미래가 아닌, 당신이 나아갈 수 있는 수많은 길 중 하나입니다. 이제, 당신의 삶의 핸들을 직접 잡으세요."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-32">
        <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6 italic">Our Narrative</h1>
        <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </div>

      <div className="space-y-32">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-3xl text-gold mb-6">{section.title}</h2>
              <p className="text-soft-white/70 leading-loose font-light text-lg break-keep">
                {section.content}
              </p>
            </div>
            <div className="flex-1 w-full aspect-square max-w-sm relative">
              <div className="absolute inset-0 border border-gold/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 border border-gold/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-full backdrop-blur-sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

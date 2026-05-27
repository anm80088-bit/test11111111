import React, { useState } from 'react';

// --- 1. 12道冷冽精炼的题目（包含 E 选项:回避） ---
const questions = [
  {
    id: 1,
    q: "如果把你们相处时的空气拟物化,你更希望它呈现什么状态?",
    options: [
      { text: "充满张力,一触即发,节奏由你掌控", type: "A" },
      { text: "温柔包裹,没有缝隙,你只需要闭眼沉浸", type: "B" },
      { text: "绝对零度,各自独立,留出大片空白", type: "C" },
      { text: "恒温运转,严丝合缝,不出现任何意外", type: "D" },
      { text: "若隐若现,随时可以抽身退回安全地带", type: "E" }
    ]
  },
  {
    id: 2,
    q: "面对 Ta 偶尔流露的脆弱和失控,你内心的第一反应是?",
    options: [
      { text: "想要立刻安慰对方,接管 Ta 的情绪", type: "A" },
      { text: "手足无措,不知道该怎么办", type: "B" },
      { text: "冷静分析 Ta 失控的原因", type: "C" },
      { text: "递上一张纸巾,理智地帮 Ta 重建秩序", type: "D" },
      { text: "本能地想后退,下意识回避这种沉重的情感", type: "E" }
    ]
  },
  {
    id: 3,
    q: "微信突然收到 Ta 一句没有下文的\"在吗?\",你会?",
    options: [
      { text: "直接秒回或者电话过去,不允许沟通存在时差", type: "A" },
      { text: "心跳漏一拍,反思自己是不是做错了什么", type: "B" },
      { text: "看一眼就放下,等 Ta 说具体事情了再回复", type: "C" },
      { text: "按节奏平稳而有礼貌地给予回复", type: "D" },
      { text: "产生莫名的压力,甚至想要假装没看见而假死", type: "E" }
    ]
  },
  {
    id: 4,
    q: "如果用一个词来形容你对\"完美爱意\"的想象,它会是?",
    options: [
      { text: "侵占:如同潮水吞没旷野,无处可逃", type: "A" },
      { text: "溺亡:整个人毫无保留,彻底交付", type: "B" },
      { text: "共振:灵魂保持距离,在遥远时空交相辉映", type: "C" },
      { text: "禁锢:世界很大,但我们的领地只有彼此", type: "D" },
      { text: "悬浮:不绑定,不承诺,随时能轻盈离去", type: "E" }
    ]
  },
  {
    id: 5,
    q: "当你极度喜欢 Ta 的时候,你的第一本能倾向于?",
    options: [
      { text: "想要折服 Ta,让 Ta 的意志与你一致", type: "A" },
      { text: "想要为 Ta 妥协,变成 Ta 习惯的一部分", type: "B" },
      { text: "不去打扰,保持最完美的社交距离欣赏", type: "C" },
      { text: "想要把 Ta 藏匿,不让任何外人分享", type: "D" },
      { text: "突然感到害怕,甚至生出想要往后退缩的冲动", type: "E" }
    ]
  },
  {
    id: 6,
    q: "如果允许你对 Ta 做一件事且不被责怪,你倾向于?",
    options: [
      { text: "在 Ta 不知情下,主导 Ta 一整天行程惊喜", type: "A" },
      { text: "让 Ta 决定你今日穿搭饮食,放弃思考", type: "B" },
      { text: "躲在暗处看 Ta 一天日常,记录细微习惯", type: "C" },
      { text: "让 Ta 换上你指定的特定风格衣服,只展现给你看", type: "D" },
      { text: "向 Ta 申请一段互不打扰、完全人间蒸发的假期", type: "E" }
    ]
  },
  {
    id: 7,
    q: "突然被 Ta 从背后紧紧抱住,你的潜意识第一反馈是?",
    options: [
      { text: "顺势转过身反手扣住 Ta,反客为主压制主动权", type: "A" },
      { text: "身体瞬间放松,向后靠去,产生强烈依赖", type: "B" },
      { text: "身体微微僵硬,在内心衡量这是否是情绪索取", type: "C" },
      { text: "理智地拉开一点便于说话的距离", type: "D" },
      { text: "感到窒息与压迫感,第一反应是挣脱这个束缚", type: "E" }
    ]
  },
  {
    id: 8,
    q: "在这段亲密关系中,你最抗拒看到什么?",
    options: [
      { text: "Ta 反应慢半拍,赶不上你的情感爆发", type: "A" },
      { text: "Ta 一丝细微冷淡引发你翻江倒海的猜测", type: "B" },
      { text: "Ta 过度情绪化黏人,让你失去私人领地", type: "C" },
      { text: "规划好的约会被 Ta 随意打破失去掌控", type: "D" },
      { text: "Ta 开始谈论严肃的未来,试图彻底绑定你", type: "E" }
    ]
  },
  {
    id: 9,
    q: "深夜与 Ta独处,哪种声音最能让你产生深层宿命感?",
    options: [
      { text: "沉重沉稳、一下一下敲击在地板上的皮鞋声", type: "A" },
      { text: "雨水不断拍打窗玻璃的沉闷白噪音", type: "B" },
      { text: "隔壁房间传来听不真切的喃喃私语", type: "C" },
      { text: "机械手表精准、毫无偏差的滴答声", type: "D" },
      { text: "窗外风声掠过空旷街道,什么也没留下的寂静", type: "E" }
    ]
  },
  {
    id: 10,
    q: "若手腕需加一件装饰,你最无法抗拒的是?",
    options: [
      { text: "一块代表身份、冰冷沉重的机械名表", type: "A" },
      { text: "一条带微弱束缚感、贴合皮肤的暗色丝带", type: "B" },
      { text: "一串能看透命运的天然矿石手串", type: "C" },
      { text: "一个无法轻易摘下的定制纯银手镯", type: "D" },
      { text: "一件毫无存在感、随时可以隐形的透明腕带", type: "E" }
    ]
  },
  {
    id: 11,
    q: "当你和 Ta 产生无法调和的意见分歧时,你的常态是?",
    options: [
      { text: "直接争论,直到一方被完全说服", type: "A" },
      { text: "表面顺从内心委屈,深夜复盘内耗", type: "B" },
      { text: "懒得解释,冷眼旁观,关闭所有接收通道", type: "C" },
      { text: "克制情绪,条理清晰地就事论事", type: "D" },
      { text: "直接冷战甚至玩消失,切断联系拒绝正面博弈", type: "E" }
    ]
  },
  {
    id: 12,
    q: "如果这段相处注定走向终点,你觉得最后的一幕会是?",
    options: [
      { text: "由你亲手拉下帷幕,不留悬念,利落交接", type: "A" },
      { text: "哪怕支离破碎,依然深陷其中试图挽留", type: "B" },
      { text: "平静接受,像看别人的故事一样自行退场", type: "C" },
      { text: "严格清算交集退还物品,退回既定边界", type: "D" },
      { text: "无声无息地淡出 Ta 的世界,不留任何解释", type: "E" }
    ]
  }
];

// --- 2. 7种结果原型 ---
const resultData = {
  "A": { name: "捕食者", tags: ["主导", "掌控", "狩猎本能"], desc: "在关系中,你习惯占据绝对高位。你享受那种清醒的掌控感,相处的节奏必须由你主导。", theme: "from-gray-900 to-red-950", textColor: "text-red-100", btnColor: "bg-red-900", subText: "text-red-400" },
  "B": { name: "项圈", tags: ["依恋", "交付", "极致包裹"], desc: "你渴望让渡自主权,寻求被标记、被牵引的安全感。在 Ta 的彻底包裹中,你才感到真正的完整。", theme: "from-rose-100 to-rose-300", textColor: "text-rose-900", btnColor: "bg-rose-800", subText: "text-rose-700" },
  "C": { name: "冷空气", tags: ["抽离", "独立", "静态凝视"], desc: "极致的清醒让你在恋爱中依然保持边界。你像是一个冷眼旁观的创作者,随时有自行退场的能力。", theme: "from-blue-50 to-indigo-100", textColor: "text-blue-900", btnColor: "bg-blue-800", subText: "text-blue-700" },
  "D": { name: "真空腔", tags: ["秩序", "精神洁癖", "绝对防线"], desc: "你追求绝对的纯净与私密。你的原则极强,一旦有人试图打破既定边界,你会立刻关闭情感通道。", theme: "from-white to-gray-100", textColor: "text-gray-800", btnColor: "bg-gray-800", subText: "text-gray-500" },
  "E": { name: "防空洞", tags: ["回避", "退缩", "情感隔离"], desc: "亲密对你而言伴随着隐形的压力。当感知到冲突或过度黏腻时,你习惯退回孤身一人的防空洞,用隔离保护自己。", theme: "from-zinc-700 to-slate-900", textColor: "text-slate-100", btnColor: "bg-zinc-800", subText: "text-slate-400" },
  "AC": { name: "越界者", tags: ["试探", "神秘", "暧昧博弈"], desc: "你清醒地在亲密与疏离之间游走。你擅长用暧昧的推拉打破 Ta 的安全距离,一步步逼近核心。", theme: "from-slate-900 to-violet-950", textColor: "text-violet-100", btnColor: "bg-violet-900", subText: "text-violet-400" },
  "BD": { name: "安全屋", tags: ["容纳", "温顺", "稳定基座"], desc: "你渴求一种严丝合缝、不被意外打扰的相处模式。表面上规律安稳,内部却共享着最私密的依赖。", theme: "from-orange-50 to-orange-100", textColor: "text-orange-900", btnColor: "bg-orange-800", subText: "text-orange-700" }
};

export default function App() {
  const [step, setStep] = useState('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalResult, setFinalResult] = useState(null);

  // 配色方案:低饱和度粉紫渐变
  const globalBg = "bg-gradient-to-br from-[#E7BDCE] to-[#A383AD]";
  const quizTextColor = "text-[#4A2B4D]";

  const handleSelect = (type) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = type;
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const calculateResult = (finalAnswers) => {
    setStep('loading');
    setTimeout(() => {
      const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
      finalAnswers.forEach(a => counts[a]++);
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const primary = sorted[0][0];
      const secondary = sorted[1][0];

      let resultKey = primary;
      if ((primary === 'A' && secondary === 'C') || (primary === 'C' && secondary === 'A')) {
        if (counts.A + counts.C >= 7) resultKey = 'AC';
      } else if ((primary === 'B' && secondary === 'D') || (primary === 'D' && secondary === 'B')) {
        if (counts.B + counts.D >= 7) resultKey = 'BD';
      }

      setFinalResult(resultData[resultKey] || resultData[primary]);
      setStep('result');
    }, 2000);
  };

  const Signature = ({ dark = false }) => (
    <div className={`fixed bottom-6 right-6 text-[10px] tracking-[0.3em] font-extralight uppercase ${dark ? 'text-white/30' : 'text-[#4A2B4D]/40'}`}>
      Created by yuuko
    </div>
  );

  if (step === 'home') {
    return (
      <div className={`min-h-screen ${globalBg} flex flex-col items-center justify-center p-8`}>
        <div className="text-center space-y-6">
          <h1 className={`text-3xl font-extralight tracking-[0.2em] ${quizTextColor} leading-relaxed`}>
            情感相处类型测试
          </h1>
          <p className={`text-xs font-light tracking-[0.15em] ${quizTextColor} opacity-60 uppercase`}>
            探测潜意识里的共振与防御
          </p>
          <div className="h-[1px] w-12 bg-white/30 mx-auto mt-12"></div>
          <button
            onClick={() => setStep('quiz')}
            className={`mt-16 px-10 py-3 border border-white/40 ${quizTextColor} font-extralight tracking-widest text-sm hover:bg-white/20 transition-all rounded-sm`}
          >
            开始探索
          </button>
        </div>
        <Signature />
      </div>
    );
  }

  if (step === 'quiz') {
    const q = questions[currentIndex];
    return (
      <div className={`min-h-screen ${globalBg} flex flex-col p-8 md:p-20 justify-between`}>
        <div className="h-10">
          {currentIndex > 0 && (
            <button onClick={handleBack} className={`text-xs font-extralight tracking-widest ${quizTextColor} opacity-50 hover:opacity-100 flex items-center gap-2`}>
              ← 上一题
            </button>
          )}
        </div>

        <div className="max-w-xl my-auto">
          <span className={`text-4xl font-extralight ${quizTextColor} opacity-20 tracking-tighter`}>
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <h2 className={`mt-6 text-lg font-normal tracking-wider ${quizTextColor} leading-relaxed`}>
            {q.q}
          </h2>

          <div className="mt-12 space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt.type)}
                className="w-full text-left p-5 bg-white/40 backdrop-blur-md border border-transparent hover:border-white/40 hover:bg-white/60 transition-all rounded-xl shadow-sm"
              >
                <span className={`text-[14px] font-light tracking-wide ${quizTextColor}`}>{opt.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="h-10"></div>
        <Signature />
      </div>
    );
  }

  if (step === 'loading') {
    return (
      <div className={`min-h-screen ${globalBg} flex items-center justify-center`}>
        <p className={`text-xs font-extralight tracking-[0.4em] ${quizTextColor} opacity-60 animate-pulse`}>正在聆听内心...</p>
        <Signature />
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${finalResult.theme} flex flex-col items-center justify-center p-6 transition-colors duration-1000`}>
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/10 w-full max-w-sm text-center space-y-8 shadow-2xl">
          <p className={`text-[10px] tracking-[0.5em] font-extralight uppercase ${finalResult.subText}`}>你的相处原型</p>
          <h2 className={`text-5xl font-light tracking-[0.2em] ${finalResult.textColor}`}>
            {finalResult.name}
          </h2>

          <div className="flex justify-center gap-2 mt-4">
            {finalResult.tags.map(tag => (
              <span key={tag} className={`text-[10px] px-3 py-0.5 border border-white/20 rounded-full tracking-widest font-extralight ${finalResult.textColor} opacity-80`}>
                {tag}
              </span>
            ))}
          </div>

          <p className={`text-xs font-light tracking-widest leading-loose mt-10 text-justify px-2 ${finalResult.textColor} opacity-90`}>
            {finalResult.desc}
          </p>

          <button
            onClick={() => {
              setStep('home');
              setCurrentIndex(0);
              setAnswers([]);
            }}
            className={`mt-12 px-8 py-2.5 rounded-full text-[10px] tracking-[0.3em] font-extralight text-white ${finalResult.btnColor} shadow-md transition-transform hover:scale-105`}
          >
            重新测试
          </button>
        </div>
        <Signature dark={finalResult.theme.includes('black') || finalResult.theme.includes('900')} />
      </div>
    );
  }
}
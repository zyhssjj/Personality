import type {
  ContactItem,
  Profile,
  ProjectCase,
  ProofPoint,
  SkillGroup,
} from '../types/site'

const resumeUrl = `${import.meta.env.BASE_URL}resume-english.pdf`

export const profile: Profile = {
  name: '张雨豪',
  heroId: 'System Atlas / 2026',
  role: 'Golang 后端候选人，也能做能落地的 AI 全栈产品',
  summary:
    '我关注系统设计、工程质量、性能稳定性，以及如何把 AI 能力真正接进业务流程，做出可交付、可维护、可验证的产品。',
  status: '当前内容已替换为真实链接，你可以继续在 src/data/siteContent.ts 中完善项目与个人信息。',
  focusTags: ['后端工程', 'AI 应用集成', '前端交互表达'],
  quickFacts: [
    { label: '目标岗位', value: 'Golang 后端 / AI 全栈' },
    { label: '展示策略', value: '站内讲清项目，外链补充材料' },
    { label: '页面气质', value: '系统感、轻作品集、重表达' },
  ],
  principles: ['先讲价值，再讲架构', '先给结论，再展开细节', '让交互服务内容，而不是盖过内容'],
  about: [
    '我希望这个站点传达的不是“我会做页面”，而是“我能把系统从需求、架构、实现到体验完整推进”。',
    '主线能力是 Golang 后端与工程落地，补充能力是 AI 应用接入、流程编排和前端表达。',
    '如果你继续把这里替换成自己的真实经历，建议优先把最强的三个项目写透，而不是堆很多浅层项目。',
  ],
  links: {
    github: 'https://github.com/zyhssjj',
    blog: 'https://github.com/zyhssjj',
    email: 'mailto:19841861568@139.com',
    resume: resumeUrl,
  },
  footerNote: 'Built with React, Vite, GSAP and a static data-driven content model. Ready for Cloudflare Pages.',
}

export const proofPoints: ProofPoint[] = [
  {
    value: '5s',
    label: '首屏理解目标',
    note: '让打开页面的人在很短时间内知道你是谁、做什么、擅长什么。',
  },
  {
    value: '3',
    label: '核心项目数量',
    note: '只放最强的三个项目，每个项目都讲清角色、难点和结果。',
  },
  {
    value: '1',
    label: '统一记忆点',
    note: '整站围绕一个清晰的工程叙事展开，避免风格与信息割裂。',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: '后端与系统设计',
    summary: '强调工程稳定性、服务边界和复杂流程拆解能力。',
    items: [
      { name: 'Golang', level: '主力语言', scene: '服务开发、任务系统、接口设计' },
      { name: 'MySQL / Redis', level: '高频使用', scene: '缓存策略、读写模型、数据一致性' },
      { name: '消息队列 / 调度', level: '重点强化', scene: '异步任务、削峰填谷、重试补偿' },
    ],
  },
  {
    title: 'AI 应用集成',
    summary: '把模型能力接进真实工作流，而不只是停留在 Demo 层。',
    items: [
      { name: 'RAG / Agent Flow', level: '持续迭代', scene: '知识问答、工具调用、流程编排' },
      { name: 'Prompt Engineering', level: '场景驱动', scene: '结构化输出、稳定召回、格式约束' },
      { name: '评估与观测', level: '正在完善', scene: '质量回归、链路排查、成本控制' },
    ],
  },
  {
    title: '前端表达与演示',
    summary: '把复杂系统讲清楚，让对方更快看到你的工程判断。',
    items: [
      { name: 'React / Vue', level: '可独立完成', scene: '静态站、管理台、交互原型' },
      { name: 'TypeScript', level: '默认使用', scene: '组件抽象、数据建模、状态约束' },
      { name: '交互动效', level: '克制增强', scene: '首屏入场、视线引导、信息强调' },
    ],
  },
]

export const contacts: ContactItem[] = [
  { label: 'GitHub', value: 'github.com/zyhssjj', href: profile.links.github, primary: true },
  { label: '微信', value: '19841861568', primary: true },
  { label: '邮箱', value: '19841861568@139.com', href: profile.links.email },
  { label: '简历', value: 'English Resume PDF', href: profile.links.resume },
]

export const projectCases: ProjectCase[] = [
  {
    slug: 'go-service-template',
    category: 'Backend Focus',
    title: 'Golang 核心后端项目',
    summary: '建议这里放最能体现后端架构设计、性能优化或系统治理能力的项目。',
    role: '后端主导 / 架构设计 / 性能优化',
    spotlight: '优先突出吞吐、延迟、稳定性、失败重试和系统复杂度控制。',
    background:
      '用一段话解释项目为什么存在，写清业务目标、旧方案痛点、为什么值得做，以及你在其中承担了什么角色。',
    scope: ['负责的系统边界是什么', '亲自落地的关键模块有哪些', '如何推动方案从设计走到上线'],
    techStack: ['Go', 'MySQL', 'Redis', 'gRPC', 'Prometheus'],
    metric: {
      label: '结果指标位',
      value: '替换成真实指标',
      note: '例如 QPS、P99、错误率、吞吐量、节省人力或缩短耗时。',
    },
    architecture: [
      { name: '入口层', detail: 'API、权限校验、参数治理', accent: 'primary' },
      { name: '调度层', detail: '核心策略、状态流转、重试补偿', accent: 'warning' },
      { name: '执行层', detail: 'Worker、并发控制、任务拆分', accent: 'success' },
      { name: '观测层', detail: '日志、指标、告警、链路排查', accent: 'primary' },
    ],
    decisions: [
      { title: '为什么这样拆服务', detail: '体现你对服务边界的判断，而不是为了拆而拆。' },
      { title: '为什么采用这套存储方案', detail: '说明一致性、性能和扩展性之间的权衡。' },
      { title: '为什么监控这样设计', detail: '强调排障效率、线上可观测性和复盘能力。' },
    ],
    challenges: [
      {
        title: '高并发下的状态一致性',
        problem: '描述一个真实的并发问题，以及它会带来什么业务风险。',
        action: '说明你如何定位、改造和验证修复效果。',
        outcome: '给出错误率下降、重试减少、耗时降低等结果。',
      },
      {
        title: '复杂任务失败后的补偿',
        problem: '讲清任务链路为什么会失败，以及失败后会带来什么影响。',
        action: '说明补偿设计、兜底策略和可观测手段。',
        outcome: '体现上线后的稳定性收益和维护成本变化。',
      },
    ],
    outcomes: ['上线结果', '指标变化', '业务影响', '复盘结论'],
    reflection: '最后用 2 到 3 句话复盘：如果再做一次，你会怎样重构、抽象或提前规避风险。',
    links: [
      { label: 'GitHub 仓库', href: profile.links.github },
      { label: '简历 PDF', href: profile.links.resume },
    ],
  },
  {
    slug: 'ai-fullstack-template',
    category: 'AI Fullstack',
    title: 'AI 全栈项目',
    summary: '建议这里放最能体现 AI 能力接入真实业务、前后端联动和流程编排的项目。',
    role: '全栈实现 / AI 流程设计 / 产品交付',
    spotlight: '重点不是“接了大模型”，而是你如何把模型能力稳定地用起来。',
    background:
      '建议说明应用场景、用户需求、AI 的价值，以及传统方案为什么不够好。',
    scope: ['前端交互和结果呈现如何设计', '后端如何编排模型、知识库和工具调用', '如何平衡效果、速度与成本'],
    techStack: ['React', 'TypeScript', 'Go / Node', 'LLM API', 'Vector Store'],
    metric: {
      label: '价值结果位',
      value: '替换成真实收益',
      note: '例如命中率、响应时间、自动化覆盖率、节省时长等。',
    },
    architecture: [
      { name: '交互层', detail: '多轮输入、结果卡片、状态反馈', accent: 'primary' },
      { name: '编排层', detail: 'Prompt、工具链、上下文管理', accent: 'warning' },
      { name: '知识层', detail: '向量检索、召回过滤、内容拼装', accent: 'success' },
      { name: '评估层', detail: '日志回放、命中率观察、成本统计', accent: 'primary' },
    ],
    decisions: [
      { title: '为什么这样设计 Prompt', detail: '强调输出稳定性和格式约束，而不是“调了很多 prompt”。' },
      { title: '为什么需要知识检索', detail: '说明它解决了什么问题，以及如何避免低质量召回。' },
      { title: '为什么要做评估与日志', detail: '体现你是把 AI 当系统在做，而不是一次性 Demo。' },
    ],
    challenges: [
      {
        title: '回答不稳定与幻觉',
        problem: '举一个真实会让用户失去信任的场景。',
        action: '说明如何约束输出、补充上下文或设计回退策略。',
        outcome: '给出命中率提升、人工纠错减少等结果。',
      },
      {
        title: '响应速度与可用性平衡',
        problem: '说明模型响应慢或链路过长带来的问题。',
        action: '写出缓存、异步、流式输出或降级方案。',
        outcome: '体现用户体验改善和成本控制效果。',
      },
    ],
    outcomes: ['真实用户是否在用', '场景是否闭环', '效果是否可验证', '后续是否可扩展'],
    reflection: '复盘重点可以放在：AI 能力只有接进流程、可观测、可复盘，才算真正落地。',
    links: [
      { label: 'GitHub 仓库', href: profile.links.github },
      { label: '简历 PDF', href: profile.links.resume },
    ],
  },
  {
    slug: 'business-impact-template',
    category: 'Product Delivery',
    title: '复杂落地项目',
    summary: '建议这里放最能体现你与业务协作、推进上线、平衡工程与结果的项目。',
    role: '需求拆解 / 方案推进 / 全链路交付',
    spotlight: '如果前两个项目偏技术，这个项目可以证明你不只会写代码，还能推动落地。',
    background:
      '建议写清业务目标、协作方、上线压力、交付周期，以及为什么你是关键推进者。',
    scope: ['如何理解需求并重构问题', '如何拆分阶段与控制交付风险', '如何在技术、时间、体验之间做权衡'],
    techStack: ['React', 'Go', 'OpenAPI', 'Monitoring', 'CI / CD'],
    metric: {
      label: '业务结果位',
      value: '替换成真实影响',
      note: '例如节省时间、提升转化、减少投诉、支撑活动或降低维护成本。',
    },
    architecture: [
      { name: '需求侧', detail: '目标抽象、流程梳理、边界确认', accent: 'warning' },
      { name: '实现侧', detail: '前后端联动、接口治理、异常兜底', accent: 'primary' },
      { name: '交付侧', detail: '联调验收、灰度发布、回滚预案', accent: 'success' },
      { name: '复盘侧', detail: '指标追踪、反馈回收、二期计划', accent: 'primary' },
    ],
    decisions: [
      { title: '为什么先做最小闭环', detail: '体现你对交付节奏和风险控制的判断。' },
      { title: '为什么保留这部分复杂度', detail: '说明哪些复杂度是必要的，哪些可以延后。' },
      { title: '为什么这样定义上线成功', detail: '强调你对结果指标的敏感度。' },
    ],
    challenges: [
      {
        title: '需求变化频繁',
        problem: '说明变化来自哪里，以及会影响哪些设计。',
        action: '写出你的抽象方式、预留策略和沟通方法。',
        outcome: '展示你如何稳住节奏，而不是被动返工。',
      },
      {
        title: '多角色协作下的信息断层',
        problem: '讲清协作复杂度，而不是泛泛而谈“沟通很多”。',
        action: '说明如何同步状态、对齐目标、减少返工。',
        outcome: '突出你在推进落地中的作用。',
      },
    ],
    outcomes: ['项目是否按时上线', '业务是否接受', '工程是否可维护', '你学到了什么'],
    reflection: '这个项目最适合体现你的综合判断力，复盘里可以写清你如何平衡技术理想与现实交付。',
    links: [
      { label: 'GitHub 仓库', href: profile.links.github },
      { label: '简历 PDF', href: profile.links.resume },
    ],
  },
]

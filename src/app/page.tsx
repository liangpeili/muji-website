const navItems = ["产品价值", "核心能力", "控制台", "安全保障"];

const systemParts = [
  {
    name: "微信连接助手",
    project: "稳定连接",
    summary: "把微信里的客户消息、朋友圈互动和群聊动态稳定同步到系统，让运营团队不再依赖人工盯号。",
    facts: ["消息同步", "朋友圈互动", "群聊动态", "状态提醒"],
  },
  {
    name: "AI 运营大脑",
    project: "智能决策",
    summary: "理解客户意图、匹配知识内容、生成回复建议，并根据规则控制哪些内容可以自动执行。",
    facts: ["客户画像", "知识匹配", "回复建议", "风险控制"],
  },
  {
    name: "运营控制台",
    project: "团队协作",
    summary: "销售、客服和运营人员统一管理数字分身、客户画像、跟进任务、朋友圈内容和效果数据。",
    facts: ["数字分身", "联系人运营", "群聊情报", "运行日志"],
  },
];

const workflow = [
  {
    label: "数据接入",
    text: "客户消息、联系人、朋友圈互动和群聊动态自动汇总，减少人工复制和漏看。",
  },
  {
    label: "客户理解",
    text: "系统根据历史沟通和客户行为生成画像，帮助团队判断客户兴趣、阶段和下一步动作。",
  },
  {
    label: "智能协助",
    text: "常见问题可自动回复，复杂问题给出建议，朋友圈和跟进任务按计划提醒或执行。",
  },
  {
    label: "运营管理",
    text: "安全规则、人工审核、任务状态和操作记录让团队知道 AI 做了什么、为什么做。",
  },
  {
    label: "业务洞察",
    text: "客户画像、群聊情报、互动趋势和转化漏斗帮助团队发现优先级。",
  },
];

const dashboardViews = [
  ["首页看板", "系统状态、今日数据、待处理事项和互动趋势集中呈现。"],
  ["数字分身", "管理沟通风格、知识内容、审核工作台和安全规则。"],
  ["联系人画像", "沉淀客户标签、聊天统计、画像详情与沟通建议。"],
  ["私域任务", "用任务看板、规则和管道视图推动销售与运营跟进。"],
  ["定时朋友圈", "提前规划内容和发布时间，让触达节奏更稳定。"],
  ["运行日志", "记录关键动作、异常提醒和最近活动，方便团队复盘。"],
];

const aiFlow = [
  "客户发起咨询",
  "识别问题类型",
  "匹配知识内容",
  "生成回复建议",
  "安全规则检查",
  "必要时人工审核",
  "发送或提醒跟进",
  "沉淀客户记录",
];

const scenarios = [
  {
    title: "私域客服",
    text: "高频咨询自动回复，规则和知识库保证回答边界，减少重复沟通。",
  },
  {
    title: "销售跟进",
    text: "客户画像、跟进任务和沟通建议帮助销售识别重点客户。",
  },
  {
    title: "社群运营",
    text: "群聊信号流、话题雷达和项目进展追踪，让运营团队不漏关键信息。",
  },
  {
    title: "内容运营",
    text: "定时朋友圈、朋友圈跟评和内容辅助，保持私域触达节奏。",
  },
];

const trustItems = [
  "客户数据隔离",
  "成员权限控制",
  "敏感内容拦截",
  "回复前审核",
  "关键操作留痕",
  "异常状态提醒",
  "可随时人工接管",
  "客户沟通记录可复盘",
];

const adoptionSteps = [
  "确认业务场景：客服、销售、社群或内容运营。",
  "整理常见问题、产品资料和客户分层规则。",
  "用演示账号跑通数字分身、画像和跟进任务。",
  "小范围试点，再逐步扩大到更多微信号和团队成员。",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ConsolePreview({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <article className="console-preview">
      <div className="console-bar">
        <span />
        <span />
        <span />
        <strong>{title}</strong>
      </div>
      <div className="console-body">
        <div className="console-sidebar" />
        <div className="console-content">
          <div className="console-title-row">
            <span>{title}</span>
            <small>MUJI-0{index + 1}</small>
          </div>
          <div className="console-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="console-chart">
            <b />
            <b />
            <b />
            <b />
          </div>
        </div>
      </div>
      <p>{description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-nav" aria-label="主导航">
        <a className="brand-mark" href="#top" aria-label="牧机官网首页">
          <span>牧</span>
          <strong>Muji AI</strong>
        </a>
        <nav aria-label="页面章节">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          预约演示
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="hero-kicker">牧机私域 AI 系统</span>
          <h1>让每个微信号拥有可控的 AI 分身</h1>
          <p>
            帮助销售、客服和运营团队统一管理客户沟通、自动回复、朋友圈触达、群聊线索和跟进任务。
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <a className="button primary" href="#contact">
              预约演示
            </a>
            <a className="button secondary" href="#产品价值">
              查看系统能力
            </a>
          </div>
        </div>

        <div className="system-board" aria-label="牧机私域运营流程示意">
          <div className="board-status">
            <span>LIVE SYSTEM</span>
            <strong>消息、任务、状态三链路在线</strong>
          </div>
          <div className="board-flow">
            {systemParts.map((part) => (
              <article key={part.name}>
                <small>{part.project}</small>
                <h2>{part.name}</h2>
                <p>{part.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture" id="产品价值">
        <SectionHeader
          eyebrow="PRIVATE DOMAIN OPERATING SYSTEM"
          title="不只是自动回复，而是私域运营的日常工作台"
          description="牧机把微信连接、AI 辅助和团队管理放在同一套流程里，让客户沟通、内容触达和销售跟进都有据可查。"
        />
        <div className="architecture-grid">
          {systemParts.map((part) => (
            <article className="system-card" key={part.project}>
              <span>{part.project}</span>
              <h3>{part.name}</h3>
              <p>{part.summary}</p>
              <ul>
                {part.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow" id="核心能力">
        <SectionHeader
          eyebrow="OPERATING WORKFLOW"
          title="按运营工作流组织 AI，而不是堆叠功能菜单"
          description="从客户消息进入到销售跟进，每一步都围绕运营团队的日常动作设计，减少重复劳动，也保留人工判断空间。"
        />
        <div className="workflow-rail">
          {workflow.map((item, index) => (
            <article key={item.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section console-section" id="控制台">
        <SectionHeader
          eyebrow="DASHBOARD PREVIEW"
          title="运营团队看得见、管得住、追得上"
          description="控制台围绕团队每天要看的客户、内容、任务和结果组织，帮助管理者快速判断运营状态。"
        />
        <div className="console-grid">
          {dashboardViews.map(([title, description], index) => (
            <ConsolePreview key={title} title={title} description={description} index={index} />
          ))}
        </div>
      </section>

      <section className="section ai-chain">
        <SectionHeader
          eyebrow="CONTROLLED AI REPLY"
          title="AI 可以自动，但必须可控"
          description="牧机把客户问题、知识匹配、回复建议、安全检查和人工审核放进同一条链路，避免 AI 失控地替团队发声。"
        />
        <div className="ai-flow" aria-label="AI 自动回复链路">
          {aiFlow.map((step, index) => (
            <div className="ai-node" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section scenario-section">
        <SectionHeader
          eyebrow="PRIVATE DOMAIN SCENARIOS"
          title="覆盖客服、销售、社群和内容运营"
          description="每个场景都从团队真实工作出发：减少重复沟通，发现高价值客户，保持触达节奏。"
        />
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <article key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section security" id="安全保障">
        <div>
          <span className="eyebrow">TRUST & CONTROL</span>
          <h2>客户沟通不能交给黑盒，AI 必须有边界</h2>
          <p>
            牧机强调可审核、可追踪、可接管。团队可以先从建议模式开始，再逐步开放自动化范围。
          </p>
        </div>
        <ul>
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section onboarding">
        <SectionHeader
          eyebrow="PILOT PLAN"
          title="从一个可控试点开始"
          description="客户只需要先选定一个高频场景，用真实问题和资料跑通效果，再决定是否扩大到更多账号和团队。"
        />
        <ol>
          {adoptionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta" id="contact">
        <span className="eyebrow">READY FOR PILOT</span>
        <h2>用一套可控系统，把微信私域运营从人工重复劳动中释放出来</h2>
        <p>预约演示时建议准备一个典型微信号、三类常见客户问题和一组私域运营目标，我们会按真实流程演示。</p>
        <a className="button primary" href="mailto:contact@muji-ai.local">
          联系牧机团队
        </a>
      </section>

      <footer className="site-footer">
        <strong>Muji AI</strong>
        <span>微信私域 · AI 分身 · 客户运营</span>
      </footer>
    </main>
  );
}

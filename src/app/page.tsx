const navItems = ["系统架构", "核心能力", "控制台", "安全部署"];

const systemParts = [
  {
    name: "主机端",
    project: "muji-wechat-bridge",
    summary: "连接微信运行环境，采集消息事实，接收服务端任务并执行朋友圈、跟评和状态同步。",
    facts: ["消息采集", "任务执行", "二维码与截图", "静默时段"],
  },
  {
    name: "服务端",
    project: "muji-server",
    summary: "多号主 SaaS 后端，承载实时网关、AI 处理、任务队列、知识库和画像分析。",
    facts: ["多租户隔离", "Redis Streams", "Chat Worker", "Job Worker"],
  },
  {
    name: "管理控制台",
    project: "muji-dashboard",
    summary: "运营人员配置数字分身、联系人、用户画像、私域任务、朋友圈和运行日志。",
    facts: ["数字分身", "联系人运营", "群聊情报", "运行日志"],
  },
];

const workflow = [
  {
    label: "数据接入",
    text: "微信消息、联系人、朋友圈、群聊事件进入系统，形成可追踪的消息事实链。",
  },
  {
    label: "AI 理解",
    text: "清洗、画像、Persona、知识库、媒体理解共同决定回复和运营建议。",
  },
  {
    label: "自动执行",
    text: "自动回复、定时朋友圈、跟评和任务跟进通过 Gateway 下发到远端设备。",
  },
  {
    label: "运营管理",
    text: "审核、安全规则、运行日志、任务状态和用量统计让 AI 可控、可审计。",
  },
  {
    label: "业务洞察",
    text: "客户画像、群聊情报、互动趋势和转化漏斗帮助团队发现优先级。",
  },
];

const dashboardViews = [
  ["首页看板", "系统状态、今日数据、待处理事项和互动趋势集中呈现。"],
  ["数字分身", "管理人格画像、知识文件、审核工作台和安全规则。"],
  ["联系人画像", "沉淀客户标签、聊天统计、画像详情与沟通建议。"],
  ["私域任务", "用任务看板、规则和管道视图推动销售与运营跟进。"],
  ["定时朋友圈", "规划内容、设置发布时间，并由主机端按任务执行。"],
  ["运行日志", "跟踪 Gateway、后台任务、健康检查和最近活动。"],
];

const aiFlow = [
  "消息进入",
  "规则判断",
  "知识库检索",
  "媒体理解",
  "LLM 生成",
  "安全审核",
  "Gateway 下发",
  "结果记录",
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

const securityItems = [
  "多号主隔离",
  "元数据库 + 号主独立数据库",
  "JWT 认证",
  "日志审计",
  "Redis Streams 任务队列",
  "Gateway 状态监控",
  "失败重试与 dead letter",
  "私有化部署支持",
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
            连接主机端、服务端与管理控制台，覆盖消息接入、客户画像、自动回复、朋友圈运营、群聊情报与任务跟进。
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <a className="button primary" href="#contact">
              预约演示
            </a>
            <a className="button secondary" href="#系统架构">
              查看系统能力
            </a>
          </div>
        </div>

        <div className="system-board" aria-label="牧机三端系统链路示意">
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

      <section className="section architecture" id="系统架构">
        <SectionHeader
          eyebrow="THREE-END ARCHITECTURE"
          title="不是单点机器人，而是一套可交付的私域运行系统"
          description="牧机把微信运行环境、实时网关、AI 处理、任务队列和运营控制台拆成清晰边界，降低黑盒风险。"
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
          description="从数据进入到业务洞察，每一步都有系统模块承接，并保留审核、日志和失败恢复。"
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
          description="首版官网先使用控制台结构化示意，后续替换为演示账号的脱敏真实截图。"
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
          title="自动回复链路清晰可审计"
          description="AI 回复不是黑盒生成，规则、知识库、媒体理解、安全审核和结果记录共同决定最终动作。"
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
          description="每个场景都对应现有系统模块，避免把 AI 包装成无法落地的全自动承诺。"
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

      <section className="section security" id="安全部署">
        <div>
          <span className="eyebrow">SECURITY & DELIVERY</span>
          <h2>企业客户关心的边界，放在官网前台说清楚</h2>
          <p>
            系统支持多号主隔离、私有化部署、任务重试和运行日志，让销售、交付和技术评估人员能快速判断部署可行性。
          </p>
        </div>
        <ul>
          {securityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section onboarding">
        <SectionHeader
          eyebrow="GET STARTED"
          title="四步接入牧机私域 AI 系统"
          description="首版官网面向客户和交付人员说明路径，详细命令放到后续部署文档页。"
        />
        <ol>
          <li>部署主机端，连接微信运行环境。</li>
          <li>配置服务端，启用 API、Gateway、Worker 和任务队列。</li>
          <li>登录管理控制台，完成号主、规则和知识库配置。</li>
          <li>导入数据并启动数字分身，逐步打开自动回复和运营任务。</li>
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
        <span>主机端 · 服务端 · 管理控制台</span>
      </footer>
    </main>
  );
}

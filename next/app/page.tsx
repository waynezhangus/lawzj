import Image from 'next/image';

export default function HomePage() {
  const practiceAreas = [
    '证券与资本市场',
    '私募基金与股权投资',
    '并购重组与融资担保',
    '诉讼与仲裁',
    '破产清算与重整',
    '企业风险管理',
    '知识产权',
    '劳动人事',
    '涉外法律事务',
    '婚姻家事与财富传承',
  ];

  const strengths = [
    {
      title: '一体化服务模式',
      description: '创新融合“法律 + 财务 + 税务”服务能力，为客户提供更具商业价值的综合解决方案。',
    },
    {
      title: '全国资源协同',
      description: '依托总所及全国分支网络，支持跨区域案件与项目协同办理。',
    },
    {
      title: '专业团队配置',
      description: '律师团队具备注册会计师、证券、基金等多重专业背景，兼顾法律与商业视角。',
    },
    {
      title: '实战经验丰富',
      description: '曾承接大型企业、上市公司诉讼业务及破产咨询项目，具备复杂事务处理能力。',
    },
  ];

  const qualifications = [
    '全国优秀律师事务所',
    '省一级破产管理人资质',
    '专利代理资质',
    '商标代理资质',
    '大连市破产协会会员单位',
    '破产案件管理人资质',
  ];

  const capabilities = [
    '不良资产处置与尽职调查',
    '企业合规与风险控制',
    '重大商事诉讼与仲裁',
    '资产重组与破产管理',
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-wide">广东卓建（大连）律师事务所</div>
            <div className="text-sm text-slate-500">GUANGDONG ZHUOJIAN (DALIAN) LAW FIRM</div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">
              关于我们
            </a>
            <a href="#practice" className="transition hover:text-slate-900">
              业务领域
            </a>
            <a href="#strengths" className="transition hover:text-slate-900">
              核心优势
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              联系我们
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              广东卓建（大连）律师事务所
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              法律 × 财务 × 税务
              <br />
              一体化专业服务机构
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              依托全国化律师网络与本地化服务能力，为企业与个人提供高效、专业的一站式法律解决方案。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                立即咨询
              </a>
              <a
                href="#about"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                了解更多
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <div className="text-3xl font-bold text-slate-950">2007</div>
                <div className="mt-1 text-sm text-slate-600">总所成立时间</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-950">425+</div>
                <div className="mt-1 text-sm text-slate-600">总所执业律师</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-950">25</div>
                <div className="mt-1 text-sm text-slate-600">全国及海外分支机构</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-950">400㎡+</div>
                <div className="mt-1 text-sm text-slate-600">大连分所办公面积</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">ABOUT US</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              依托全国布局，深耕本地服务
            </h2>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-6 text-base leading-8 text-slate-600">
                <p>
                  广东卓建（大连）律师事务所系广东卓建律师事务所分支机构，依托总所全国布局与专业资源，构建本地化高水平法律服务团队。
                </p>
                <p>
                  广东卓建律师事务所成立于2007年，总部位于深圳CBD，现已在全国及海外设立多家分支机构，持续推进国际化发展，并已取得省一级破产管理人、专利代理、商标代理等重要资质。
                </p>
                <p>
                  大连分所坚持“不求最大，但求最精”的发展理念，突出“法律 + 财务 +
                  税务”一体化服务模式，为客户提供专业、勤勉、高效的综合法律服务。
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">服务承诺</h3>
                <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  <li>
                    <span className="font-medium text-slate-900">仁心：</span>
                    对每一位客户心存善意
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">热心：</span>
                    为每一位客户热忱服务
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">匠心：</span>
                    把每一个案件办成精品
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">PRACTICE AREAS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              核心业务领域
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              覆盖企业经营全周期与个人法律需求，提供诉讼、仲裁、常年法律顾问及专项法律服务。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map(item => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section id="strengths" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">WHY CHOOSE US</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              核心优势
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {strengths.map(item => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                QUALIFICATIONS
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                专业实力与资质
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                多项权威资质与行业认可，为客户提供稳定、可靠、专业的法律服务保障。
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {qualifications.map(item => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
              REPRESENTATIVE CAPABILITIES
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              代表能力
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              聚焦企业关键法律问题，提供可执行、可落地的解决方案。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(item => (
              <div key={item} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-400">CONTACT</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              获取专业法律支持
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              我们将为您提供定制化、高效率的法律解决方案。
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-slate-300">
                <p>
                  <span className="font-medium text-white">地址：</span>
                  辽宁省大连市甘井子区火炬路32号创业大厦A座502室
                </p>
                <p className="mt-3">
                  <span className="font-medium text-white">说明：</span>
                  此处可补充电话、邮箱、在线咨询方式或表单入口。
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  立即咨询
                </a>
                <a
                  href="#"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  在线留言
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 lg:px-8">
          © {new Date().getFullYear()} 广东卓建（大连）律师事务所
        </div>
      </footer>
    </main>
  );
}

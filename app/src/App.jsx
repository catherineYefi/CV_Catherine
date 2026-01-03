import "./App.css";

const CONTACTS = [
  { label: "Telegram", value: "@catherine0077", href: "https://t.me/catherine0077" },
  { label: "Email", value: "viazemsk@list.ru", href: "mailto:viazemsk@list.ru" },
  { label: "Локация", value: "Сочи · готова к релокации" },
];

const TAGS = [
  "Platform & Internal Products",
  "AI / ML · Decision Intelligence",
  "EdTech · Fintech · GovTech",
];

// Содержание ниже собрано из твоего “весь опыт из Gamma” :contentReference[oaicite:0]{index=0}
const EXPERIENCE = [
  {
    role: "Chief Product Officer / Chief Delivery Officer",
    company: "Экосистема продуктов Михаила Дашкиева",
    period: "08.2023 — н.в. (2 года 6 месяцев)",
    subtitle: "Мастер-группа | ScaleUP | Фокус | Путь Домой | Нечто Ultima",
    about:
      "Образовательные и консалтинговые программы для предпринимателей и управленческих команд. Единая продуктовая экосистема с общим управлением стратегией, экономикой и delivery.",
    bullets: [
      "Полная ответственность за продуктовую стратегию, бюджет, P&L и delivery экосистемы.",
      "Проектирование продуктовой архитектуры: CJM, роли, сущности, правила, форматы, roadmap.",
      "Unit-экономика, pricing, LTV, ROI/ROMI.",
      "Запуск, масштабирование и пересборка продуктов в процессе эксплуатации.",
      "Управление delivery-командой: трекеры, PM, подрядчики.",
      "Синхронизация бизнеса, продукта, контента, технологий и операционных процессов.",
    ],
    cases: [
      {
        title: 'Продукт "Нечто Ultima" (2025)',
        bullets: [
          "Инициировала и провела полный редизайн core-продукта.",
          "Организовала запуск 8 сезона фактически с нуля (упаковка, логика продукта, процессы).",
          "Спроектировала 9 сезон как новый 6-месячный продукт: CJM, архитектура, роли/сущности, правила, roadmap, ценовая политика.",
          "Рассчитала unit-экономику, LTV, ROI/ROMI. Разработала Python-симуляторы (LTV/unit/ROI).",
        ],
        result: "8 сезон: 20 млн ₽ выручки за 3 недели. 9 сезон: 1 млн ₽ предоплат за 1 неделю без запуска и без ОП, общий объём контрактов — 10 млн ₽.",
      },
      {
        title: 'Госпроект "Путь Домой" (2025)',
        bullets: [
          "За 30 дней разработала и запустила полный образовательный курс: концепция, архитектура, контент, платформа.",
          "Спроектировала инфраструктуру обучения с нуля. Организовала съёмки с 7 экспертами в 4 странах.",
          "Участвовала в методологических проработках с представителями Госдумы РФ.",
        ],
        result: "Первые 30 участников успешно завершили программу. Проект получил государственную поддержку.",
      },
      {
        title: "ScaleUP (2023–2024)",
        bullets: [
          "Перевела мастер-группу в масштабируемый продукт.",
          "Управляла производством контента и техническими процессами (уроки, эфиры, воркшопы).",
        ],
        result: "4 потока, 60 клиентов. Средний чек: 1,1 млн ₽. 99% участников завершили программу.",
      },
      {
        title: "Мастер-группа с Михаилом Дашкиевым (2023–2024)",
        bullets: [
          "Спроектировала и запустила премиальный продукт с Михаилом Дашкиевым и Андреем Калашниковым.",
          "Формат: эфиры каждые 2 недели + очные встречи (Москва, Дубай, Сочи).",
        ],
        result: "75 млн ₽ за 3 недели продаж. Средний чек: 1,1 млн ₽. 96% дошли до конца.",
      },
    ],
  },
  {
    role: "CEO (Руководитель офлайн филиала)",
    company: "Kodland (Сочи)",
    period: "08.2018 — 05.2024 (5 лет 10 месяцев)",
    about:
      "Запуск и развитие регионального филиала EdTech компании (онлайн-школа программирования).",
    bullets: [
      "Запустила первый филиал с нуля: концепция, помещение, команда, программы обучения.",
      "Построила автономную систему бизнес-процессов.",
      "Отработала модель, которая далее масштабировалась на другие города и онлайн.",
    ],
    result:
      "3500+ учеников, ежемесячная прибыль ~300 тыс ₽, создана основа для экспансии по РФ и международным рынкам.",
  },
  {
    role: "Руководитель отдела продаж",
    company: "Kodland (Москва)",
    period: "08.2019 — 04.2022 (2 года 9 месяцев)",
    about: "Период масштабирования из офлайн в онлайн.",
    bullets: [
      "Создала отдел продаж с нуля: от 1 до 200+ менеджеров (в пике 230).",
      "Запустила онлайн-продажи, настроила аналитику, писала SQL-запросы.",
      "Внедрила CRM, телефонию.",
      "Участвовала в привлечении 2 раундов инвестиций на $10.5M.",
    ],
    result:
      "Рост выручки с 1 млн до 30 млн ₽/мес, масштаб до 25,000 учеников по миру.",
  },
  {
    role: "Chief Product Officer / Chief Business Development Officer",
    company: "UnderPix School (США)",
    period: "05.2022 — 08.2023 (1 год 4 месяца)",
    about: "Международная школа графического дизайна (0→1).",
    bullets: [
      "За 2 месяца собрала школу с нуля: команда (преподы, дизайн, аккаунты, методологи, ОП).",
      "Настроила IT-инфраструктуру: AmoCRM, телефония, GetCourse.",
      "Адаптировала юридические документы для международного рынка.",
    ],
    result: "Самоокупаемость за 3,5 месяца. 150+ активных студентов за 9 месяцев.",
  },
];

const FINISHED_CASES = [
  {
    title: "IQIDO Predictive Analytics — ML Product Lead (2025)",
    tags: ["B2B", "Decision Intelligence", "ML", "Predictive Modeling"],
    bullets: [
      "Product framing: какие управленческие решения и прогнозы дают реальную ценность.",
      "Data-архитектура: источники → нормализация → аналитика → ML → интерфейсы решений.",
      "Python-симуляторы/калькуляторы (LTV, ROI, сценарии) как часть продукта и presale.",
      "Продуктовый и инвестиционный питч для крупного корпоративного клиента (NDA).",
    ],
    result: "Сформирован MVP. Подтверждена бизнес-ценность ML. Получен корпоративный интерес и коммерческий оффер (NDA).",
  },
  {
    title: "VisaTier — Product Owner / CPO (2025)",
    tags: ["Fintech", "LegalTech", "Immigration"],
    bullets: [
      "Продуктовая линейка (Self Sponsorship Ireland, Golden Visa EU/UAE).",
      "CJM, диагностика, pricing, unit-экономика, партнёрская модель.",
      "ROI-симулятор (Python) + AI-подсказки для принятия решений клиентом.",
      "AI-голосовой ассистент для sales: VAPI + ElevenLabs + n8n (квалификация/консультации).",
    ],
    result: "Снижена ручная операционная нагрузка на ~60%. Улучшена квалификация и масштабируемость presale-воронки.",
  },
  {
    title: "ГК НВМ — UX/UI Product Lead (2025)",
    tags: ["PropTech", "B2B"],
    bullets: [
      "Пересборка продуктовой модели сайта/платформы.",
      "UX-диагностика, перепроектирование CJM, структуры и интерфейсов.",
      "Привязка изменений к воронке продаж и бизнес-метрикам.",
    ],
    result: "Время на сайте x2.5, конверсия в заявку +60%, длина сделки -38%.",
  },
  {
    title: "ABC (Ай-Ви-Системз) — VR/XR/MR Product Lead (2024)",
    tags: ["B2G", "B2B", "DeepTech"],
    bullets: [
      "Пересборка CJM и roadmap линейки VR/XR/MR.",
      "Оптимизация продуктовой и операционной модели исполнения контрактов.",
      "Снятие узких мест между продуктом, разработкой и контрактными обязательствами.",
    ],
    result: "Срок исполнения контрактов сокращён с 2 лет до 11 месяцев; delivery стал предсказуемее.",
  },
];

const EDUCATION = [
  "MBA Project Management — Swiss International Institute Lausanne (2021)",
  "Магистр экономики — Сочинский государственный университет (2015)",
  "Преподаватель английского языка — ИНТехнО (2018)",
];

const CERTS = [
  "Большой курс по регулярному менеджменту (2023)",
  "Большой курс Методологии (2023)",
  "Graphic Designer сертификация (2022)",
  "Инженер по тестированию — Яндекс Практикум (2021)",
];

const  КЛЮЧЕВЫЕ МЕТРИКИ = [
  { value: "$40M+", label: "совокупной выручки созданных продуктов" },
  { value: "400+", label: "человек в управлении (кросс-функц. команды)" },
  { value: "25,000+", label: "обученных студентов" },
  { value: "2", label: "раунда инвестиций суммарно $10.5M" },
  { value: "30 дней", label: "средний срок сборки MVP" },
  { value: "6", label: "международных рынков (RU/US/UAE/UK/EU/MENA)" },
];


function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Section({ title, children }) {
  return (
    <section className="card">
      <h2 className="h2">{title}</h2>
      {children}
    </section>
  );
}

function AccordionItem({ title, meta, children, defaultOpen = false }) {
  return (
    <details className="acc" open={defaultOpen}>
      <summary className="acc__summary">
        <div className="acc__left">
          <div className="acc__title">{title}</div>
          {meta ? <div className="muted acc__meta">{meta}</div> : null}
        </div>
        <span className="acc__chev" aria-hidden="true">▾</span>
      </summary>
      <div className="acc__content">{children}</div>
    </details>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="avatar" src="./photo.jpg" alt="Екатерина Ефимчук" />
        <div className="header__content">
          <h1 className="h1">Ефимчук Екатерина Александровна</h1>
          <div className="subtitle">CPO / Head of Product</div>

          <div className="chips">
            {TAGS.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="contacts">
            {CONTACTS.map((c) => (
              <div key={c.label} className="contact">
                <span className="muted">{c.label}:</span>{" "}
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="grid">
        <Section title="Профессиональный профиль">
          <p className="p">
            Продуктовый руководитель с 14+ годами опыта, из них 7+ лет — в ролях CPO / Head of Product.
            Создаю и масштабирую сложные продуктовые системы: платформенные продукты, AI и data-driven решения,
            образовательные и B2B-сервисы. Проектирую end-to-end: от product framing и CJM до data-архитектуры,
            ML-моделей, API-интеграций, устойчивой выручки и управляемого delivery.
          </p>
        </Section>

        <Section title="Highlights">
          <div className="hiGrid">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="hiCard">
                <div className="hiValue">{h.value}</div>
                <div className="hiLabel muted">{h.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Опыт работы">
          <div className="stack">
            {EXPERIENCE.map((job, idx) => (
              <AccordionItem
                key={`${job.company}-${job.role}`}
                title={`${job.role} — ${job.company}`}
                meta={`${job.period}${job.subtitle ? " · " + job.subtitle : ""}`}
                defaultOpen={idx === 0}
              >
                {job.about ? <p className="p muted">{job.about}</p> : null}

                {job.bullets?.length ? (
                  <>
                    <div className="label">Зона ответственности / вклад</div>
                    <ul className="ul">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {job.cases?.length ? (
                  <>
                    <div className="label">Ключевые продукты / инициативы</div>
                    <div className="stack">
                      {job.cases.map((c) => (
                        <AccordionItem key={c.title} title={c.title} meta={c.result ? "Результат внутри" : ""}>
                          <ul className="ul">
                            {c.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                          {c.result ? <div className="result"><b>Результат:</b> {c.result}</div> : null}
                        </AccordionItem>
                      ))}
                    </div>
                  </>
                ) : null}

                {job.result ? <div className="result"><b>Результат:</b> {job.result}</div> : null}
              </AccordionItem>
            ))}
          </div>
        </Section>

        <Section title="Завершённые кейсы">
          <div className="stack">
            {FINISHED_CASES.map((c) => (
              <AccordionItem
                key={c.title}
                title={c.title}
                meta={c.tags?.length ? c.tags.join(" · ") : ""}
              >
                <ul className="ul">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {c.result ? <div className="result"><b>Результат:</b> {c.result}</div> : null}
              </AccordionItem>
            ))}
          </div>
        </Section>

        <Section title="Образование">
          <ul className="ul">
            {EDUCATION.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Section>

        <Section title="Сертификации">
          <ul className="ul">
            {CERTS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <footer className="footer muted">
          Сделано на React · GitHub Pages
        </footer>
      </main>
    </div>
  );
}

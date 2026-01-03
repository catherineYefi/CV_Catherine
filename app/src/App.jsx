import "./App.css";
import photo from "./assets/photo.jpg";

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

const CAREER_METRICS = [
  { value: "$40M+", label: "совокупной выручки созданных продуктов" },
  { value: "400+", label: "сотрудников под управлением" },
  { value: "25,000+", label: "обученных студентов" },
  { value: "2", label: "раунда инвестиций суммарно $10.5M" },
  { value: "30 дней", label: "средний срок создания MVP" },
  { value: "6", label: "международных рынков (RU/US/UAE/UK/EU/MENA)" },
  { value: "1", label: "госпроект федерального уровня" },
];

const CORE_STACK = [
  {
    k: "Создание продуктов",
    v: "Product Strategy, CJM, MVP Development, тестирование гипотез, P&L management, 0→1 launches, международная локализация, AI-enhanced products",
  },
  {
    k: "Управление",
    v: "Построение команд до 400+ человек, международная экспансия, Agile / Scrum / Kanban",
  },
  {
    k: "Программирование",
    v: "Python (middle), JavaScript, аналитика данных, HTML/CSS",
  },
  {
    k: "Инструменты",
    v: "Figma, CRM-системы, SQL, LMS, AI-интеграции",
  },
  {
    k: "Языки",
    v: "Русский (родной), Английский (свободно)",
  },
];

const PROFILE =
  "Продуктовый руководитель с 14+ годами опыта, из них 7+ лет — в ролях CPO / Head of Product. Создаю и масштабирую сложные продуктовые системы: платформенные продукты, AI и data-driven решения, образовательные и B2B-сервисы. Проектирую end-to-end: от product framing и CJM до data-архитектуры, ML-моделей, API-интеграций, устойчивой выручки, AI-автоматизации и управляемого delivery.";

// Основной опыт (из твоего полного текста)
const EXPERIENCE = [
  {
    role: "Chief Product Officer / Chief Delivery Officer",
    company: "Экосистема продуктов Михаила Дашкиева",
    period: "08.2023 — н.в. (2 года 6 месяцев)",
    subtitle: "Мастер-группа | ScaleUP | Фокус | Путь Домой | Нечто Ultima",
    about:
      "Образовательные и консалтинговые программы для предпринимателей и управленческих команд. От премиальных мастер-групп до флагманской 6-месячной продуктовой системы Ultima и федеральных программ с государственным участием. Единая продуктовая экосистема с общим управлением стратегией, экономикой и delivery.",
    bullets: [
      "Полная ответственность за продуктовую стратегию, бюджет, P&L и delivery экосистемы.",
      "Проектирование продуктовой архитектуры: CJM, роли, сущности, правила, форматы, roadmap.",
      "Unit-экономика, pricing, LTV, ROI / ROMI.",
      "Запуск, масштабирование и пересборка продуктов в процессе эксплуатации.",
      "Управление delivery-командой: трекеры, PM, подрядчики.",
      "Синхронизация бизнеса, продукта, контента, технологий и операционных процессов.",
    ],
    initiatives: [
      "Получила статус резидента «Сколково» для проектов.",
      "Спроектировала архитектуру международной платформы с ML-интеграцией (Figma → продуктовая постановка).",
      "Участвовала в формировании IT-функции и процессов информационной безопасности на уровне продукта.",
      "Оптимизировала ИТ-инфраструктуру с внедрением системы корпоративных прав доступа.",
      "Разработала ИИ-симуляторы ROI и калькулятор LTV (Python) для оценки бизнес-метрик.",
    ],
    cases: [
      {
        title: "Нечто Ultima (2025)",
        subtitle: "6-месячная флагманская продуктовая система роста предпринимателей",
        bullets: [
          "Инициировала и провела полный редизайн core-продукта.",
          "Организовала запуск 8 сезона фактически с нуля (упаковка, логика продукта, процессы).",
          "Запустила глубокую продуктовую пересборку прямо в ходе сезона.",
          "Спроектировала 9 сезон как новый 6-месячный продукт: CJM, архитектура, роли/сущности, правила, roadmap, ценовая политика.",
          "Рассчитала unit-экономику, LTV, ROI/ROMI.",
          "Разработала Python-симуляторы (LTV/unit/ROI) для управленческих решений.",
          "Управляла delivery: 7 трекеров (предприниматели 1B+), 2 PM, подрядчики.",
        ],
        result:
          "8 сезон: 20 млн ₽ выручки за 3 недели (15.08–10.09.2025). 9 сезон: 1 млн ₽ предоплат за 1 неделю без запуска и без ОП; общий объём контрактов — 10 млн ₽.",
      },
      {
        title: "Госпроект «Путь Домой» (2025)",
        subtitle: "Федеральная программа социально-экономической адаптации соотечественников",
        bullets: [
          "За 30 дней разработала и запустила полный образовательный курс: концепция, архитектура, контент, платформа.",
          "Спроектировала архитектуру процесса обучения и инфраструктуру с нуля.",
          "Организовала съёмки с 7 экспертами в 4 странах.",
          "Участвовала в методологических проработках с представителями Госдумы РФ.",
        ],
        result: "Первые 30 участников успешно завершили программу; проект получил государственную поддержку.",
      },
      {
        title: "ScaleUP (2023–2024)",
        subtitle: "16-недельная консалтинговая программа",
        bullets: [
          "Перевела мастер-группу в масштабируемый продукт.",
          "Управляла производством контента и техническими процессами.",
          "Записанные уроки, регулярные эфиры, лайв-воркшопы.",
        ],
        result: "4 потока, 60 клиентов. Средний чек: 1,1 млн ₽. 99% участников завершили программу.",
      },
      {
        title: "Мастер-группа с Михаилом Дашкиевым (2023–2024)",
        subtitle: "4,5-месячная премиальная программа",
        bullets: [
          "Спроектировала и запустила премиальный продукт с Михаилом Дашкиевым и Андреем Калашниковым.",
          "Формат: эфиры каждые 2 недели + очные встречи (Москва, Дубай, Сочи).",
        ],
        result: "75 млн ₽ за 3 недели продаж. Средний чек: 1,1 млн ₽. 96% участников дошли до конца.",
      },
    ],
  },

  {
    role: "CEO (Руководитель офлайн филиала)",
    company: "Kodland (Сочи)",
    period: "08.2018 — 05.2024 (5 лет 10 месяцев)",
    about: "Запуск и развитие регионального филиала EdTech компании (онлайн-школа программирования).",
    bullets: [
      "Запустила первый филиал с нуля: концепция, помещение, команда, программы обучения.",
      "Отработала модель, которая позже масштабировалась на другие города и онлайн.",
      "Построила автономную систему бизнес-процессов.",
    ],
    result: "3500+ учеников, ежемесячная прибыль ~300 тыс ₽, создана основа для экспансии по РФ и международным рынкам.",
  },

  {
    role: "Руководитель отдела продаж",
    company: "Kodland (Москва)",
    period: "08.2019 — 04.2022 (2 года 9 месяцев)",
    about: "Период масштабирования из офлайн в онлайн.",
    bullets: [
      "Создала отдел продаж с нуля: от 1 до 200+ менеджеров (в пике 230).",
      "Запустила онлайн-продажи, настроила аналитику, писала SQL-запросы.",
      "Внедрила CRM и телефонию.",
      "Участвовала в привлечении 2 раундов инвестиций на $10.5M.",
    ],
    result: "Рост выручки с 1 млн до 30 млн ₽/мес, масштаб до 25,000 учеников по миру.",
  },

  {
    role: "Chief Product Officer / Chief Business Development Officer",
    company: "UnderPix School (США)",
    period: "05.2022 — 08.2023 (1 год 4 месяца)",
    about: "Международная школа графического дизайна (0→1).",
    bullets: [
      "За 2 месяца собрала школу с нуля: команда (преподы, дизайнер, аккаунты, техспец, методологи, ОП).",
      "Настроила IT-инфраструктуру: AmoCRM, телефония, GetCourse.",
      "Адаптировала юридические документы для международного рынка.",
    ],
    result: "Самоокупаемость за 3,5 месяца. 150+ активных студентов за 9 месяцев.",
  },
];

// Завершённые кейсы
const FINISHED_CASES = [
  {
    title: "IQIDO Predictive Analytics — AI / ML Product Lead (2025)",
    tags: ["B2B", "Decision Intelligence", "ML", "Predictive Modeling"],
    bullets: [
      "Сформировала product framing: какие управленческие решения и прогнозы создают реальную ценность.",
      "Спроектировала data-архитектуру: источники → нормализация → аналитический слой → ML → интерфейсы решений.",
      "Отвечала за product-валидацию ML-моделей для прогнозирования поведения и сценариев роста.",
      "Совместно с разработкой прорабатывала архитектурные решения, API и логику интеграций.",
      "Разработала Python-симуляторы (LTV, ROI, сценарное моделирование) как часть продукта и presale-инструмента.",
      "Подготовила продуктовый и инвестиционный питч для крупного корпоративного клиента (NDA).",
    ],
    result: "Сформирован MVP. Подтверждена бизнес-ценность ML. Получен корпоративный интерес и коммерческий оффер (NDA).",
  },
  {
    title: "VisaTier — Product Owner / CPO (2025)",
    tags: ["Fintech", "LegalTech", "Immigration"],
    bullets: [
      "Спроектировала продуктовую линейку (Self Sponsorship Ireland, Golden Visa EU/UAE).",
      "CJM, диагностика, pricing, unit-экономика, партнёрская модель.",
      "ROI-симулятор (Python) + AI-подсказки для поддержки принятия решений клиентом.",
      "AI-голосовой ассистент для sales: VAPI + ElevenLabs + n8n (входящие/исходящие, квалификация, консультации).",
      "Автоматизировала часть presale-воронки и снизила нагрузку на менеджеров.",
    ],
    result: "Сокращение ручной операционной нагрузки ~на 60%, улучшение квалификации и масштабируемости presale.",
  },
  {
    title: "ГК НВМ — UX/UI Product Lead (2025)",
    tags: ["PropTech", "B2B"],
    bullets: [
      "Пересборка продуктовой модели сайта/платформы.",
      "UX-диагностика, перепроектирование CJM, структуры и интерфейсов.",
      "Привязка изменений к воронке продаж и бизнес-метрикам.",
    ],
    result: "Время на сайте ×2.5, конверсия в заявку +60%, длина сделки −38%.",
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

// Дополнительный опыт (2011–2018)
const EARLY_EXPERIENCE = [
  {
    role: "International Operations / Business Development Manager",
    company: "SmartScrap Limited",
    period: "01.2015 — 08.2017 (2 года 8 месяцев)",
    bullets: [
      "International Operations / Business Development.",
      "Увеличила прибыль компании в 2,5 раза.",
      "Клиенты: ArcelorMittal, Tata Steel, Rockwool.",
    ],
  },
  {
    role: "Менеджер по работе с клиентами",
    company: "АН «Новостройки Сочи»",
    period: "03.2016 — 05.2018 (2 года 3 месяца)",
    bullets: ["24 закрытые сделки.", "Комиссия: 300,000 — 2,000,000 ₽."],
  },
  {
    role: "Ведущий специалист / процесс-менеджер",
    company: 'ООО "Лидер"',
    period: "01.2013 — 12.2014 (2 года)",
    bullets: ["Рост команды с 4 до 20 сотрудников.", "Автоматизация документооборота."],
  },
  {
    role: "Специалист по развитию B2C / B2B2C",
    company: "Сбербанк России",
    period: "03.2011 — 12.2013 (2 года 10 месяцев)",
    bullets: ["170% выполнения месячного плана.", "Продажи банковских продуктов B2B/B2C."],
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

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Section({ title, hint, children }) {
  return (
    <section className="card">
      <div className="sectionHead">
        <h2 className="h2">{title}</h2>
        {hint ? <div className="muted sectionHint">{hint}</div> : null}
      </div>
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
        <span className="acc__chev" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="acc__content">{children}</div>
    </details>
  );
}

function Bullets({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="ul">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="avatar"
          src={photo}
          alt="Екатерина Ефимчук"
          onError={(e) => {
            // Если фото не подхватилось — показываем нейтральный плейсхолдер
            e.currentTarget.style.display = "none";
          }}
        />

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
          <p className="p">{PROFILE}</p>
        </Section>

        <Section title="Ключевые метрики карьеры">
          <div className="hiGrid">
            {CAREER_METRICS.map((h) => (
              <div key={h.label} className="hiCard hiCard--accent">
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
                    <Bullets items={job.bullets} />
                  </>
                ) : null}

                {job.initiatives?.length ? (
                  <>
                    <div className="label">Стратегические инициативы</div>
                    <Bullets items={job.initiatives} />
                  </>
                ) : null}

                {job.cases?.length ? (
                  <>
                    <div className="label">Ключевые продукты / инициативы</div>
                    <div className="stack">
                      {job.cases.map((c, cIdx) => (
                        <AccordionItem
                          key={c.title}
                          title={c.title}
                          meta={c.subtitle ? c.subtitle : c.result ? "Результат внутри" : ""}
                          defaultOpen={cIdx === 0 && idx === 0}
                        >
                          <Bullets items={c.bullets} />
                          {c.result ? (
                            <div className="result">
                              <b>Результат:</b> {c.result}
                            </div>
                          ) : null}
                        </AccordionItem>
                      ))}
                    </div>
                  </>
                ) : null}

                {job.result ? (
                  <div className="result">
                    <b>Результат:</b> {job.result}
                  </div>
                ) : null}
              </AccordionItem>
            ))}
          </div>
        </Section>

        <Section title="Завершённые кейсы" hint="Проектные роли / консалтинг / продукт-лидство">
          <div className="stack">
            {FINISHED_CASES.map((c) => (
              <AccordionItem key={c.title} title={c.title} meta={c.tags?.length ? c.tags.join(" · ") : ""}>
                <Bullets items={c.bullets} />
                {c.result ? (
                  <div className="result">
                    <b>Результат:</b> {c.result}
                  </div>
                ) : null}
              </AccordionItem>
            ))}
          </div>
        </Section>

        <Section title="Дополнительный опыт (2011–2018)" hint="Ранний трек — продажи, процессы, международные операции">
          <div className="stack">
            {EARLY_EXPERIENCE.map((j) => (
              <AccordionItem
                key={`${j.company}-${j.role}`}
                title={`${j.role} — ${j.company}`}
                meta={j.period}
              >
                <Bullets items={j.bullets} />
              </AccordionItem>
            ))}
          </div>
        </Section>

        <div className="twoCol">
          <Section title="Core Stack">
            <div className="stackGrid">
             {CORE_STACK.map((s) => (
                <div key={s.k} className="stackCard">
                  <div className="stackKey">{s.k}</div>
                  <div className="stackVal muted">{s.v}</div>
                </div>
            ))}
          </div>
        </Section>

        <Section title="Образование и сертификации">
          <ul className="ul">
            {EDUCATION.map((e) => (
              <li key={e}>{e}</li>
            ))}
            {CERTS.map((c) => (
            <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      </div>

        <footer className="footer muted">Сделано на React · GitHub Pages</footer>
      </main>
    </div>
  );
}

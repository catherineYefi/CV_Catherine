import React, { useEffect, useMemo, useRef, useState } from "react";
import photo from "./assets/photo-cv.jpeg";

/**
 * Принципы:
 * - ТЕКСТ НЕ ВЫДУМЫВАЕМ: используем финальный, согласованный.
 * - UX/UI: premium, читаемо, аккуратные micro-interactions.
 * - Без тяжелых библиотек.
 * - GitHub Pages: Vite base path настроен в vite.config.js
 */

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Fade-in on scroll (200ms, translateY 12px) */
function useRevealOnScroll() {
  const refs = useRef([]);
  useEffect(() => {
    const els = refs.current.filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const register = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return register;
}

function Section({ id, title, subtitle, children, right }) {
  const register = useRevealOnScroll();
  return (
    <section id={id} className="section reveal" ref={register}>
      <div className="section__head">
        <div>
          <h2 className="section__title">{title}</h2>
          {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
        </div>
        {right ? <div className="section__right">{right}</div> : null}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}

function Badge({ children, tone = "default" }) {
  return <span className={cx("badge", `badge--${tone}`)}>{children}</span>;
}

function Icon({ name }) {
  // минимальные inline-иконки без зависимостей
  const common = { className: "icon", width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "tg":
      return (
        <svg {...common}>
          <path
            d="M21 5 3.8 11.9c-.8.3-.8 1.4.1 1.7l4.1 1.4 1.6 4.8c.3.9 1.5 1 2 .2l2.4-3.5 4.8 3.5c.7.5 1.7.1 1.9-.8L23 6.7c.2-1-.8-1.9-2-1.7Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path
            d="M10 13a5 5 0 0 0 7.1 0l1.4-1.4a5 5 0 0 0 0-7.1 5 5 0 0 0-7.1 0L10 5.9"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M14 11a5 5 0 0 0-7.1 0L5.5 12.4a5 5 0 0 0 0 7.1 5 5 0 0 0 7.1 0l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "sun":
      return (
        <svg {...common} width={16} height={16}>
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M12.5 3.5l-1.4 1.4M4.9 11.1l-1.4 1.4M12.5 12.5l-1.4-1.4M4.9 4.9L3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common} width={16} height={16}>
          <path d="M9 2a7 7 0 1 0 5 12 9 9 0 0 1-5-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common} width={16} height={16}>
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common} width={16} height={16}>
          <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...common} width={18} height={18}>
          <path d="M2 7l10-4 10 4-10 4-10-4z" fill="currentColor" opacity="0.2" />
          <path d="M2 7l10-4 10 4-10 4-10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 10v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common} width={18} height={18}>
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M7 9h10M7 13h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.2" />
          <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M16 14v2l1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function MetricCard({ label, value, hint }) {
  return (
    <div className="card hiCard">
      <div className="metric__value">{value}</div>
      <div className="metric__label">{label}</div>
      {hint ? <div className="metric__hint">{hint}</div> : null}
    </div>
  );
}

function AccordionItem({
  id,
  title,
  meta,
  summary,
  tags,
  children,
  open,
  onToggle,
}) {
  return (
    <div className={cx("acc", open && "acc--open")}>
      <button className="acc__btn" onClick={() => onToggle(id)} type="button">
        <div className="acc__left">
          <div className="acc__titleRow">
            <div className="acc__title">{title}</div>
            {meta ? <div className="acc__meta">{meta}</div> : null}
          </div>
          {summary ? <div className="acc__summary">{summary}</div> : null}
          {tags?.length ? (
            <div className="acc__tags">
              {tags.map((t) => (
                <Badge key={t} tone="accent">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
        <div className="acc__icon" aria-hidden="true">
          <Icon name={open ? "minus" : "plus"} />
        </div>
      </button>

      <div className="acc__panel" style={{ height: open ? "auto" : 0 }}>
        <div className="acc__content">{children}</div>
      </div>
    </div>
  );
}

function AccordionGroup({ items, defaultOpenId = null, allowMulti = false, controls = true }) {
  const [openIds, setOpenIds] = useState(() =>
    defaultOpenId ? new Set([defaultOpenId]) : new Set()
  );

  const allIds = useMemo(() => items.map((i) => i.id), [items]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      const has = next.has(id);
      if (!allowMulti) next.clear();
      if (has) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenIds(new Set(allIds));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <div className="accGroup">
      {controls ? (
        <div className="accGroup__controls">
          <button className="btn btn--ghost" type="button" onClick={expandAll}>
            Expand all
          </button>
          <button className="btn btn--ghost" type="button" onClick={collapseAll}>
            Collapse all
          </button>
        </div>
      ) : null}

      <div className="accGroup__list">
        {items.map((it) => (
          <AccordionItem
            key={it.id}
            id={it.id}
            title={it.title}
            meta={it.meta}
            summary={it.summary}
            tags={it.tags}
            open={openIds.has(it.id)}
            onToggle={toggle}
          >
            {it.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function ListBlock({ title, lines }) {
  return (
    <div className="block">
      <div className="block__title">{title}</div>
      <ul className="ul">
        {lines.map((l, idx) => (
          <li key={idx}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / docHeight) * 100;
      setShow(scrollPercent > 30); // Показываем после 30% скролла
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Вернуться наверх"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function CopyableContact({ type, value, href, children }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback: открыть ссылку если копирование не сработало
      window.location.href = href;
    }
  };

  return (
    <a className="chipLink copyable" href={href} onClick={handleClick}>
      {children}
      {copied && <span className="copied-badge">Copied!</span>}
    </a>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "impact", label: "Достижения" },
    { id: "metrics", label: "Метрики" },
    { id: "experience", label: "Опыт" },
    { id: "cases", label: "Кейсы" },
    { id: "stack", label: "Стек" },
    { id: "edu", label: "Образование" },
  ];

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-nav__dropdown">
          {sections.map((section) => (
            <button
              key={section.id}
              className="mobile-nav__item"
              onClick={() => handleClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  // ====== THEME STATE ======
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ====== HERO ======
  const name = "Ефимчук Екатерина Александровна";
  const role = "Chief Product Officer / Head of Product";
  const tagline =
    "Продуктовый руководитель с 14+ годами опыта, из них 7+ лет — в ролях CPO / Head of Product. Создаю и масштабирую сложные продуктовые системы: платформенные продукты, AI- и data-driven решения, образовательные и B2B-сервисы.";
  const contact = {
    telegram: "@catherine0077",
    email: "viazemsk@list.ru",
    site: "https://catherineyefi.github.io/CV_Catherine/",
  };

  // ====== Selected Impact (утвержденный) ======
  const selectedImpact = [
    {
      title: "ULTIMA (экосистема Михаила Дашкиева)",
      lines: [
        "Запуск и пересборка флагманского продукта → 20 млн ₽ выручки за 3 недели (8 сезон)",
        "Запуск новой продуктовой линейки ULTIMA 9.0 → 1 млн ₽ предоплат за 7 дней, 10 млн ₽ контрактов без маркетингового запуска",
      ],
    },
    {
      title: "Kodland (EdTech, офлайн → онлайн)",
      lines: [
        "Масштабирование образовательного бизнеса → рост оборота с ~1 млн ₽ до ~30 млн ₽/мес",
        "Пересборка онлайн-модели продаж → рост конверсии до уровней офлайна (70–90%)",
      ],
    },
    {
      title: "IQIDO Predictive Analytics (B2B, AI / ML)",
      lines: [
        "Продукт предиктивной аналитики для управленческих решений → ML-модели, LTV/ROI-симуляторы",
        "Корпоративный интерес и коммерческий оффер (NDA)",
      ],
    },
    {
      title: "GovTech / EdTech — «Путь Думой»",
      lines: [
        "Запуск федерального образовательного продукта → 30 дней от идеи до запуска",
        "30 участников при поддержке государственных структур",
      ],
    },
    {
      title: "VisaTier (Fintech / LegalTech)",
      lines: [
        "ROI-симулятор и AI-подсказки → рост качества квалификации лидов ~40%",
        "Voice-AI и n8n-автоматизации → снижение операционной нагрузки менеджеров до −60%",
      ],
    },
  ];

  // ====== Career metrics (утвержденные) ======
  const metrics = [
    { value: "$40M+", label: "совокупной выручки созданных продуктов" },
    { value: "400+", label: "сотрудников под управлением" },
    { value: "25,000+", label: "обученных студентов" },
    { value: "30 дней", label: "средний срок создания MVP" },
    { value: "6", label: "международных рынков (Россия, США, ОАЭ, Великобритания, ЕС, МЕНА)" },
    { value: "1", label: "государственный проект федерального уровня" },
  ];

  // ====== EXPERIENCE (строго по хронологии) ======
  // 1) Экосистема Дашкиева — основной аккордеон с под-аккордеонами
  const mdSubProducts = [
    {
      id: "md-ultima",
      title: "Нечто Ultima (2025)",
      meta: "6-месячная флагманская продуктовая система роста предпринимателей",
      summary: "Инициировала редизайн core-продукта. Запуск 8 сезона с нуля. Проектирование Ultima 9.0.",
      tags: ["EdTech", "Product system", "Unit-economics"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Инициировала и провела полный редизайн core-продукта.</li>
              <li>Организовала запуск 8 сезона фактически с нуля (упаковка, логика продукта, процессы).</li>
              <li>Запустила глубокую продуктовую пересборку прямо в ходе сезона.</li>
              <li>Спроектировала 9 сезон как новый 6-месячный продукт: CJM, архитектура, роли/сущности, правила, roadmap, ценовая политика.</li>
              <li>Рассчитала unit-экономику, LTV, ROI/ROMI.</li>
              <li>Разработала Python-симуляторы (LTV/unit/ROI) для управленческих решений.</li>
              <li>Управляла delivery: 7 трекеров (предприниматели 1B+), 2 PM, подрядчики.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>8 сезон: 20 млн ₽ выручки за 3 недели (15.08–10.09.2025).</li>
              <li>9 сезон: 1 млн ₽ предоплат за 1 неделю без запуска и без ОП; общий объём контрактов — 10 млн ₽.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "md-putdomoy",
      title: "Госпроект «Путь Домой» (2025)",
      meta: "Федеральная программа социально-экономической адаптации соотечественников",
      summary: "За 30 дней разработала и запустила полный образовательный курс. Организовала съёмки и методологические проработки.",
      tags: ["GovTech", "EdTech", "Delivery"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>За 30 дней разработала и запустила полный образовательный курс: концепция, архитектура, контент, платформа.</li>
              <li>Спроектировала архитектуру процесса обучения и инфраструктуру с нуля.</li>
              <li>Организовала съёмки с 7 экспертами в 4 странах.</li>
              <li>Участвовала в методологических проработках с представителями Госдумы РФ.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>Первые 30 участников успешно завершили программу; проект получил государственную поддержку.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "md-scaleup",
      title: "ScaleUP (2023–2024)",
      meta: "16-недельная консалтинговая программа",
      summary: "Перевела мастер-группу в масштабируемый продукт. Управляла производством контента и техпроцессами.",
      tags: ["Consulting", "Content ops", "Productization"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Перевела мастер-группу в масштабируемый продукт.</li>
              <li>Управляла производством контента и техническими процессами.</li>
              <li>Записанные уроки, регулярные эфиры, лайв-воркшопы.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>4 потока, 60 клиентов.</li>
              <li>Средний чек: 1,1 млн ₽.</li>
              <li>99% участников завершили программу.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "md-master",
      title: "Мастер-группа с Михаилом Дашкиевым (2023–2024)",
      meta: "4,5-месячная премиальная программа",
      summary: "Спроектировала и запустила премиальный продукт. Формат: эфиры + очные встречи (Москва, Дубай, Сочи).",
      tags: ["Premium", "EdTech", "Go-to-market"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Спроектировала и запустила премиальный продукт совместно с Михаилом Дашкиевым и Андреем Калашниковым.</li>
              <li>Формат: эфиры каждые 2 недели + очные встречи (Москва, Дубай, Сочи).</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>75 млн ₽ за 3 недели продаж.</li>
              <li>Средний чек: 1,1 млн ₽.</li>
              <li>96% участников дошли до конца.</li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  const mdEcosystem = {
    id: "exp-md",
    title: "Chief Product Officer / Chief Delivery Officer — Экосистема продуктов Михаила Дашкиева",
    meta: "08.2023 — н.в. (2 года 6 месяцев) · Мастер-группа · ScaleUP · Фокус · Путь Домой · Нечто Ultima",
    summary:
      "Образовательные и консалтинговые программы для предпринимателей с оборотом от 0 до 1B+. Единая продуктовая экосистема с общим управлением стратегией, экономикой и delivery.",
    tags: ["CPO", "P&L", "Delivery"],
    content: (
      <>
        <div className="kv">
          <div className="kv__k">Зона ответственности / вклад</div>
          <ul className="ul">
            <li>Полная ответственность за продуктовую стратегию, бюджет, P&L и delivery экосистемы.</li>
            <li>Проектирование продуктовой архитектуры: CJM, роли, сущности, правила, форматы, roadmap.</li>
            <li>Unit-экономика, pricing, LTV, ROI / ROMI.</li>
            <li>Запуск, масштабирование и пересборка продуктов в процессе эксплуатации.</li>
            <li>Управление delivery-командой: трекеры, PM, подрядчики.</li>
            <li>Синхронизация бизнеса, продукта, контента, технологий и операционных процессов.</li>
          </ul>
        </div>

        <div className="kv">
          <div className="kv__k">Стратегические инициативы</div>
          <ul className="ul">
            <li>Получила статус резидента «Сколково» для проектов.</li>
            <li>Спроектировала архитектуру международной платформы с ML-интеграцией (Figma → продуктовая постановка).</li>
            <li>Участвовала в формировании IT-функции и процессов информационной безопасности на уровне продукта.</li>
            <li>Оптимизировала IT-инфраструктуру с внедрением системы корпоративных прав доступа.</li>
            <li>Разработала ИИ-симуляторы ROI и калькулятор LTV (Python) для оценки бизнес-метрик и принятия решений.</li>
          </ul>
        </div>

        <div className="subAcc">
          <div className="subAcc__title">Ключевые продукты / инициативы</div>
          <AccordionGroup items={mdSubProducts} allowMulti={true} controls={true} />
        </div>
      </>
    ),
  };

  // 2) Kodland roles (как в финале)
  const kodlandSochi = {
    id: "exp-kodland-sochi",
    title: "CEO (Руководитель офлайн-филиала) — Kodland, Сочи",
    meta: "08.2018 — 05.2024 (5 лет 10 месяцев) · EdTech · Offline → Online",
    summary: "Запуск и развитие регионального филиала международной школы программирования.",
    tags: ["EdTech", "Operations", "Scale"],
    content: (
      <>
        <div className="kv">
          <div className="kv__k">Зона ответственности / вклад</div>
          <ul className="ul">
            <li>Запустила первый офлайн-филиал с нуля: концепция, помещение, команда, программы обучения.</li>
            <li>Выстроила автономную систему бизнес-процессов (обучение, продажи, операционка).</li>
            <li>Отработала модель, которая позже была масштабирована на другие города и онлайн-формат.</li>
            <li>Участвовала в запуске и развитии филиалов в Хабаровске, Южно-Сахалинске и других городах.</li>
          </ul>
        </div>
        <div className="kv">
          <div className="kv__k">Результат</div>
          <ul className="ul">
            <li>3 500+ учеников.</li>
            <li>Ежемесячная прибыль ~300 тыс ₽.</li>
            <li>Создана основа для масштабирования по РФ и международным рынкам.</li>
          </ul>
        </div>
      </>
    ),
  };

  const kodlandMoscow = {
    id: "exp-kodland-moscow",
    title: "Руководитель отдела продаж — Kodland, Москва",
    meta: "08.2019 — 04.2022 (2 года 9 месяцев) · EdTech · Online sales · Scale",
    summary: "Период активного перехода компании из офлайна в онлайн.",
    tags: ["Sales", "SQL", "GTM"],
    content: (
      <>
        <div className="kv">
          <div className="kv__k">Зона ответственности / вклад</div>
          <ul className="ul">
            <li>Создала отдел продаж с нуля: от 1 до 200+ менеджеров (в пике — 230).</li>
            <li>Запустила онлайн-продажи, выстроила аналитику, писала SQL-запросы.</li>
            <li>Внедрила CRM и телефонию.</li>
            <li>Участвовала в привлечении 2 инвестиционных раундов на $10.5M.</li>
            <li>
              Провела ключевую продуктово-продажную трансформацию:
              <ul className="ul ul--nested">
                <li>при переносе офлайн-модели в онлайн конверсия была ~20%,</li>
                <li>пересобрала формат продаж: индивидуальный мастер-класс как мини-урок, обучила продажников продуктовой логике,</li>
                <li>пересобрала скрипты под обучение, а не «продажу».</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="kv">
          <div className="kv__k">Результат</div>
          <ul className="ul">
            <li>Рост выручки с ~1 млн ₽ до ~30 млн ₽/мес.</li>
            <li>25 000+ учеников по миру.</li>
            <li>Конверсия в онлайн-продажах доведена до уровней офлайна (70–90%).</li>
            <li className="quote">
              <strong>Ключевой инсайт, из которого вырос мой продуктовый путь:</strong>
              <br />
              «Проще научить продажника кодить, чем кодера продавать» — с этого момента продукты проектировались от продаж и реального спроса, а не от абстрактных программ.
            </li>
          </ul>
        </div>
      </>
    ),
  };

  // 3) UnderPix (как в финале)
  const underpix = {
    id: "exp-underpix",
    title: "Chief Product Officer / Chief Business Development Officer — UnderPix School (США)",
    meta: "05.2022 — 08.2023 (1 год 4 месяца) · EdTech · International · 0→1",
    summary: "Международная онлайн-школа графического дизайна.",
    tags: ["0→1", "Infra", "International"],
    content: (
      <>
        <div className="kv">
          <div className="kv__k">Зона ответственности / вклад</div>
          <ul className="ul">
            <li>
              За 2 месяца собрала школу с нуля:
              команда (преподаватели, дизайнер, аккаунты, техспециалист, методологи, отдел продаж).
            </li>
            <li>Настроила IT-инфраструктуру: AmoCRM, телефония, GetCourse.</li>
            <li>Адаптировала юридические и договорные модели под международный рынок.</li>
            <li>Запустила продукт, продажи и операционные процессы в едином контуре.</li>
          </ul>
        </div>
        <div className="kv">
          <div className="kv__k">Результат</div>
          <ul className="ul">
            <li>Самоокупаемость за 3,5 месяца.</li>
            <li>150+ активных студентов за первые 9 месяцев.</li>
            <li>Продукт выведен в устойчивую операционную и коммерческую модель.</li>
          </ul>
        </div>
      </>
    ),
  };

  // Experience group ordering (строго по хронологии как вы утвердили на скрине):
  // Экосистема МД (с августа 2023) → UnderPix (05.2022–08.2023) → Kodland (внутри роли)
  // ВНИМАНИЕ: UnderPix в датах пересекается с МД стартом (08.2023). Это норм: у тебя так в финале.
  const experienceItems = [mdEcosystem, underpix, kodlandSochi, kodlandMoscow];

  // ====== Completed Cases (аккордеоны) ======
  const completedCasesItems = [
    {
      id: "case-iqido",
      title: "IQIDO Predictive Analytics — AI / ML Product Lead (2025)",
      meta: "B2B · Decision Intelligence · ML · Predictive Modeling",
      summary:
        "Продукт предиктивной аналитики и ML-моделирования для управленческих и маркетинговых решений бизнеса (в партнёрстве с Кириллом Безиковым).",
      tags: ["AI/ML", "B2B", "Decision Intelligence"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Сформировала product framing: какие управленческие решения принимает бизнес и какие прогнозы создают реальную ценность.</li>
              <li>
                Спроектировала data-архитектуру продукта:
                источники данных → нормализация → аналитический слой → ML-модели → интерфейсы принятия решений.
              </li>
              <li>Отвечала за product-валидацию ML-моделей для прогнозирования поведения и сценариев роста.</li>
              <li>Совместно с разработкой прорабатывала архитектурные решения, API и логику интеграций.</li>
              <li>Разработала Python-симуляторы и калькуляторы (LTV, ROI, сценарное моделирование) как часть продукта и presale-инструмента.</li>
              <li>Подготовила продуктовый и инвестиционный питч для крупного корпоративного клиента (NDA).</li>
            </ul>
          </div>
          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>Сформирован MVP продукта предиктивной аналитики.</li>
              <li>Подтверждена бизнес-ценность ML-подхода для управленческих решений.</li>
              <li>Получен корпоративный интерес и коммерческий оффер (NDA).</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "case-visatier",
      title: "VisaTier — Product Owner / CPO (2025)",
      meta: "Fintech · LegalTech · Immigration",
      summary:
        "Международный продукт инвестиционной и предпринимательской иммиграции (EU, UK, UAE).",
      tags: ["Voice AI", "n8n", "Fintech"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Спроектировала продуктовую линейку (Self Sponsorship Ireland, Golden Visa EU / UAE).</li>
              <li>Выполнила полную продуктовую проработку: CJM, диагностика, pricing, unit-экономика, партнёрская модель.</li>
              <li>Разработала ROI-симулятор иммиграции (Python): расчёт сроков, рисков, окупаемости и сценариев.</li>
              <li>Встроила AI-подсказки в симулятор для поддержки принятия решений клиентами.</li>
              <li>
                Настроила AI-голосового ассистента для продаж и консультаций:
                <ul className="ul ul--nested">
                  <li>VAPI + ElevenLabs + n8n</li>
                  <li>входящие и исходящие звонки</li>
                  <li>диалог без жёсткого скрипта, ответы по контексту</li>
                  <li>первичная консультация и квалификация лидов</li>
                </ul>
              </li>
              <li>Автоматизировала часть presale-воронки и снизила нагрузку на менеджеров.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>Продукт приведён к формату масштабируемой платформы.</li>
              <li>Улучшено качество квалификации клиентов.</li>
              <li>
                AI-ассистент взял на себя первичную консультацию и квалификацию,
                сократив ручную операционную нагрузку до −60%.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "case-nvm",
      title: "ГК НВМ — UX/UI Product Lead (2025)",
      meta: "PropTech · B2B",
      summary:
        "Цифровая платформа и сайт девелопера, ориентированные на лидогенерацию и сделки.",
      tags: ["UX/UI", "PropTech", "B2B"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Выполнила полную пересборку продуктовой модели сайта и платформы.</li>
              <li>Провела продуктовую аналитику и UX-диагностику пользовательских сценариев.</li>
              <li>Перепроектировала CJM, структуру и интерфейсы.</li>
              <li>Связала продуктовые изменения с воронкой продаж и бизнес-метриками.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>Время на сайте увеличено в 2,5 раза.</li>
              <li>Конверсия в заявку +60%.</li>
              <li>Длина сделки сокращена на 38%.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "case-abc",
      title: "ABC (Ай-Ви-Системз) — VR / XR / MR Product Lead (2024)",
      meta: "B2G · B2B · DeepTech",
      summary:
        "Портфель VR / XR / MR продуктов для государственных и корпоративных заказчиков.",
      tags: ["B2G", "DeepTech", "Delivery"],
      content: (
        <>
          <div className="kv">
            <div className="kv__k">Мой вклад</div>
            <ul className="ul">
              <li>Полностью пересобрала CJM и roadmap линейки VR / XR / MR продуктов.</li>
              <li>Оптимизировала продуктовую и операционную модель реализации контрактов.</li>
              <li>Синхронизировала продуктовую логику с требованиями B2G и B2B заказчиков.</li>
              <li>Устранила узкие места между продуктом, разработкой и контрактными обязательствами.</li>
            </ul>
          </div>

          <div className="kv">
            <div className="kv__k">Результат</div>
            <ul className="ul">
              <li>Срок реализации контрактов сокращён с ~2 лет до 11 месяцев.</li>
              <li>Повышена управляемость и предсказуемость delivery.</li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  // ====== Core Stack + Tools ======
  const coreStackBlocks = [
    {
      title: "Product & Strategy",
      lines: [
        "Product framing, JTBD, CJM, positioning",
        "Pricing, unit-экономика, продуктовая архитектура",
        "Roadmap / OKR, портфельная логика",
        "Запуски, масштабирование, управление жизненным циклом продукта",
      ],
    },
    {
      title: "Data / AI",
      lines: [
        "Data-driven discovery, продуктовые метрики и воронки",
        "Проектирование data-архитектуры: источники → нормализация → аналитический слой → ML-модели → интерфейсы принятия решений",
        "ML-продукты на уровне Product Lead / CPO: постановка задач, продуктовая валидация, внедрение в управленческие контуры",
      ],
    },
    {
      title: "Delivery & Ops",
      lines: [
        "Управление кросс-функциональными командами",
        "Синхронизация продукта, разработки, продаж и операций",
        "Go-to-market, presale-инструменты, автоматизация воронок",
      ],
    },
  ];

  const toolsLine =
    "Notion · Figma · SQL · n8n · VAPI · ElevenLabs · CodeSandbox · HuggingFace · GitHub · Jira · GetCourse · AmoCRM · Telephony / VoIP";

  // ====== Education ======
  const higherEdu = [
    "MBA Project Management — Swiss International Institute Lausanne (2021)",
    "Преподаватель английского языка — ИНТехнО (2018)",
    "Магистр экономики — Сочинский государственный университет (2015)",
  ];

  const certs = [
    "Большой курс по регулярному менеджменту (2023)",
    "Большой курс по методологии (2023)",
    "Graphic Designer Certification (2022)",
    "Инженер по тестированию — Яндекс Практикум (2021)",
  ];

  // ====== Additional experience (2011–2018) ======
  const early = [
    {
      title: "International Operations / Business Development Manager — SmartScrap Limited",
      meta: "01.2015 — 08.2017 (2 года 8 месяцев)",
      lines: [
        "International Operations / Business Development.",
        "Увеличила прибыль компании в 2,5 раза.",
        "Клиенты: ArcelorMittal, Tata Steel, Rockwool.",
      ],
    },
    {
      title: "Менеджер по работе с клиентами — АН «Новостройки Сочи»",
      meta: "03.2016 — 05.2018 (2 года 3 месяца)",
      lines: ["24 закрытые сделки.", "Комиссия: 300,000 — 2,000,000 ₽."],
    },
    {
      title: "Ведущий специалист / процесс-менеджер — ООО \"Лидер\"",
      meta: "01.2013 — 12.2014 (2 года)",
      lines: ["Рост команды с 4 до 20 сотрудников.", "Автоматизация документооборота."],
    },
    {
      title: "Специалист по развитию B2C / B2B2C — Сбербанк России",
      meta: "03.2011 — 12.2013 (2 года 10 месяцев)",
      lines: ["170% выполнения месячного плана.", "Продажи банковских продуктов B2B/B2C."],
    },
  ];

  return (
    <div className="page">
      <ScrollProgress />
      <BackToTop />
      
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">CV</div>
          <nav className="nav">
            <a href="#impact">Достижения</a>
            <a href="#metrics">Метрики</a>
            <a href="#experience">Опыт</a>
            <a href="#cases">Кейсы</a>
            <a href="#stack">Стек</a>
            <a href="#edu">Образование</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero__card">
            <div className="hero__left">
              <div className="hero__name">{name}</div>
              <div className="hero__role">{role}</div>

              <p className="hero__tagline">{tagline}</p>

              <div className="hero__chips">
                <Badge>Product Strategy</Badge>
                <Badge tone="accent">AI / Data</Badge>
                <Badge tone="success">P&amp;L / Delivery</Badge>
              </div>

              <div className="hero__contacts">
                <CopyableContact
                  type="email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                >
                  <Icon name="mail" />
                  <span>{contact.email}</span>
                </CopyableContact>

                <CopyableContact
                  type="telegram"
                  value={contact.telegram}
                  href={`https://t.me/${contact.telegram.replace("@", "")}`}
                >
                  <Icon name="tg" />
                  <span>{contact.telegram}</span>
                </CopyableContact>
              </div>

              <button
                className="theme-toggle"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Icon name={theme === "light" ? "moon" : "sun"} />
                <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
              </button>

              <a
                className="download-pdf"
                href="/CV_Catherine/Catherine_Efimchuk_CV.pdf"
                download="Catherine_Efimchuk_CV.pdf"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>

            <div className="hero__right">
              <div className="hero__photoWrap">
                <img 
                  className="hero__photo" 
                  src={photo} 
                  alt="Фотография Екатерины Ефимчук, Chief Product Officer" 
                />
              </div>
              <div className="hero__note">
                Отвечаю за создание и масштабирование сложных продуктовых систем — от product framing и CJM — до data-архитектуры, ML-моделей, API-интеграций, устойчивой выручки, AI-автоматизации и управляемого delivery.
              </div>
            </div>
          </div>
        </section>

        {/* Ключевые достижения */}
        <Section id="impact" title="Ключевые достижения">
          <div className="impactGrid">
            {selectedImpact.map((b) => (
              <div key={b.title} className="card impactCard hiCard">
                <div className="impactCard__title">{b.title}</div>
                <ul className="ul">
                  {b.lines.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Metrics */}
        <Section id="metrics" title="Ключевые метрики карьеры">
          <div className="grid metricsGrid">
            {metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          title="Опыт работы"
          right={<Badge tone="accent">Expand/Collapse</Badge>}
        >
          <AccordionGroup items={experienceItems} allowMulti={true} controls={true} />
        </Section>

        {/* Completed Cases */}
        <Section id="cases" title="Продуктовые кейсы">
          <AccordionGroup items={completedCasesItems} allowMulti={true} controls={true} />
        </Section>

        {/* Core Stack + Tools (перенесено ближе к Education, как ты хотела) */}
        <Section id="stack" title="Core Stack + Tools">
          <div className="stackGrid">
            {coreStackBlocks.map((b) => (
              <ListBlock key={b.title} title={b.title} lines={b.lines} />
            ))}
          </div>

          <div className="tools card">
            <div className="tools__title">Tools &amp; Tech</div>
            <div className="tools__line">{toolsLine}</div>
          </div>
        </Section>

        {/* Education */}
        <Section id="edu" title="Образование">
          <div className="eduGrid">
            <div className="card">
              <div className="block__title">
                <Icon name="graduation" />
                <span style={{ marginLeft: '8px' }}>Высшее образование</span>
              </div>
              <ul className="ul">
                {higherEdu.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="block__title">
                <Icon name="certificate" />
                <span style={{ marginLeft: '8px' }}>Дополнительные сертификации</span>
              </div>
              <ul className="ul">
                {certs.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Additional experience */}
        <Section id="early" title="Дополнительный опыт (2011–2018)" subtitle="Ранний трек — продажи, процессы, международные операции">
          <div className="earlyList">
            {early.map((e) => (
              <div className="card hiCard" key={e.title}>
                <div className="early__title">{e.title}</div>
                <div className="early__meta">{e.meta}</div>
                <ul className="ul">
                  {e.lines.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <footer className="footer">
          <div className="footer__inner">
            <div>© {new Date().getFullYear()} {name}</div>
            <div className="footer__links">
              <CopyableContact
                type="email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              >
                <span>{contact.email}</span>
              </CopyableContact>
              <span className="dot">•</span>
              <CopyableContact
                type="telegram"
                value={contact.telegram}
                href={`https://t.me/${contact.telegram.replace("@", "")}`}
              >
                <span>{contact.telegram}</span>
              </CopyableContact>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
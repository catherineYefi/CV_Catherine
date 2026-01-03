export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", padding: 24, maxWidth: 980, margin: "0 auto" }}>
      <header style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 28 }}>
        <div style={{ width: 110, height: 110, borderRadius: 16, background: "#eee" }} />
        <div>
          <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.1 }}>Ефимчук Екатерина Александровна</h1>
          <div style={{ marginTop: 8, fontSize: 16, opacity: 0.8 }}>CPO / Head of Product</div>
          <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={pill}>Platform & Internal Products</span>
            <span style={pill}>AI / ML · Decision Intelligence</span>
            <span style={pill}>EdTech · Fintech · GovTech</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 14, opacity: 0.85 }}>
            Telegram: @catherine0077 · Email: viazemsk@list.ru · Сочи · готова к релокации
          </div>
        </div>
      </header>

      <section style={card}>
        <h2 style={h2}>Профессиональный профиль</h2>
        <p style={{ margin: 0, lineHeight: 1.55 }}>
          Продуктовый руководитель с 14+ годами опыта, из них 7+ лет — в ролях CPO / Head of Product.
          Создаю и масштабирую сложные продуктовые системы: платформенные продукты, AI и data-driven решения,
          образовательные и B2B-сервисы. Проектирую end-to-end: от product framing и CJM до data-архитектуры,
          ML-моделей, API-интеграций, устойчивой выручки, AI-автоматизации и управляемого delivery.
        </p>
      </section>

      <section style={card}>
        <h2 style={h2}>Ключевые достижения</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li>$40M+ совокупной выручки созданных продуктов</li>
          <li>400+ человек в управлении (кросс-функциональные команды)</li>
          <li>2 раунда инвестиций суммарно $10.5M</li>
          <li>AI/ML: предиктивная аналитика, decision support, voice-автоматизация</li>
        </ul>
      </section>

      <section style={card}>
        <h2 style={h2}>Опыт работы</h2>
        <div style={jobBlock}>
          <div style={jobTitle}>Chief Product Officer / Chief Delivery Officer</div>
          <div style={jobMeta}>Экосистема проектов Михаила Дашкиева · 08.2023 — н.в.</div>
          <ul style={ul}>
            <li>Полная ответственность за продуктовую стратегию и delivery экосистемы.</li>
            <li>Проектирование продуктовой архитектуры: CJM, роли/сущности, правила, форматы, roadmap.</li>
            <li>Unit-экономика, pricing, LTV, ROI/ROMI.</li>
          </ul>
        </div>
      </section>

      <footer style={{ marginTop: 26, fontSize: 12, opacity: 0.65 }}>
        Сделано на React · GitHub Pages
      </footer>
    </div>
  );
}

const pill = {
  display: "inline-block",
  padding: "6px 10px",
  border: "1px solid #1f4bd6",
  borderRadius: 10,
  fontSize: 12,
};

const card = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 16,
  padding: 18,
  marginBottom: 14,
  background: "white",
};

const h2 = { margin: "0 0 10px 0", fontSize: 18 };

const jobBlock = { marginTop: 8 };

const jobTitle = { fontWeight: 700, fontSize: 16 };

const jobMeta = { fontSize: 13, opacity: 0.75, marginTop: 4 };

const ul = { margin: "10px 0 0 0", paddingLeft: 18, lineHeight: 1.6 };

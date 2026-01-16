import React from "react";

const PROJECTS = [
 {
  title: "Web Portfolio (Source)",
  href: "https://github.com/oscarmmgg1234/Portfolio",
  desc: "Personal portfolio site built with React using Semantic UI and Bootstrap components.",
  tags: ["React", "Semantic UI", "Bootstrap"],
},
{
  title: "Data Structures & Algorithms",
  href: "https://github.com/oscarmmgg1234/AdvanceDataStructures-C-",
  desc: "Advanced C++ data structures with algorithm analysis and optimization.",
  tags: ["C++", "Algorithms", "Data Structures"],
},
{
  title: "Nutrigoals",
  href: "https://github.com/oscarmmgg1234/NutriGoals-1",
  desc: "Cross-platform calorie tracking app built with React Native. Backend powered by Node.js, MySQL, and AWS.",
  tags: ["React Native", "Node.js", "MySQL", "AWS"],
},
{
  title: "ZUMA Inventory Platform (Contract Work)",
  href: "https://github.com/oscarmmgg1234/ZUMA-SYSTEM",
  desc: "Custom interpreter-style inventory management platform designed to fully match a growing company's operational needs.",
  tags: ["React", "Node.js", "Express", "React Native", "Swift", "Python", "Bash", "WSL", "Sharp", "API"],
},
{
  title: "File System Project",
  href: "https://github.com/oscarmmgg1234/File-System-Project",
  desc: "Custom disk-based file system implemented from scratch with a command-line shell.",
  tags: ["C++", "File Systems"],
},
{
  title: "Perf-Trace (NPM Package)",
  href: "https://github.com/oscarmmgg1234/perf-trace",
  desc: "Lightweight execution timer that injects into code to trace or flow execution, producing structured outputs for logging, streaming, or database export.",
  tags: ["Node.js", "NPM", "Module", "API"],
},
{
  title: "snotation",
  href: "https://pypi.org/project/snotation/",
  desc: "Library for scientific notation arithmetic, supporting chained operations, mixed inputs, and multiple output formats.",
  tags: ["JavaScript", "Node.js", "Python", "NPM", "PyPI"],
},
{
  title: "electro-learn",
  href: "https://pypi.org/project/snotation/",
  desc: "Electromagnetism problem-solving library built on top of snotation, featuring a custom formula parser, solver, and preloaded symbolic equations.",
  tags: ["JavaScript", "Node.js", "Python", "NPM", "PyPI"],
},
{
  title: "Covid FullStack Webapp (CSU: San bernardino) (title: Project Manager)",
  href: "https://github.com/h1013238763/CovidApp",
  desc: "A semester project app that track the user's life and provide suggestion to avoid the Covid",
  tags: ["Python", "ML", "API", "Flask", "UI/UX"],
},
  


];

// ---- your card styling (kept) ----
const cardBase = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: 16,
  padding: 14,
  boxShadow: "0 14px 28px rgba(0,0,0,0.12)",
  border: "1px solid rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  transition: "transform 150ms ease, box-shadow 150ms ease",
  minWidth: 0,
};

const titleStyle = {
  fontSize: 14.5,
  fontWeight: 900,
  color: "#111",
  lineHeight: 1.3,
};

const descStyle = {
  fontSize: 13.5,
  lineHeight: 1.55,
  opacity: 0.85,
};

const tagWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginTop: "auto",
};

const tag = {
  fontSize: 11.5,
  padding: "4px 8px",
  borderRadius: 999,
  border: "1px solid rgba(0,0,0,0.12)",
  background: "#f6f6f6",
  fontWeight: 700,
};

const Card = ({ href, title, desc, tags }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "inherit", minWidth: 0 }}
    aria-label={`Open ${title} on GitHub`}
  >
    <div
      style={cardBase}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = cardBase.boxShadow;
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
        <div style={{ ...titleStyle, flex: 1, minWidth: 0 }}>{title}</div>
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 800,
            padding: "5px 9px",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#fafafa",
            opacity: 0.9,
            whiteSpace: "nowrap",
          }}
        >
          GitHub
        </div>
      </div>

      <div style={descStyle}>{desc}</div>

      <div style={tagWrap}>
        {tags.map((t) => (
          <span key={t} style={tag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Port = () => {
  const styles = {
    // keep your "safe" page base
    page: {
      height: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden", // key: prevents side blank area
      overflowX: "hidden",
      scrollSnapAlign: "start",
    },

    bg: {
      height: "100vh",
      width: "100%",
      objectFit: "cover",
      display: "block",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
    },

    // this is the "new format" container — but positioned absolutely like your working design
    shellWrap: {
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "22px 18px",
      boxSizing: "border-box",
      overflow: "hidden",
    },

    shell: {
      width: "100%",
      maxWidth: 1700,
      height: "100%",
      maxHeight: 1000, // keeps it visually like a “panel” within the background
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gap: 14,
      borderRadius: 22,
      overflow: "hidden",
      background: "rgba(242,243,247,0.92)",
      border: "1px solid rgba(255,255,255,0.16)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
      backdropFilter: "blur(10px)",
      minWidth: 0,
    },

    hero: {
      borderRadius: 18,
      overflow: "hidden",
      margin: 14,
      marginBottom: 0,
      background: "rgba(255,255,255,0.90)",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 16px 30px rgba(0,0,0,0.12)",
    },

    heroBg: {
      height: 150,
      width: "100%",
      backgroundImage: `url(${require("../../ASSETS/IMAGES/AdobeStock_298907406.jpg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      filter: "saturate(1.05) contrast(1.02)",
    },

    heroBgOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.38), rgba(0,0,0,0.08))",
    },

    heroInner: {
      padding: "14px 16px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap",
    },

    heroTitle: {
      margin: 0,
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: -0.25,
      color: "#111",
      lineHeight: 1.1,
    },

    heroSubtitle: {
      margin: "6px 0 0",
      fontSize: 13.5,
      lineHeight: 1.5,
      opacity: 0.78,
      maxWidth: 760,
    },

    pill: {
      fontSize: 11.5,
      fontWeight: 800,
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.12)",
      background: "#fafafa",
      opacity: 0.95,
      whiteSpace: "nowrap",
    },

    // grid area inside the shell
    gridScroll: {
      margin: 14,
      marginTop: 14,
      borderRadius: 18,
      overflowY: "auto",
      overflowX: "hidden",
      minWidth: 0,
      paddingRight: 6,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 14,
      minWidth: 0,
      paddingBottom: 10,
    },

    media: `
      @media (max-width: 1000px) {
        .portGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .portShell { max-height: 820px; }
      }
      @media (max-width: 640px) {
        .portGrid { grid-template-columns: 1fr; }
        .portShell { max-height: none; }
      }
    `,
  };

  return (
    <div style={styles.page}>
      <style>{styles.media}</style>

      <img
        src={require("../../ASSETS/IMAGES/AdobeStock_298907406.jpg")}
        alt="Portfolio background"
        style={styles.bg}
      />
      <div style={styles.overlay} />

      <div style={styles.shellWrap}>
        <div className="portShell" style={styles.shell}>
          {/* HERO */}
          <section style={styles.hero}>
            <div style={styles.heroBg}>
              <div style={styles.heroBgOverlay} />
            </div>
            <div style={styles.heroInner}>
              <div style={{ minWidth: 0 }}>
                <h1 style={styles.heroTitle}>Portfolio</h1>
                <p style={styles.heroSubtitle}>
                  A small selection of projects focused on fundamentals, system thinking, and practical implementation.
                  Each link goes to the source on GitHub.
                </p>
              </div>
              <div style={styles.pill}>{PROJECTS.length} projects</div>
            </div>
          </section>

          {/* GRID */}
          <div style={styles.gridScroll}>
            <section className="portGrid" style={styles.grid}>
              {PROJECTS.map((p) => (
                <Card
                  key={p.href}
                  href={p.href}
                  title={p.title}
                  desc={p.desc}
                  tags={p.tags}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;

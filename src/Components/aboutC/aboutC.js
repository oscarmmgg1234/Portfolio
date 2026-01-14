import React from "react";
import ChartR from "./chartR";
import standImg from "../../ASSETS/IMAGES/stand.jpg";

const AboutC = () => {
  const styles = {
    page: {
      height: "100vh",
      width: "100%",
      background: "#f2f3f700",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 24,
      boxSizing: "border-box",
      overflow: "hidden",
    },

    card: {
      width: "100%",
      maxWidth: 2200,
      height: "80%",
      background: "#ffffffe5",
      borderRadius: 22,
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.06)",
      display: "flex",
      overflow: "hidden",
      marginTop: '4%'
    },

    // LEFT SIDE
    left: {
      flex: "1 1 62%",
      padding: 22,
      overflowY: "auto",
      boxSizing: "border-box",
    },

    // VERTICAL DIVIDER
    divider: {
      width: 1,
      background:
        "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15), transparent)",
      margin: "22px 0",
      flexShrink: 0,
    },

    // RIGHT SIDE
    right: {
      flex: "1 1 38%",
      padding: 20,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    headerRow: {
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
    },

    imageWrap: {
      flex: "0 0 220px",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.08)",
      background: "#f7f7f7",
    },

    image: {
      width: "100%",
      height: "auto",
      display: "block",
    },

    title: {
      fontSize: 34,
      lineHeight: 1.1,
      margin: "4px 0 0",
      letterSpacing: -0.3,
      fontWeight: 900,
      color: "#111",
    },

    subtitle: {
      fontSize: 15.5,
      opacity: 0.86,
      marginTop: 10,
      lineHeight: 1.65,
      maxWidth: 700,
    },

    chips: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 12,
    },

    chip: {
      fontSize: 12.5,
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.12)",
      background: "#fafafa",
      fontWeight: 700,
      whiteSpace: "nowrap",
    },

    section: {
      marginTop: 16,
      display: "grid",
      gap: 12,
    },

    p: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.72,
      opacity: 0.92,
    },

    highlight: { fontWeight: 850 },

    callout: {
      borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.08)",
      background: "#fcfcfd",
      padding: 14,
    },

    calloutTitle: {
      margin: "0 0 8px 0",
      fontSize: 13,
      fontWeight: 900,
      letterSpacing: 0.2,
      opacity: 0.85,
      textTransform: "uppercase",
    },

    bullets: {
      margin: 0,
      paddingLeft: 18,
      display: "grid",
      gap: 6,
      fontSize: 14.8,
      lineHeight: 1.6,
    },

    footerNote: {
      marginTop: 10,
      fontSize: 13,
      opacity: 0.7,
    },

    media: `
      @media (max-width: 900px) {
        .aboutCard {
          flex-direction: column;
        }
        .aboutDivider {
          width: auto;
          height: 1px;
          margin: 0 22px;
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.15), transparent);
        }
        .aboutRight {
          flex: 0 0 320px;
        }
      }
    `,
  };

  return (
    <div style={styles.page}>
      <style>{styles.media}</style>

      <div className="aboutCard" style={styles.card}>
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.headerRow}>
            <div style={styles.imageWrap}>
              <img src={standImg} alt="Oscy" loading="lazy" style={styles.image} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={styles.title}>About</h1>

              <p style={styles.subtitle}>
                I’m a software engineer focused on building{" "}
                <span style={styles.highlight}>reliable</span>,{" "}
                <span style={styles.highlight}>scalable</span>, and{" "}
                <span style={styles.highlight}>intentional</span> systems —
                especially where complexity is real.
              </p>

              <div style={styles.chips}>
                <span style={styles.chip}>Backend / Systems</span>
                <span style={styles.chip}>Event-driven Architecture</span>
                <span style={styles.chip}>Data Modeling</span>
                <span style={styles.chip}>Distributed Workflows</span>
                <span style={styles.chip}>AI Systems + Explainability</span>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <p style={styles.p}>
              My work lives at the intersection of{" "}
              <span style={styles.highlight}>engineering and foundations</span>:
              how systems behave, how information survives noise, and how software
              stays correct as it grows.
            </p>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>Education</div>
              <ul style={styles.bullets}>
                <li>
                  <strong>M.S. Computer Science</strong> — University of Colorado
                  Boulder (in progress)
                </li>
                <li>
                  <strong>B.S. Computer Science</strong>
                </li>
              </ul>
            </div>

            <div style={styles.callout}>
              <div style={styles.calloutTitle}>What employers should know</div>
              <ul style={styles.bullets}>
                <li>I care deeply about correctness and reliability.</li>
                <li>I think in systems, not just features.</li>
                <li>I design for tradeoffs and execute deeply in code.</li>
              </ul>
            </div>

            <p style={styles.p}>
              Outside of engineering, I enjoy strength training, learning new
              technologies, and spending time with my family.
            </p>

            <div style={styles.footerNote}>
              This page is intentionally concise — the blog is where deeper
              thinking lives.
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="aboutDivider" style={styles.divider} />

        {/* RIGHT */}
        <div className="aboutRight" style={styles.right}>
          <ChartR />
        </div>
      </div>
    </div>
  );
};

export default AboutC;

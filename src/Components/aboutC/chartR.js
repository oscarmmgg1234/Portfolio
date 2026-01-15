import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartR = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    // Grounded, entry-level snapshot (0–10)
    // "Stronger in fundamentals + shipping, growing into AI"
    const labels = [
      "Backend Fundamentals",
      "APIs & Integration",
      "Data Modeling / SQL",
      "React / UI",
      "Testing / Debugging",
      "DevOps Basics",
      "AI / ML (Learning)"
    ];

    const values = [9, 8, 7, 6, 7, 5, 4];

    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels,
        datasets: [
          {
            label: "Skill Snapshot",
            data: values,
            borderWidth: 2,
            pointRadius: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        layout: { padding: 12 },

        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10,
            stepSize: 2
          },
          pointLabels: {
            fontSize: 12
          }
        },

        tooltips: {
          callbacks: {
            title: (items, data) => data.labels[items[0].index],
            label: (tooltipItem, data) => {
              const v = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return ` ${v}/10`;
            }
          }
        }
      }
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  const styles = {
    wrap: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 10
    },

    title: { margin: 0, fontSize: 16, fontWeight: 900, color: "#111" },
    sub: { margin: 0, fontSize: 12.5, opacity: 0.75 },

    canvasBox: {
      flex: 1,
      minHeight: 260,
      width: "100%",
      borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.08)",
      background: "#fcfcfd",
      padding: 12,
      boxSizing: "border-box"
    },

    caption: {
      fontSize: 13,
      lineHeight: 1.55,
      opacity: 0.82
    },

    legend: {
      display: "grid",
      gap: 6,
      fontSize: 12.8,
      opacity: 0.85
    }
  };

  return (
    <div style={styles.wrap}>
      <div style={styles.header}>
        <h3 style={styles.title}>Skill Snapshot</h3>
        <p style={styles.sub}>0–10 (honest + in-progress)</p>
      </div>

      <div style={styles.canvasBox}>
        <canvas ref={canvasRef} />
      </div>

      <div style={styles.caption}>
        A simple view of where I’m strongest today and what I’m actively improving. I’m confident
        contributing in backend + web fundamentals, and I’m continuing to grow into DevOps and AI/ML.
      </div>

      <div style={styles.legend}>
        <div>• Strongest: backend fundamentals, debugging, and building features end-to-end</div>
        <div>• Growing: DevOps habits, deployment workflows, and ML foundations</div>
      </div>
    </div>
  );
};

export default ChartR;

import { ResponsivePie } from "@nivo/pie";
import "./PieChart.css";

const data = [
  { id: "Receitas", label: "Receitas", value: 6500, color: "#43a047" },
  { id: "Despesas", label: "Despesas", value: 4200, color: "#e53935" },
  { id: "Investimentos", label: "Investimentos", value: 1800, color: "#1e88e5" },
];

export default function PieChart() {
  return (
    <div className="piechart-container">
      <h2 className="chart-title">Distribuição Financeira</h2>
      <div className="piechart-graph">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          innerRadius={0.6}
          padAngle={2}
          cornerRadius={8}
          colors={d => d.data.color}
          borderWidth={2}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          enableArcLabels={false}
          enableArcLinkLabels={true}
          arcLinkLabelsTextColor="#333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateY: 40,
              itemWidth: 100,
              itemHeight: 18,
              itemsSpacing: 8,
              symbolSize: 18,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
}

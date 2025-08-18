import { ResponsiveBar } from "@nivo/bar";
import "./BarChart.css";

const data = [
  { categoria: "Jan", Receitas: 1200, Despesas: 800 },
  { categoria: "Fev", Receitas: 1500, Despesas: 950 },
  { categoria: "Mar", Receitas: 1800, Despesas: 1100 },
  { categoria: "Abr", Receitas: 2000, Despesas: 1300 },
];

export default function BarChart() {
  return (
    <div className="barchart-container">
      <h2 className="chart-title">Receitas vs Despesas Mensais</h2>
      <div className="barchart-graph">
        <ResponsiveBar
          data={data}
          keys={["Receitas", "Despesas"]}
          indexBy="categoria"
          margin={{ top: 20, right: 20, bottom: 60, left: 40 }}
          padding={0.3}
          colors={["#43a047", "#e53935"]}
          borderRadius={6}
          axisBottom={{
            tickSize: 0,
            tickPadding: 12,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 8,
          }}
          labelSkipWidth={16}
          labelSkipHeight={16}
          labelTextColor="#fff"
          enableGridY={false}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
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

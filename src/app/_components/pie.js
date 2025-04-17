import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const data = {
  labels: ["daily", "weekly", "monthly", "yearly", "others"],
  datasets: [
    {
      label: "Sales",
      data: [10, 20, 15, 30, 25],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.4, // Smooth curve effect
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows manual resizing
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

const LineChartComponent = () => {
  return (
    <div className="w-[400px] h-[200px] ">
      {" "}
      {/* Adjust chart size */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;

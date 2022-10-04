import { formatThousands } from "@/utils/Utils";
import {
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";

// Import utilities

Chart.register(
  CategoryScale,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

function LineChart03({ data, width, height, isLoading }) {
  // const [options, setOptions] = useState({});

  const options = {
    layout: {
      padding: 20,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          callback: (value) => formatThousands(value),
        },
      },
      x: {
        type: "time",
        time: {
          parser: "MM-DD-YYYY",
          unit: "month",
          displayFormats: {
            month: "MMM YY",
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          autoSkipPadding: 48,
          maxRotation: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => false, // Disable tooltip title
          label: (context) => formatThousands(context.parsed.y),
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
    },
    maintainAspectRatio: false,
    resizeDelay: 200,
  };

  return (
    <>
      {isLoading || !data ? (
        <></>
      ) : (
        <Line data={data} options={options} width={width} height={height} />
      )}
    </>
  );
}

export default LineChart03;

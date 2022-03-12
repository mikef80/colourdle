const arr = JSON.parse(window.localStorage.getItem('guessCountArray'));
const counts = {};

if(arr) {
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
}

const labels = ["1", "2", "3", "4", "5", "6"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Guess Distribution",
      data: counts,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Guess Distribution'
      },
      subtitle: {
        display: false,
        text: 'Custom Chart Subtitle'
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '# of guesses'
        }
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: '# of games'
        }
      }
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

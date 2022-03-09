const arr = JSON.parse(window.localStorage.getItem('guessCountArray'));
const counts = {};

if(arr) {
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
}

// console.log(counts[1], counts[2], counts[3], counts[4], counts[5]);


const labels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Guess Distribution',
        // backgroundColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: counts,
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        indexAxis: 'x',
        scale: {
            ticks: {
              precision: 0
            },
        },         
        
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
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
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: window.localStorage.getItem('totalLosses'),
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
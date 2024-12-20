// Balkendiagramm für Geschlechter
const ctx = document.getElementById('gender');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Männlich', 'Weiblich', 'Divers'],
    datasets: [{
      data: [63, 32, 5],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    // Changing the label colour
scales: {
  y: {
      ticks: { 
        color: "white", 
        beginAtZero: true,
      },
      font: {
        size: 20
      }
  },
  x: {
      ticks: { 
        color: "white", 
        beginAtZero: true,
        fontSize: 24
      },
  },
},
    plugins: {
      legend: {
          display: true,
          labels: {
              color: 'rgb(255, 255, 223)',
              font: {
                size: 20
              }
          }
          
      }
    }
  }
});
// Simulate fetching data from the backend
function fetchData(widgetId, interval) {
    // Replace this with actual API calls to your backend
    // For now, let's generate random data as an example
    const data = [];
    const days = interval === 'weekly' ? 7 : (interval === 'daily' ? 1 : 30);
  
    for (let i = 0; i < days; i++) {
      data.push({ x: i, y: Math.floor(Math.random() * 100) });
    }
  
    return data;
  }
  
  // Update the content of a widget with the fetched data
  function updateWidget(widgetId, interval) {
    const ctx = document.getElementById(`chart${widgetId.charAt(widgetId.length - 1)}`).getContext('2d');
    const data = fetchData(widgetId, interval);
  
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Graphs',
          borderColor: 'rgb(75, 192, 192)',
          data: data,
          fill: false,
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: 0,
            max: 100,
          },
        },
      },
    });
  }
  
  // Handle sidebar button clicks
  function updateData(interval) {
    updateWidget('widget1', interval);
    updateWidget('widget2', interval);
    updateWidget('widget3', interval);
    updateWidget('widget4', interval);
    updateWidget('widget5', interval);
  }
  
  // Update widgets on page load (default: weekly)
  document.addEventListener('DOMContentLoaded', function () {
    updateData('weekly');
  });
  
  // Update widgets when changing the interval
  setInterval(function () {
    const selectedInterval = document.querySelector('.sidebar button.active').textContent.toLowerCase();
    updateData(selectedInterval);
  }, 5000);
  
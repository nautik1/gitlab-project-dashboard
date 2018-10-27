let data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Expected',
      backgroundColor: '#4d94ff',
      data: [40, 39, 10, 40, 39, 54, 40]
    },
    {
      label: 'Actual',
      backgroundColor: '#00e600',
      data: [40, 39, 10, 40, 39, 23, 40]
    }
  ]
}

export default {
  getStatisticsFromData: function() {
    return data
  }
}
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.defaults.font.size = 14
Chart.defaults.font.family = 'Roboto, sans-serif'

const data = {
  subjects: [
    'Алгеб',
    'Геомет',
    'Біолог',
    'Хімія',
    'АнМов',
    'ФізКул',
    'Мистец',
    'Геогра',
    'ІстУкр',
    'ВсеІст',
    'Фізика',
    'УкМова',
    'УкрЛіт',
    'ЗарЛіт',
    'Інформ'
  ],
  colors: ['rgba(232, 224, 255, 1)', 'rgba(224, 235, 255, 1)', 'rgba(255, 224, 224, 1)', 'rgba(224, 255, 240, 1)']
}

const innerBarText = {
  id: 'innerBarText',
  afterDatasetsDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { bottom },
      scales: { x }
    } = chart

    ctx.save()
    data.labels.forEach((item, index) => {
      ctx.font = 'Roboto 16px sans-serif'
      ctx.fillStyle = '#4F4F4F'
      ctx.fillText(data.labels[index], x.getPixelForValue(index) - 20, bottom - 20)
    })
  }
}

const graph = () => {
  const ctx = document.getElementById('graph-adap')

  if (!ctx) return
  new Chart(ctx, {
    type: 'bar',
    plugins: [ChartDataLabels, Chart],

    data: {
      labels: data.subjects,

      datasets: [
        {
          data: [9, 10, 8, 11, 11, 5, 11, 8, 6, 2, 9, 9, 12, 9, 9],
          backgroundColor: data.colors,
          borderSkipped: true,
          barPercentage: 1,
          categoryPercentage: 0.88
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      animation: true,
      plugins: {
        tooltip: true,
        legend: false,
        datalabels: { anchor: 'end', align: 'left', offset: 5, color: '#1C1C1C' }
      },

      elements: {
        bar: {
          innerBarText,
          borderRadius: 50
        }
      },
      indexAxis: 'y',

      scales: {
        y: {
          grid: { tickColor: false, drawOnChartArea: false, drawBorder: false },
          ticks: {
            display: true,
            font: { size: 13, weight: 400 },
            color: '#4F4F4F',
            stepSize: 1,
            mirror: true,
            padding: 4,

            z: 10
          }
        },
        x: {
          position: 'top',
          max: 12,
          min: 1,
          grid: { color: '#C8D9FD', drawBorder: true },
          beginAtZero: true,
          ticks: { stepSize: 1, font: { size: 13, weight: 400 } }
        }
      }
    }
  })
}

export default graph





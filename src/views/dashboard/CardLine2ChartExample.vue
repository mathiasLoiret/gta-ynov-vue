<script>
import { Line } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  extends: Line,
  props: ['height', 'width'],
  mounted () {
    const brandInfo = getStyle('--light-blue') || '#63c2de'
    const datasets2 = [
      {
        label: 'My First dataset',
        backgroundColor: brandInfo,
        borderColor: 'rgba(255,255,255,.55)',
        data: [35, 39, 35, 35, 34, 22, 38]
      }
    ]

    this.renderChart(
      {
        labels: ['21', '22', '23', '24', '25', '26', '27'],
        datasets: datasets2
      },
      {
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                display: false,
                min: Math.min.apply(Math, datasets2[0].data) - 5,
                max: Math.max.apply(Math, datasets2[0].data) + 5
              }
            }
          ]
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    )
  }
}
</script>

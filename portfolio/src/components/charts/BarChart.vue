<template>
    <Bar class="rounded-md p-8 bg-gradient-to-b from-transparent to-secondary/50" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            name: 'Test',
            chartData: {
                labels: ['HTML', 'CSS', 'JavaScript', 'Photoshop', '"Tech-savvy"'],
                datasets: [{
                    data: [95, 90, 75, 85, 100],
                    label: 'From 0-100%',
                    backgroundColor: '#FF9C40',
                    borderColor: '#fff'
                }]
            },
            chartOptions: {
                plugins: {
                    title: {
                        display: true,
                        text: 'My Skills',
                        size: 24
                    },
                    labels: {
                        font: {
                            color: '#FFF',
                            size: 24,
                            family: 'montserrat'
                        }
                    }
                }
            }
        }
    }
}
</script>
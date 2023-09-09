const unidades = document.getElementById('myChart');

const chart = new Chart(unidades, {
    type:'line',
    data:{
        labels: [`https://mindicador.cl/api/uf/1977`, `https://mindicador.cl/api/uf/2023`],
        datasets:[{
            data:[380, 38000],
            label: 'Unidades de Fomento',
            backgroundColor:[
                '#FF0000'
            ]
        }]
    }
})
import { Api } from "./fetch.js";

let valores = [];
let fechas = [];



async function renderData() {
    const ufs = await Api("https://mindicador.cl/api/uf");
    const {
        serie
    }=ufs;
    console.log(ufs)

    fechas = serie.map(uf => uf.fecha);
    valores = serie.map(uf => uf.valor);


    const fechasOrdenadas = fechas.sort((a, b) => a>b);


    
    const unidades = document.getElementById('myChart');

    const chart = new Chart(unidades, {
        type: 'line',
        data: {
            labels: fechasOrdenadas,
            datasets: [{
                label: 'Unidades de Fomento',
                data: valores,
                borderWidth: 1,
                backgroundColor: '#FF0000',
                borderColor: '#0000ff'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    reverse: true
                }
            }
        }
    });
}
renderData()
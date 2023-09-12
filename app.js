import { Api } from "./fetch.js";

let valores = [];
let fechas = [];

async function renderData() {
    const ufs = await Api("https://mindicador.cl/api/uf");
    console.log(ufs)

  //  fechas = ufs.map((uf) => uf.fecha);
    //valores = ufs.map((uf) => uf.valor);


    const unidades = document.getElementById('myChart');

    const chart = new Chart(unidades, {
        type: 'line',
        data: {
            labels: fechas,
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
                    beginAtZero: true
                }
            }
        }
    });
}
renderData()
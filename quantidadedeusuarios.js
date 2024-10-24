import { getCSS } from "./comum.js";
import { tickfont } from "./comum.js";

async function quantidadedeusuarios(){
const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
const resultado = await fetch(url);
const dados = await resultado.json();
const nomesDasRedes = Object.values(dados);
const quantidadedeusuarios = object.values(dados);

const infos = [
    {
        x: nomesDasRedes,
        y: quantidadedeusuarios,
        type: 'bar',
        marker: {
            color: getCSS('--cor-primaria'),
        }
    }
]

const layout = {
    plot_bgcolor: getCSS('--cor-de-fundo'),
    paper_bgcolor: getCSS('--cor-de-fundo'),
    title: {
        Text: 'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
            color: getCSS('--cor-primaria'),
            family: getCSS('--fonte'),
            size: 30,
        }
    }
}

const grafico = document.createElement('div');
grafico.className = 'graficos'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,infos)
}

quantidadedeusuarios()
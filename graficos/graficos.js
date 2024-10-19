import { getCSS } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/glrmrissi/api-graficos/refs/heads/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: 'darkred', // Cor das barras baseada em uma variável CSS
                line: {
                    color: getCSS('--secondary-color'), // Borda das barras
                    width: 1
                }
            },
        }
    ]

    const layout = {
        plot_bgcolor: '#dddddd',
        paper_bgcolor: '#dddddd'

    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
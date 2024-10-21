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
                    color: getCSS('--primary-color'), // Borda das barras
                    width: 1
                }
            },
        }
    ]

    const layout = {
        plot_bgcolor: '#1d1a2f',
        paper_bgcolor: '#fff',
        yaxis: {
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: "darkred"
                }
            }
        },
        xaxis: {
            title: {
                text: 'Nome das rede sociais',
                font: {
                    size: 20,
                    color: "darkred"
                }
            }
        },
        title: {
            text: 'Redes sociais com mais usuários'
            
        }

    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
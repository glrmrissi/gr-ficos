const url = 'https://raw.githubusercontent.com/glrmrissi/api-graficos/refs/heads/main/dados-globais.json';

async function viewGlobalInfos() {
    const res =  await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const totalPessoas = (dados.total_pessoas_mundo / 1e9)
    const graficosLanding = document.getElementById("graficos-container")
    const porcentagemConectada = ((pessoasConectadas / totalPessoas ) * 100).toFixed(2)
    const textoGrafico = document.createElement("p")
    textoGrafico.textContent = `Total de pessoas no mundo 
    ${totalPessoas} bilhões de pessoas,
     pessoas conectadas no mundo ${pessoasConectadas} bilhões
     tempo médio conectado ${horas}:${minutos} minutos, 
     ${porcentagemConectada}% estão conectadas.`
    graficosLanding.appendChild(textoGrafico)
    console.log(pessoasConectadas, totalPessoas)
}


viewGlobalInfos()
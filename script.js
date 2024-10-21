function calcularEstatisticas() {
    // Pega os valores dos inputs
    const visitas = Number(document.getElementById('visitas').value);
    const gastos = Number(document.getElementById('gastos').value);
    const lucroPorVisita = Number(document.getElementById('lucroPorVisita').value);

    // Calcula 20% do volume de visitas
    const vintePorcentoVisitas = visitas * 0.2;

    // Calcula o total de lucro em cima dos 20% de visitas
    const lucro = vintePorcentoVisitas * lucroPorVisita;

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = `
        <p>20% do volume de visitas: ${vintePorcentoVisitas}</p>
        <p>Gastos totais: R$ ${gastos.toFixed(2)}</p>
        <p>Lucro em cima dos 20% de visitas: R$ ${lucro.toFixed(2)}</p>
    `;
}

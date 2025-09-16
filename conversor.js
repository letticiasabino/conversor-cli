// Importa o módulo 'process' (nativo do Node) para acessar argumentos do terminal
const args = process.argv.slice(2);

// Validação: precisamos de 3 argumentos (valor, unidade de origem e unidade de destino)
if (args.length !== 3) {
  console.log("Uso correto: node conversor.js <valor> <unidade_origem> <unidade_destino>");
  console.log("Exemplo: node conversor.js 10 km milhas");
  process.exit(1);
}

// Extrai os argumentos
const valor = parseFloat(args[0]);
const unidadeOrigem = args[1].toLowerCase();
const unidadeDestino = args[2].toLowerCase();

// Função de conversão de medidas
function converter(valor, origem, destino) {
  // Conversão de distância
  if (origem === "km" && destino === "milhas") {
    return valor * 0.621371; // 1 km = 0.621371 milhas
  }
  if (origem === "milhas" && destino === "km") {
    return valor / 0.621371; // inverso da fórmula acima
  }

  // Conversão de temperatura
  if (origem === "celsius" && destino === "fahrenheit") {
    return (valor * 9/5) + 32;
  }
  if (origem === "fahrenheit" && destino === "celsius") {
    return (valor - 32) * 5/9;
  }

  // Se a conversão não for suportada
  return null;
}

// Executa a conversão
const resultado = converter(valor, unidadeOrigem, unidadeDestino);

if (resultado === null) {
  console.log(`Conversão de ${unidadeOrigem} para ${unidadeDestino} não suportada.`);
} else {
  // Formata a saída com no máximo 2 casas decimais
  console.log(`${valor} ${unidadeOrigem} é igual a ${resultado.toFixed(2)} ${unidadeDestino}.`);
}
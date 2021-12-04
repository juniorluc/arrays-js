const listaDeNomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Maria','Gustavo','Kleimer','Junior','Lurdinha','Graça','Tafarel','Brenno','Josiel','Raquel'];

const salaUm = listaDeNomes.slice(0, listaDeNomes.length/2);
const salaDois = listaDeNomes.slice(listaDeNomes.length/2);

console.log(`Esta é a sala um: ${salaUm}`);
console.log(`Esta é a sala dois: ${salaDois}`);
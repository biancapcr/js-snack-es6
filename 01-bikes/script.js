// Creo l'array di oggetti bici
const bikes = [
  { nome: 'Bianchi Oltre XR4',        peso: 7.3 },
  { nome: 'Giant TCR Advanced Pro',   peso: 7.4 },
  { nome: 'Scott Addict RC 20',       peso: 7.1 },
  { nome: 'Felt AR FRD',              peso: 6.8 },
  { nome: 'Colnago V3Rs',             peso: 7.0 },
  { nome: 'Cervélo R5',               peso: 7.2 }
];
// Parto arbitrariamente dalla prima bici
let lightest = bikes[0];
// Ciclo tutto l'array a partire dal secondo elemento
for (let i = 1; i < bikes.length; i++) {
  // Se trovo una bici con peso minore, la salvo in lightest
  if (bikes[i].peso < lightest.peso) {
    lightest = bikes[i];
  }
}
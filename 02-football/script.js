// Creo l'array di squadre con solo nome; punti e falli inizializzati a 0
const teams = [
  { name: 'Juventus', points: 0, foulsReceived: 0 },
  { name: 'Milan',    points: 0, foulsReceived: 0 },
  { name: 'Inter',    points: 0, foulsReceived: 0 },
  { name: 'Roma',     points: 0, foulsReceived: 0 },
  { name: 'Napoli',   points: 0, foulsReceived: 0 }
];
// Popolo 'points' e 'foulsReceived' con numeri random
  // points: da 0 a 100
for (let i = 0; i < teams.length; i++) {
  teams[i].points = Math.floor(Math.random() * 101); 
  // foulsReceived: da 0 a 50
  teams[i].foulsReceived = Math.floor(Math.random() * 51); 
}
// Creo un nuovo array contenente solo 'name' e 'foulsReceived'
const foulsOnly = [];
for (let i = 0; i < teams.length; i++) {
  foulsOnly.push({
    name: teams[i].name,
    foulsReceived: teams[i].foulsReceived
  });
}
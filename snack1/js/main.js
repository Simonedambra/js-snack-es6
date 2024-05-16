'use strict';
const bikeArrayobj = [{
    nome: 'ayax',
    peso: 20,
},
{
    nome: 'demon',
    peso: 15.5,
},
{
    nome: 'cront',
    peso: 17.5,
},
{
    nome: 'critech',
    peso: 12.2,
},
{
    nome: 'biken',
    peso: 18.5,
},
{
    nome: 'juback',
    peso: 19.6,
},
{
    nome: 'divrot',
    peso: 14.8,
},
{
    nome: 'mont',
    peso: 21.4,
},
{
    nome: 'desert',
    peso: 15.7,
},
{
    nome: 'xelot',
    peso: 18.2,
},]

const text = document.getElementById('text')
let persominore = bikeArrayobj[0].peso;
let position = 0;

for (let i = 0; i < bikeArrayobj.length - 1; i++) {
    let numeroMin = bikeArrayobj[i].peso

    if (numeroMin < persominore) {
        persominore = numeroMin;
        position = [i];

    }


}
let nome = bikeArrayobj[position].nome;
console.log(nome)
console.log(persominore)
text.innerText = `la bici più leggera è:${nome} e pesa ${persominore}kg`

// let result = bikeArrayobj.filter((bike) => {

//     if (bikeArrayobj.name === 'mont') {
//         console.log('1');
//     }
// })
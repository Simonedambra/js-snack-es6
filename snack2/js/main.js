'use strict';

'use strict';
const squadArrayobj = [{
    nome: 'ROMA',
    punti: 0,
    falli: 0,
},
{
    nome: 'BARCELLONA',
    punti: 0,
    falli: 0,
},
{
    nome: 'JUVENTUS',
    punti: 0,
    falli: 0,
},
{
    nome: 'LAZIO',
    punti: 0,
    falli: 0,
},
{
    nome: 'AJAX',
    punti: 0,
    falli: 0,
},
{
    nome: 'MANCHESTER',
    punti: 0,
    falli: 0,
},
]

for (let i = 0; i < squadArrayobj.length; i++) {
    let puntign = Math.floor(Math.random() * (50 + 1))
    let fallign = Math.floor(Math.random() * (15 + 1))
    squadArrayobj[i].punti = (puntign)
    squadArrayobj[i].falli = (fallign)
}
console.log(squadArrayobj)

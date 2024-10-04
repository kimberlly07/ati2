// let nomeUsuário = 'Kimberlly e Maria';
// alert('Kimberlly e Maria')
// function soma (num1, num2){
// return num1+num2
// }
// console.log(soma(6,4));
// function areaQuadrado(lado){
// return lado**2;
// }
// console.log(areaQuadrado(6)); 
// let media = function(num1, num2, num3){
//     return (num1+num2+num3)/3
// }
// let mediaTresvalores = ('Média de três valores')
// let num1 = parseInt(prompt('Qual o número?'));
// let num2 = parseInt(prompt('Qual o número?'));
// let num3 = parseInt(prompt('Qual o número?'));
// function media (x,y,z){
//     return(x,y,z)/z;
// }
// console.log(media(1,2,3));
// document.write(mediaTresvalores);
let estados=
['Distrito Federal','Goiás','Mato Grosso','Mato Grosso do Sul','Alagoas','Bahia','Ceará','Maranhão','Paraíba','Pernambuco','Piauí','Rio Grande do Norte','Sergipe','Acre','Amapá','Amazonas','Pará','Rondônia','Roraima','Tocantis','Espírito Santo','Minas Gerais','Rio de Janeiro','São Paulo','Paraná','Rio Grande do Sul','Santa Catarina'
];
// let i=0;
// while(i<estados.length){
// console.log(i);
// console.log(estados[i]);
// i++;
// }
for (let index = 0; index < estados.length; index++) {
    const element = estados[index];
    console.log(index);
    console.log(estados[index]);
    }
let idade=7
if(idade>17) {
console.log();
console.log('Pode dirigir');
}
else{
console.log('Ilegal dirigir');
}
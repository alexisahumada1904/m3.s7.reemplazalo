

let texto = $("#texto").text()

let sedRegex= /sed/gi
let vehiculaRegex= /vehicula/gi
let vivamusRegex= /vivamus/gi
let namRegex= /nam/gi
let erosRegex= /eros/gi
let vestibulumRegex= /vestibulum/gi
let quamRegex= /\bquam\b/gi
let sollicitudinRegex= /sollicitudin/gi
let finibusRegex= /finibus/gi
let dictumRegex= /dictum/gi
let morbiRegex= /morbi/gi

let sedContador = 0; let vehiculaContador = 0;let vivamusContador = 0; let namContador = 0; let erosContador = 0;let vestibulumContador = 0; let quamContador = 0; let sollicitudinContador = 0; let finibusContador = 0; let dictumContador = 0; let morbiContador = 0


texto = texto.replaceAll(sedRegex, function() {
  sedContador++;
   return`<strong>UNO</strong>`;
}).replaceAll(vehiculaRegex, function() {
  vehiculaContador++;
  return`<strong>DOS</strong>`;
}).replaceAll(vivamusRegex, function() {
  vivamusContador++;
  return`<strong>TRES</strong>`;
}).replaceAll(namRegex, function() {
  namContador++;
  return`<strong>CUATRO</strong>`;
}).replaceAll(erosRegex, function() {
  erosContador++;
  return`<strong>CINCO</strong>`;
}).replaceAll(vestibulumRegex, function() {
  vestibulumContador++;
  return`<strong>SEIS</strong>`;
}).replaceAll(quamRegex, function() {
  quamContador++;
  return`<strong>SIETE</strong>`;
}).replaceAll(sollicitudinRegex, function() {
  sollicitudinContador++;
  return`<strong>OCHO</strong>`;
}).replaceAll(finibusRegex, function() {
  finibusContador++;
  return`<strong>NUEVE</strong>`;
}).replaceAll(dictumRegex, function() {
  dictumContador++;
  return`<strong>DIEZ</strong>`;
}).replaceAll(morbiRegex, function() {
  morbiContador++;
  return`<strong>ONCE</strong>`;
})

$("#texto").html(texto)

console.log(`%csed: ${sedContador}`,'color: #FF5500')
console.log(`%cvehicula: ${vehiculaContador}`,'color: #FF99B2')
console.log(`%cvivamus: ${vivamusContador}`,'color: #FF99F5')
console.log(`%cnam: ${namContador}`,'color: #BB99FF')
console.log(`%ceros: ${erosContador}`,'color: #99C5FE')
console.log(`%cvestibulum: ${vestibulumContador}`,'color: #00CEFF')
console.log(`%cquam: ${quamContador}`,'color: #01FFFE')
console.log(`%csollicitudin: ${sollicitudinContador}`,'color: #00FF9F')
console.log(`%cfinibus: ${finibusContador}`,'color: #B6FF01')
console.log(`%cdictum: ${dictumContador}`,'color: #FFFF00')
console.log(`%cmorbi: ${morbiContador}`,'color: #FFB600')
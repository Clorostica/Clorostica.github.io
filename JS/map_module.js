import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0
let canvas = document.getElementById("cobe")

const globe = createGlobe(canvas, {
  devicePixelRatio: 1,
  width: 350,
  height: 350,
  phi: 0,
  theta: 0.7,
  dark: 1,
  diffuse: 1,
  scale: 1,
  mapSamples: 26000,
  mapBrightness: 8,
  baseColor: [1, 1, 1],
  markerColor: [255, 0, 0],
  glowColor: [1, 1, 1],
  offset: [0, 0],
  markers: [
    { location: [52.52, 13.405], size: 0.04 }, 
  ],
  onRender: (state) => {
    state.phi = phi
    phi += 0.008
  },
})

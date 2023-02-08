// Import the THREE.js library and additional dependencies
import * as THREE from 'three'
import "./style.scss"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';
import translate from 'translate-google-api';

const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"; 
const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"; 
const worldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"
let status = 'rotate'
let lang = 'en'

// Init
// Create a new THREE.js scene
const scene  = new THREE.Scene();
// Create a sphere geometry with specified size and detail
const geometry = new THREE.SphereGeometry(3, 64, 64)


// Sphere
// Create a material for the sphere with specified color and roughness
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load( textureURL );
const displacementMap = textureLoader.load( displacementURL );
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: texture, displacementMap: displacementMap,
  displacementScale: 0.06,
  bumpMap: displacementMap,
  bumpScale: 0.04,
    reflectivity:0, 
    shininess :0
})
// Create a moon using the sphere geometry and material
const moon = new THREE.Mesh(geometry, material)
// Add the moon to the scene
scene.add(moon)

// SkyDome
const skydomeTexture = new THREE.TextureLoader().load('https://storage.googleapis.com/umas_public_assets/michaelBay/free_star_sky_hdri_spherical_map_by_kirriaa_dbw8p0w%20(1).jpg')
// 帶入材質，設定內外面
const skydomeMaterial = new THREE.MeshBasicMaterial( { map: skydomeTexture, side: THREE.DoubleSide})
const skydomeGeometry = new THREE.SphereGeometry(50,50,50)
const skydome = new THREE.Mesh(skydomeGeometry, skydomeMaterial);
scene.add(skydome);


// Sizes
// Store the current width and height of the window in an object
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Light
// Create a point light with specified color, intensity, and distance
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
// Set the position of the light
light.position.set(-100, 10,50);
// Increase the intensity of the light
light.intensity = 1.25
// Add the light to the scene
scene.add(light);


// Camera
// Create a perspective camera with specified field of view, aspect ratio, near and far clipping plane
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1, 100)
// Set the position of the camera along the z-axis
camera.position.z = 10
// Add the camera to the scene
scene.add(camera)


// Renderer
// Create a WebGL renderer and attach it to a canvas element
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({canvas})
// Set the size of the renderer
renderer.setSize(sizes.width, sizes.height)
// Set the pixel ratio of the renderer
renderer.setPixelRatio(2)
// Render the scene and camera using the renderer
renderer.render(scene, camera)


// Controls
// Create orbit controls for the camera
const controls = new OrbitControls(camera, canvas)
// // Enable damping effect in the controls
// controls.enableDamping = true
// // Disable panning in the controls
// controls.enablePan = false
// // Disable zooming in the controls
// controls.enableZoom = false
// // Enable automatic rotation in the controls
// controls.autoRotate = true
// // Set the speed of the automatic rotation in the controls
// controls.autoRotateSpeed = 10


// Action
// Listen to window resize events
window.addEventListener('resize', () => {
  // Update the size of the scene
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update the aspect ratio of the camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height;
  // Update the size of the renderer
  renderer.setSize(sizes.width, sizes.height)
})
// moon.rotation.x = 3.1415*0.02;
// moon.rotation.y = 3.1415*1.54;


// Loop
// Create a loop for the animation
const animate = () => {
  console.log('status', status)
  if(status === 'stop'){
    return
  }
  moon.rotation.y += 0.01;
  moon.rotation.x += 0.0005;
  skydome.rotation.y += 0.001
  // Update the camera controls
  controls.update()
  // Render the scene and camera
  renderer.render(scene, camera)
  // Request the next animation frame
  window.requestAnimationFrame(animate)
}
// Start the animation loop
animate()


// Timeline
const t1 = gsap.timeline({defaults: {duration: 1}})
// animate scaling of object.scale from (0,0,0) to (1,1,1) over 1 second
t1.fromTo(moon.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
// animate movement of nav from y position -100% to 0% over 1 second
t1.fromTo('nav', {y: '-100%'}, {y: '0%'})
// animate opacity of element with class .title from 0 to 1 over 1 second
t1.fromTo([".title", ".btn"], {opacity: 0}, {opacity: 1})


// Mouse Animation
let mouseDown = false;
// let rgb = [];
// // set mouseDown to true when mouse button is down
// window.addEventListener('mousedown', () => {mouseDown = true});
// // set mouseDown to false when mouse button is up
// window.addEventListener('mouseup', () => {mouseDown = false});
// // update the color of moon.material.color based on mouse movement
// window.addEventListener('mousemove', e => {
//   if(mouseDown) { 
//     // calculate rgb based on mouse position
//     rgb = [
//       Math.round((e.pageX / sizes.width) * 255),
//       Math.round((e.pageX / sizes.height) * 255),
//       150,
//     ];
//     // create a new THREE.Color based on `rgb`
//     let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
//     // animate `moon.material.color` to new color
//     gsap.to(moon.material.color, {r: newColor.r, g: newColor.g, b: newColor.b});
//   }
// })


// Click Event
const btn = document.querySelector("#btn");
const quote = document.querySelector(".title");
const language = document.querySelector(".lang");
const explore = document.querySelector(".explore");
const sphere = document.querySelector('.sphere')
const quotesEn = [
  "Every day is a journey, and the moon is just a stage.",
  "A full moon is like a spotlight on the human condition.",
  "The moon brings magic to life, but it also brings mystery.",
  "The moon may be a friend for the night, but the sun is a friend forever.",
  "The moon is always there, shining its light on us, no matter what we do.",
  "Under the moonlight, the night seems shorter and the heart feels lighter.",
  "The moon brings out the beauty in the darkness and the light within us.",
  "A crescent moon is a reminder that even the smallest sliver of light can make a difference.",
  "The moon is a symbol of change and growth, just like the tides of life.",
  "The moon is a silent witness to the passage of time and the changes it brings.",
  "The moon is a constant companion, always there to light our way in the darkness.",
  "The moon is a reminder of the cyclical nature of life, and the inevitability of change.",
  "The moon is a symbol of mystery and enchantment, inviting us to dream and imagine.",
  "The moon is a reminder of the delicate balance between light and dark, and the importance of finding harmony within ourselves.",
  "A full moon is a symbol of completion, reminding us to celebrate our achievements and the milestones in our lives.",
  "The moon is a symbol of the feminine, reminding us to embrace our intuition and inner wisdom.",
  "The moon is a reminder of the power of nature, and the majesty of the universe.",
  "The moon is a symbol of hope, reminding us that even in the darkest of nights, the light will always return.",
  "The moon is a symbol of the eternal, reminding us that some things never change, no matter how much time passes.",
  "The moon is a symbol of resilience, reminding us that even though it may wane, it will always wax again.",
  "The moon is a symbol of mystery and the unknown, inviting us to explore the uncharted territories within ourselves.",
  "The moon is a symbol of unity, reminding us that we are all connected by the same celestial body.",
  "The moon is a reminder of the importance of letting go and embracing change, just like the tides.",
];
const quotesTW = [
  "月圓人團圓，月缺人散散。",
  "月高光明照，人高心情好。",
  "月亮有陰晴圓缺，生活有喜怒哀樂。",
  "月黑風高夜長，人靜心境安寧。",
  "月圓人團圓，喜氣洋洋。",
  "月圓影明朗，知識普遍宏開。",
  "月有陰晴圓缺，情有陰陽秀。",
  "月到中秋人團圓，美滿心情伴隨著。",
  "月黑風高秋夜長，家人團聚心溫暖。",
  "月亮如鑑，心境如月，圓滿生活。",
  "月黑風高走馬路，總比月亮光芒好。",
  "月亮好像一個盤子，有時是圓的，有時是半圓的。",
  "月亮會亮，即使你沒有看到它。",
  "月亮是一個藍色的燈，照亮夜空中的星星。",
  "月亮會顯示在天空中，只有當夜幕降下"
];

const clickHandler = () => {  
  btn.addEventListener("click", function() {
    if(status === 'stop'){
      quote.style.fontSize = "";
      if(lang === 'en'){
        quote.innerText = 'Give it a spin'
        btn.innerText = 'Get Your Way'
      } else {
        quote.innerText = '用手指轉一轉'
        btn.innerText = '找靈感'
      }
      status = 'rotate'
      controls.enabled = true;
      animate()
    } else if(status === 'rotate') {
      quote.style.fontSize = "20px";
      if(lang === 'en'){
        quote.innerHTML = quotesEn[Math.floor(Math.random() * quotesEn.length)];
        btn.innerText = 'Back' 
      } else {
        quote.innerHTML = quotesTW[Math.floor(Math.random() * quotesTW.length)];
        btn.innerText = '重設' 
      }
      status = 'stop'
      controls.enabled = false;
    }
  });
}
clickHandler()


// Click Lang 
const clickLangHandler = () => {

  
  language.addEventListener("click",async function() {
    if(lang === 'en'){
      language.innerText = '繁體中文'
      lang = 'tw'
      if(status === 'stop'){
        quote.innerText = quotesTW[Math.floor(Math.random() * quotesTW.length)];
        btn.innerText = '重設'
      } else {
        quote.innerText = '用手指轉一轉'
        btn.innerText = '找靈感'
      }
      explore.innerText = '探索'
      sphere.innerText = '球球'
    } else {
      btn.innerText = 'Back'
      explore.innerText = 'explore'
      sphere.innerText = 'sphere'
      if(status === 'stop'){
        quote.innerText = quotesEn[Math.floor(Math.random() * quotesEn.length)];
        btn.innerText = 'Back'
      } else {
        btn.innerText = 'Get Your Way'
        quote.innerText = 'Give it a spin'
      }
      language.innerText = 'English'
      lang = 'en'
    }
  });
}
clickLangHandler()
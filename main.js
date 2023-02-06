// Import the THREE.js library and additional dependencies
import * as THREE from 'three'
import "./style.css"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';

// Create a new THREE.js scene
const scene  = new THREE.Scene();
// Create a sphere geometry with specified size and detail
const geometry = new THREE.SphereGeometry(3, 64, 64)
// Create a material for the sphere with specified color and roughness
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  roughness: 0.7
})

// Create a mesh using the sphere geometry and material
const mesh = new THREE.Mesh(geometry, material)
// Add the mesh to the scene
scene.add(mesh)

// Store the current width and height of the window in an object
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Create a point light with specified color, intensity, and distance
const light = new THREE.PointLight(0xfffff, 1, 100)
// Set the position of the light
light.position.set(0, 10, 10)
// Increase the intensity of the light
light.intensity = 1.25
// Add the light to the scene
scene.add(light)

// Create a perspective camera with specified field of view, aspect ratio, near and far clipping plane
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height , 0.1, 100)
// Set the position of the camera along the z-axis
camera.position.z = 20
// Add the camera to the scene
scene.add(camera)


// Create a WebGL renderer and attach it to a canvas element
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({canvas})
// Set the size of the renderer
renderer.setSize(sizes.width, sizes.height)
// Set the pixel ratio of the renderer
renderer.setPixelRatio(2)
// Render the scene and camera using the renderer
renderer.render(scene, camera)


// Create orbit controls for the camera
const controls = new OrbitControls(camera, canvas)
// Enable damping effect in the controls
controls.enableDamping = true
// Disable panning in the controls
controls.enablePan = false
// Disable zooming in the controls
controls.enableZoom = false
// Enable automatic rotation in the controls
controls.autoRotate = true
// Set the speed of the automatic rotation in the controls
controls.autoRotateSpeed = 10


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

// Create a loop for the animation
const loop = () => {
  // Update the camera controls
  controls.update()
  // Render the scene and camera
  renderer.render(scene, camera)
  // Request the next animation frame
  window.requestAnimationFrame(loop)
}
// Start the animation loop
loop()


// Timeline
const t1 = gsap.timeline({defaults: {duration: 1}})
// animate scaling of object.scale from (0,0,0) to (1,1,1) over 1 second
t1.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
// animate movement of nav from y position -100% to 0% over 1 second
t1.fromTo('nav', {y: '-100%'}, {y: '0%'})
// animate opacity of element with class .title from 0 to 1 over 1 second
t1.fromTo(".title", {opacity: 0}, {opacity: 1})
// Mouse Animation
let mouseDown = false;
let rgb = [];
// set mouseDown to true when mouse button is down
window.addEventListener('mousedown', () => {mouseDown = true});
// set mouseDown to false when mouse button is up
window.addEventListener('mouseup', () => {mouseDown = false});
// update the color of mesh.material.color based on mouse movement
window.addEventListener('mousemove', e => {
  if(mouseDown) { 
    // calculate rgb based on mouse position
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageX / sizes.height) * 255),
      150,
    ];
    // create a new THREE.Color based on `rgb`
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    // animate `mesh.material.color` to new color
    gsap.to(mesh.material.color, {r: newColor.r, g: newColor.g, b: newColor.b});
  }
})
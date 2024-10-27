import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, 144/ 100, 0.2, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.SphereGeometry( 5, 32, 32, 32);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 15;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;


	renderer.render( scene, camera );

}
// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// Load MTL and OBJ (ไม่ใช้ setPath())
const mtlLoader = new THREE.MTLLoader();
mtlLoader.load('frog.mtl', (materials) => {
    materials.preload();

    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('frog.obj', (object) => {
        scene.add(object);
    });
});

// Animate
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
  camera.position.set(0, 1, 3);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(3, 5, 2);
  scene.add(light);

  // โหลด MTL และ OBJ
  const mtlLoader = new THREE.MTLLoader();
  mtlLoader.load('frog.mtl', function(materials) {
    materials.preload();

    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('frog.obj', function(object) {
      object.position.set(0, 0, 0);
      scene.add(object);
    }, undefined, function(error){
      console.error(error);
    });
});


  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

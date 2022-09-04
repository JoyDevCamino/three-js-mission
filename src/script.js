import "./style.css";
import * as THREE from "three";
import GUI from "lil-gui";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Scene
const scene = new THREE.Scene();

// Object
const AxisHelper = new THREE.AxesHelper(1);
scene.add(AxisHelper);

const group = new THREE.Group();

const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh(geometry1, material1);

const wireframe = new THREE.WireframeGeometry(geometry1);
const wireframeLineMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, depthTest: false });
const wireframeLine = new THREE.LineSegments(wireframe, wireframeLineMaterial);

group.add(cube);
group.add(wireframeLine);
group.position.set(0, 2, -2);

scene.add(group);

const geometry2 = new THREE.TorusKnotGeometry();
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const torusKnot = new THREE.Mesh(geometry2, material2);
torusKnot.position.set(-5, 2, -10);
scene.add(torusKnot);

const geometry3 = new THREE.SphereGeometry();
const material3 = new THREE.MeshBasicMaterial({ color: 0xffaaaa });
const sphere = new THREE.Mesh(geometry3, material3);
sphere.position.set(5, -2, -5);
scene.add(sphere);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera);

// Debugger
const gui = new GUI();
const cameraFolder = gui.addFolder("camera");
cameraFolder.add(camera, "fov", 50, 180).onChange((v) => {
  camera.updateProjectionMatrix();
});
const cameraPosition = cameraFolder.addFolder("position");
cameraPosition.add(camera.position, "x", -30, 30, 0.01);
cameraPosition.add(camera.position, "y", -30, 30, 0.01);
cameraPosition.add(camera.position, "z", -30, 30, 0.01);

const cameraRotation = cameraFolder.addFolder("rotation");
cameraRotation.add(camera.rotation, "x", -Math.PI, Math.PI, 0.001);
cameraRotation.add(camera.rotation, "y", -Math.PI, Math.PI, 0.001);
cameraRotation.add(camera.rotation, "z", -Math.PI, Math.PI, 0.001);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
let growFlag = true;
//group 이동
gsap.from(group.position, { duration: 1, x: -2, y: -2, z: -2 });
gsap.to(group.position, { yoyo: true, repeat: -1, duration: 1, x: 2, y: 2, z: 2 });

const tick = () => {
  //geometry2 회전
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;

  //geometry3 사이즈 변환
  if (sphere.scale.x > 2) {
    growFlag = false;
    sphere.scale.x -= 0.01;
    sphere.scale.y -= 0.01;
    sphere.scale.z -= 0.01;
  } else if (sphere.scale.x <= 2 && sphere.scale.x >= 0.5) {
    if (growFlag) {
      sphere.scale.x += 0.01;
      sphere.scale.y += 0.01;
      sphere.scale.z += 0.01;
    } else {
      sphere.scale.x -= 0.01;
      sphere.scale.y -= 0.01;
      sphere.scale.z -= 0.01;
    }
  } else if (sphere.scale.x < 0.5) {
    growFlag = true;
    sphere.scale.x += 0.01;
    sphere.scale.y += 0.01;
    sphere.scale.z += 0.01;
  }
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

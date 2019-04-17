
import * as THREE from 'three';

export default scene => {

  const lightIn = new THREE.PointLight('#4CAF50', 30);
  const lightOut = new THREE.PointLight('#2196F3', 10);
  lightOut.position.set(40,20,40);

  scene.add(lightIn);
  scene.add(lightOut);

  const rad = 40;

  function update(time) {
    const x = rad * Math.sin(time);
    lightOut.position.x = x;
  }

  return {
    update
  };
};

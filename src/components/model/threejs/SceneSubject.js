import * as THREE from 'three';
// import alphaTexture from '../../../assets/textures/stripes_gradient.jpg';

export default scene => {
  const group = new THREE.Group();
  const subjectGeometry0 = (new THREE.IcosahedronGeometry(1, 3));
  const subjectGeometry1 = (new THREE.IcosahedronGeometry(2, 3));
  const subjectGeometry2 = (new THREE.IcosahedronGeometry(3, 3));
  const subjectGeometry3 = (new THREE.IcosahedronGeometry(4, 3));
  const subjectGeometry4 = (new THREE.IcosahedronGeometry(5, 3));
  const subjectGeometry5 = (new THREE.IcosahedronGeometry(6, 3));
  const subjectGeometry6 = (new THREE.IcosahedronGeometry(7, 3));

  const geometry = new THREE.SphereGeometry(1, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
  const material = new THREE.MeshStandardMaterial();
  // material.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  // material.alphaMap.magFilter = THREE.NearestFilter;
  // material.alphaMap.wrapT = THREE.RepeatWrapping;
  // material.alphaMap.repeat.y = 2;
  material.color = 0x000000;
  const sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  const wire0 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry0),
    new THREE.LineBasicMaterial()
  );
  const wire1 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry1),
    new THREE.LineBasicMaterial()
  );
  const wire2 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry2),
    new THREE.LineBasicMaterial()
  );
  const wire3 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry3),
    new THREE.LineBasicMaterial()
  );
  const wire4 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry4),
    new THREE.LineBasicMaterial()
  );
  const wire5 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry5),
    new THREE.LineBasicMaterial()
  );
  const wire6 = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry6),
    new THREE.LineBasicMaterial()
  );

  group.add(wire0);
  group.add(wire1);
  group.add(wire2);
  group.add(wire3);
  group.add(wire4);
  group.add(wire5);
  group.add(wire6);
  scene.add(group);

  group.rotation.z = Math.PI / 4;

  const speed = .25;
  const textureOffsetSpeed = 1;

  // function deformGeometry(geometry) {
  //   for (let i=0; i<geometry.vertices.length; i+=10) {
  //     const scalar = 1 * Math.random();
  //     geometry.vertices[i].multiplyScalar(scalar);
  //   }
  //
  //   return geometry;
  // }

  function update(time) {
    const angle = time*speed;

    group.rotation.y = angle;

    // material.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed / 5;

    wire0.material.color.setHSL( 0, 0.5, 0.5 );
    wire1.material.color.setHSL( 0.1, 0.5, 0.5 );
    wire2.material.color.setHSL( 0.2, 0.5, 0.5 );
    wire3.material.color.setHSL( 0.3, 0.5, 0.5 );
    wire4.material.color.setHSL( 0.4, 0.5, 0.5 );
    wire5.material.color.setHSL( 0.5, 0.5, 0.5 );
    wire6.material.color.setHSL( 0.6, 0.5, 0.5 );

    const scale = (Math.sin(angle*8)+6.4)/3;
    const scale2 = (Math.sin(angle*8)+6.4)*5/33;
    wire0.scale.set(scale * 1.05, scale, scale * 1.05);
    wire1.scale.set(scale * 1.05, scale, scale * 1.05);
    wire2.scale.set(scale * 1.05, scale, scale * 1.05);
    wire3.scale.set(scale * 1.05, scale, scale * 1.05);
    wire4.scale.set(scale * 1.05, scale, scale * 1.05);
    wire5.scale.set(scale * 1.05, scale, scale * 1.05);
    wire6.scale.set(scale * 1.05, scale, scale * 1.05);
    sphere.scale.set(scale2, scale2, scale2);
  }

  return {
    update
  };
};

import * as THREE from 'three';
import alphaTexture from '../../../assets/textures/stripes_gradient.jpg';

export default scene => {
  const group = new THREE.Group();

  const subjectGeometry = new THREE.IcosahedronGeometry(10, 0);

  const subjectMaterial = new THREE.MeshStandardMaterial({ color: '#ff0000', transparent: true, side: THREE.DoubleSide, alphaTest: 0.4 });
  subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
  subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
  subjectMaterial.alphaMap.repeat.y = 4;
  const subjectGeometry2 = deformGeometry(new THREE.IcosahedronGeometry(7.5, 5));
  const subjectGeometry3 = new THREE.IcosahedronGeometry(10, 3);

  const subjectMaterial2 = new THREE.MeshStandardMaterial({ color: '#ff00ff', transparent: false, side: THREE.DoubleSide, alphaTest: 0.25 });
  subjectMaterial2.alphaMap = new THREE.TextureLoader().load(alphaTexture);
  subjectMaterial2.alphaMap.magFilter = THREE.NearestFilter;
  subjectMaterial2.alphaMap.wrapT = THREE.RepeatWrapping;
  subjectMaterial2.alphaMap.repeat.y = 11;

  const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);
  const subjectMesh2 = new THREE.Mesh(subjectGeometry2, subjectMaterial2);

  const subjectWireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(subjectGeometry3),
    new THREE.LineBasicMaterial()
  );

  group.add(subjectMesh);
  group.add(subjectWireframe);
  group.add(subjectMesh2);
  scene.add(group);

  group.rotation.z = Math.PI;

  const speed = .25;
  const textureOffsetSpeed = 1;

  function deformGeometry(geometry) {
    for (let i=0; i<geometry.vertices.length; i+=1) {
      const scalar = 1 * Math.random();
      geometry.vertices[i].multiplyScalar(scalar);
    }

    return geometry;
  }

  function update(time) {
    const angle = time*speed;

    group.rotation.y = angle;

    subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed / 5;
    subjectMaterial2.alphaMap.offset.y = -0.55 + time * textureOffsetSpeed * 2;

    subjectWireframe.material.color.setHSL( 0.5 * Math.sin(angle), 0.5, 0.5 );

    const scale = (Math.sin(angle*8)+6.4)/5;
    const scale2 = (Math.cos(angle*8)+6.4)/11;
    subjectWireframe.scale.set(scale * 1.05, scale, scale * 1.05);
    subjectMesh.scale.set(scale2, scale2, scale2);
  }

  return {
    update
  };
};

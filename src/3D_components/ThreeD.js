import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

const SpinMesh = ({ position, args, color }) => {
  const [expand, setExpand] = useState(false);
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.y += 0.025;
    mesh.current.rotation.x -= 0.035;
  });

  const props = useSpring({
    scale: expand ? [2, 2, 2] : args,
    position: expand ? [0, 0, 0] : position,
  });

  return (
    <>
      <a.mesh
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        position={props.position}
        ref={mesh}
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <meshNormalMaterial
          attach="material"
          color={color}
          speed={1}
          factor={0.5}
        />
      </a.mesh>
      <OrbitControls />
    </>
  );
};

const CircleMesh = ({ args, position, color }) => {

  return (
    <>
      <a.mesh position={position}>
        <sphereGeometry args={args} attach="geometry" />
        <meshNormalMaterial
          attach="material"
          color={color}
          speed={1}
          factor={3}
        />
      </a.mesh>
      <OrbitControls />
    </>
  );
};



const ThreeD = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 10, 20], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />

        <SpinMesh position={[0, 0, 0]} args={[1.5, 1.5, 1.5]} color="pink" />
        <CircleMesh position={[-5,5,0]} args={[0.7, 30, 30]} color="blue" />
        <CircleMesh position={[5,-5,0]} args={[0.7, 30, 30]} color='purple' /> 
        <CircleMesh position={[-5,-5,0]} args={[0.7, 30, 30]} color='purple' /> 
        <CircleMesh position={[5,5,0]} args={[0.7, 30, 30]} color='purple' /> 
        {/* <CircleMesh position={[3,3,0]} args={[0.7, 30, 30]} color="blue" />
        <CircleMesh position={[-3,-3,0]} args={[0.7, 30, 30]} color='purple' /> 
        <CircleMesh position={[-3,3,0]} args={[0.7, 30, 30]} color='purple' /> 
        <CircleMesh position={[3,-3,0]} args={[0.7, 30, 30]} color='purple' />  */}
      </Canvas>
    </>
  );
};

export default ThreeD;

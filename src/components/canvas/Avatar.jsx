/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/648201acc2079c6b56bdb977.glb
*/

import { Suspense, useEffect, useRef } from 'react';
import { Float, OrbitControls, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader';


const Avatar = (props) => {

  const group = useRef();

  const { nodes, materials } = useGLTF('models/648201acc2079c6b56bdb977.glb')

  const { animations: floatingAnimation } = useFBX("animation/Floating.fbx")

  floatingAnimation[0].name = "Floating";

  const { actions } = useAnimations(floatingAnimation, group)


  useEffect(() => {
    actions["Floating"].reset().play();
  })

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

const AvatarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 6,
        position: [-4, 30, 0]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // enableRotate={false}
          // maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />  
        <Float
           speed={1.5}
           rotation={[Math.PI / 2, 0, 0]} floatIntensity={2} 
        >
          <Avatar position-y="-0.8" rotation-y="-1.5"  />
        </Float>
        <spotLight 
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1} />
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('models/648201acc2079c6b56bdb977.glb')

export default AvatarCanvas
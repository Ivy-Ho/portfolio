/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/64ae7cdfdbec0e3029da2609.glb.glb
*/

// ContactAvatar

import { Suspense, useContext, useEffect, useRef, useState } from 'react';
import { Float, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader';
import { ScreenContext } from '../../contexts/ScreenContext';

const ContactAvatar = (props) => {

  const group = useRef();

  const { nodes, materials } = useGLTF('models/64ae7cdfdbec0e3029da2609.glb')

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
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

const ContactAvatarCanvas = () => {

const { isPc } = useContext(ScreenContext);

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60, 
        // position: [0, 0, 5]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Float
           speed={1.5}
          //  rotation={[Math.PI / 2, 0, 0]} 
           floatIntensity={2} 
        >
          <ContactAvatar
            scale={isPc ? 2.2 : 2}
            position-y={isPc ? -2.8  : -2.5}
          />
        </Float>
        <spotLight 
          color="#ba62f9"
          position={[-20, 20, 8]}
          angle={Math.PI / 2}
          penumbra={1}
          intensity={1.6}
        />
        <ambientLight
          color="#cee6f4"
          intensity={0.6}
        />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('models/64ae7cdfdbec0e3029da2609.glb')
useFBX.preload('animation/Floating.fbx')

export default ContactAvatarCanvas
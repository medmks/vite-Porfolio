import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from '../Loader'
const Earth = () => {
  const earth =useGLTF('./planet/scene.gltf')

  return (

    <primitive
    object={earth.scene}
    scale={2.5}
    position-y={0}
    rotation-y={0}

    
    >

    </primitive>
  )
}
const EarthCanvas=()=>{
  return(  
  <Canvas frameloop="demand"   dpr={[1, 2]} shadows camera={{
    fov:45,
    near:0.1,
    far:200,

    position:[-4, 3, 6],
  }}
  gl={{preserveDrawingBuffer:true}}

  >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        
        />
      <Earth/>
      </Suspense>
      <Preload all/>
</Canvas>)

}
export default EarthCanvas
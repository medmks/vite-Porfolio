import { Suspense, useRef} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { Points,PointMaterial,Preload, } from '@react-three/drei'
// import * as THREE from 'three'

import * as random from "maath/random/dist/maath-random.cjs"
const Stars = () => {

  const ref=useRef(null);
  const sphere=random.inSphere(new Float32Array(5000),{radius:1.2})
  useFrame((state,delta)=>{
    if(ref.current){
          ref.current.rotation.x -=delta /20
          ref.current.rotation.y -=delta /30
    }

  })
  return ( 
      <group rotation={[0,0,Math.PI/4]} >
        <Points ref={ref} positions={sphere} stride={3} frustumCulled >
          <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
  )
}
const StarsCanvas=()=>{
  return(
    <div className="h-auto w-full absolute inset-0 z-[-1]">
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>

    </div>
  )

  
}

export default StarsCanvas
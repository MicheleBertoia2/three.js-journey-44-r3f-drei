import { OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial} from "@react-three/drei"
import { useRef } from "react"

export default function Experience()
{

    const cubeRef = useRef()
    const sphereRef = useRef()
    

    return <>

        <OrbitControls makeDefault/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls 
            anchor={[0, 0, 0,]} 
            depthTest={false}
            lineWidth={1}
            axisColors={[ '#9381ff', '#ff3d6d', '#7ae582' ]}
            scale={100}
            fixed= {true}
            >
        <mesh position-x={ - 2 } ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html position={[1, 1, 0]} wrapperClass="label" center distanceFactor={8} occlude={[cubeRef, sphereRef]}>That's a Sphere!</Html>
        </mesh>
        </PivotControls>

        <mesh position-x={ 2 } scale={ 1.5 } ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode={'translate'}/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={0.5} color={'greenyellow'}/>
        </mesh>
        <Float speed={4} intensity={2}>
            <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            color={'salmon'}
            position-y={2}
            maxWidth={2}
            textAlign="center"
        >I love R3F</Text>
        </Float>
        

    </>
}
import { Canvas } from "@react-three/fiber";
import React from "react";

function App() {
  return (
    <Canvas style={{ height: "100vh", position: "absolute", zIndex: -1 }}>
      <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        {...meshProps} // All THREE.Mesh props are valid
      >
        <meshPhongMaterial color="#f3f3f3" wireframe />
      </RoundedBox>
    </Canvas>
  );
}

export default App;

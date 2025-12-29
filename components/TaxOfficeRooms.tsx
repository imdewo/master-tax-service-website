
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

interface Props {
modelPath: string;
}

export const TaxOfficeRooms: React.FC<Props> = ({ modelPath }) => {
const gltf = useGLTF(modelPath);

return (
<div className="w-full h-[500px] rounded-lg shadow-xl overflow-hidden">
<Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
<ambientLight intensity={0.8} />
<directionalLight position={[5, 5, 5]} />
<primitive object={gltf.scene} />
<OrbitControls enablePan enableZoom enableRotate />
</Canvas>
</div>
);
};

useGLTF.preload("/models/tax_office_rooms.glb");


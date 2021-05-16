import React from 'react';
import {FreeCamera, Vector3, HemisphericLight, MeshBuilder} from '@babylonjs/core';
import SceneComponent from './SceneComponent';
import '../../App.css';
//import '@babylonjs/loaders/OBJ';

let box;


const Anatomy = (/*scene*/)=>{
        // //creates and positions a free camera (non-mesh)
        // var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

        // //targets the camera to scene origin
        // camera.setTarget(Vector3.Zero());

        // const canvas = scene.getEngine().getRenderingCanvas();

        // //attaches the camera to the canvas
        // camera.attachControl(canvas,true);

        // //this creates a light, aiming 0, 1, 0 - to the sky (non-mesh)
        // var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

        // //default intensity is 1. dim the light a small amount
        // light.intensity = 0.7;

        // //our built-in 'box' shape
        // box = MeshBuilder.CreateBox("box", {size:2}, scene);

        // //Move the box upward 1/2 its height
        // box.position.y = 1;

        // //built-in 'ground' shape
        // MeshBuilder.CreateGround("ground", {width:6, height:6}, scene);
    };
   
const onRender = (scene) =>{
    if (box !==undefined){
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();

        const rpm = 10;
        box.rotation.y += (rpm/60) * Math.PI * 2 * (deltaTimeInMillis/1000);
    }
};


export default ()=>{
    // <div>
    //     <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas"/>
    // </div>
};
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import styled from 'styled-components'

import ModelPath from '../../../../public/space_ame_camping_-_amelia_watson_hololive.glb'

const Container = styled.div`
  width: 19.9rem;
  height: 41.5rem;
  top: -15rem;
  left: -9.5rem;
  canvas {
    border-radius: 30px;
    width: 100%;
    overflow: hidden;
  }
`

const Box: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const modelRef = useRef<THREE.Group>()
  const mixerRef = useRef<THREE.AnimationMixer>()

  useEffect(() => {
    if (mountRef.current) {
      const mountElement = mountRef.current
      mountElement.innerHTML = ''

      const scene = new THREE.Scene()
      sceneRef.current = scene

      const camera = new THREE.PerspectiveCamera(
        100,
        mountElement.offsetWidth / mountElement.offsetHeight,
        0.1,
        1000,
      )
      cameraRef.current = camera

      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(mountElement.offsetWidth, mountElement.offsetHeight)
      mountElement.appendChild(renderer.domElement)

      const loader = new GLTFLoader()
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/draco-gltf/')
      loader.setDRACOLoader(dracoLoader)

      loader.load(ModelPath, (gltf) => {
        const model = gltf.scene
        model.scale.set(1, 1, 1)
        scene.add(model)
        modelRef.current = model

        const mixer = new THREE.AnimationMixer(model)
        mixerRef.current = mixer

        gltf.animations.forEach((animation) => {
          const action = mixer.clipAction(animation)
          action.play()
        })
      })

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight.position.set(0, 0, 1)
      scene.add(directionalLight)

      const animate = () => {
        requestAnimationFrame(animate)

        const mixer = mixerRef.current
        if (mixer) {
          mixer.update(0.002) // Passa o tempo desde o último frame como argumento
        }

        if (sceneRef.current && cameraRef.current) {
          renderer.render(sceneRef.current, cameraRef.current)
        }
      }

      animate()

      camera.position.set(0, 0.5, 2)
    }
  }, [])

  return <Container ref={mountRef} />
}

export default Box

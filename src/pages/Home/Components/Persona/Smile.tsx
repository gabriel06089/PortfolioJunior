import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'
import textura from '../../../../assets/182-1827420_block-of-grass-from-the-game-minecraft-minecraft.png'
import texturaTop from '../../../../assets/11635-v7.jpg'
import texturaBottom from '../../../../assets/unnamed.png'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Container = styled.div`
  position: absolute;
  width: 19rem;
  height: 28.5rem;
  top: -24.5rem;
  left: -9.5rem;
`

const Box: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const meshRef = useRef<THREE.Mesh>()

  const momentum = useRef<number>(0)
  const scrollYRef = useRef<number>(0)

  useEffect(() => {
    if (mountRef.current) {
      const mountElement = mountRef.current
      mountElement.innerHTML = '' // Limpar conteúdo anterior, se houver
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        mountElement.offsetWidth / mountElement.offsetHeight,
        0.1,
        1000,
      )
      const renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setSize(mountElement.offsetWidth, mountElement.offsetHeight)
      mountElement.appendChild(renderer.domElement)

      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load(textura) // Usar a textura importada
      const textureTop = textureLoader.load(texturaTop) // Usar a textura importada
      const textureBottom = textureLoader.load(texturaBottom) // Usar a textura importada
      const materials = [
        new THREE.MeshStandardMaterial({ map: texture }), // Textura - frente
        new THREE.MeshStandardMaterial({ map: texture }), // Verde - trás
        new THREE.MeshStandardMaterial({ map: textureTop }), // Azul - topo
        new THREE.MeshStandardMaterial({ map: textureBottom }), // Amarelo - base
        new THREE.MeshStandardMaterial({ map: texture }), // Magenta - direita
        new THREE.MeshStandardMaterial({ map: texture }), // Ciano - esquerda
      ]
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const mesh = new THREE.Mesh(geometry, materials)
      scene.add(mesh)
      meshRef.current = mesh

      // Configurar sombras
      renderer.shadowMap.enabled = true
      mesh.castShadow = true
      mesh.receiveShadow = true

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // Luz ambiente suave
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, -0.2) // Luz direcional branca com intensidade 0.6
      directionalLight.position.set(10, 10, 10)
      directionalLight.castShadow = true
      scene.add(directionalLight)

      const resizeHandler = () => {
        camera.aspect = mountElement.offsetWidth / mountElement.offsetHeight
        camera.updateProjectionMatrix()
        renderer.setSize(mountElement.offsetWidth, mountElement.offsetHeight)
      }

      window.addEventListener('resize', resizeHandler)

      const onMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

        mesh.rotation.x = mouseY * Math.PI
        mesh.rotation.y = mouseX * Math.PI
      }

      const onTouchMove = (event: TouchEvent) => {
        const touchX = (event.touches[0].clientX / window.innerWidth) * 2 - 1
        const touchY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1

        mesh.rotation.x = touchY * Math.PI
        mesh.rotation.y = touchX * Math.PI
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('touchmove', onTouchMove)

      const SCROLL_SCALE = 0.0002 // Fator de escala para diminuir a velocidade

      const onScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset
        const scrollDelta = scrollY - scrollYRef.current

        momentum.current = scrollDelta * SCROLL_SCALE * Math.PI

        scrollYRef.current = scrollY
      }

      window.addEventListener('scroll', onScroll)

      camera.position.z = 2

      const animate = () => {
        requestAnimationFrame(animate)

        const mesh = meshRef.current

        if (mesh) {
          mesh.rotation.x += momentum.current

          momentum.current *= 0.99
        }

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        window.removeEventListener('resize', resizeHandler)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [])

  return <Container ref={mountRef} />
}

export default Box

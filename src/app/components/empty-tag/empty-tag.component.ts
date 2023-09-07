import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js'
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';

@Component({
  selector: 'app-empty-tag',
  // templateUrl: './empty-tag.component.html',
  template: '<canvas #canvasElement></canvas>',
  styleUrls: ['./empty-tag.component.scss']
})
export class EmptyTagComponent {
@ViewChild('canvasElement', {static: true}) canvasElementRef: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone){}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

      const renderer = new THREE.WebGLRenderer({
        canvas: this.canvasElementRef.nativeElement
      });

      renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // ABILITY TO ROTATE VIEW
      // const orbit = new OrbitControls(camera, renderer.domElement);

      // OBJECT
      const textureLoader = new THREE.TextureLoader();

      const loader = new TTFLoader();
      // Loading the TTF font file from Fontsource CDN. Can also be the link to font file from Google Fonts
      loader.load('https://api.fontsource.org/v1/fonts/lora/latin-600-italic.ttf', (fontData) => {
        // Convert the parsed fontData to the format Three.js understands
        const font = new Font(fontData);

        // Create the text geometry
        const textGeometry = new TextGeometry('</>', {
          font: font,
          size: 18,
          height: 5,
          curveSegments: 3200,
          bevelEnabled: false,
          bevelThickness: 0.8,
          bevelSize: 0.8,
          bevelSegments: 800,
        });

        // Create a standard material with red color and 50% gloss
        const material = new THREE.MeshStandardMaterial({
          color: '#00db3b',
          roughness: 10,
          wireframe: true,
        });

        // Geometries are attached to meshes so that they get rendered
        const textMesh = new THREE.Mesh(textGeometry, material);
        // Update positioning of the text
        textMesh.position.set(0, 0, 5);
        scene.add(textMesh);

        const pivot = new THREE.Group();
        pivot.add(textMesh)
        scene.add(pivot)
        textMesh.position.set(-22, 0, 0)
        pivot.position.set(0, 0, 0)

        const animate = function() {
          requestAnimationFrame(animate);
          pivot.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();
      });

      // const geometry = new THREE.SphereGeometry(4, 120, 120);
      // const material = new THREE.MeshStandardMaterial({
      //   color: 0x0000AA,
      //   wireframe: true,
      //   map: textureLoader.load('../assets/earth.jpg')
      // });
      // const sphere = new THREE.Mesh(geometry, material);
      // sphere.position.x = 10
      // scene.add(sphere);

      // LIGHTING
      const ambientLight = new THREE.AmbientLight(0xaaaaaa);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xaaaaaa, 1);
      scene.add(directionalLight);
      directionalLight.position.set(100, 70, 15);

      camera.position.z = 35;
      camera.position.y = 8;
      // orbit.update();
    });
  }
}

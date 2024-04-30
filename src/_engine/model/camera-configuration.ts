// camera conf
import { OrthographicCamera, PerspectiveCamera } from "three"

// todo: не нравится мне эта мутабельность, надо чето с этми сделать
export const ThreeJsCameraDefault = new PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  10000,
)
ThreeJsCameraDefault.position.set(0, 90, 220)
ThreeJsCameraDefault.lookAt(0, 0, 0)

const aspect = window.innerWidth / window.innerHeight
export const ThreeJsCameraOrto = new OrthographicCamera(
  (50 * aspect) / -2,
  (50 * aspect) / 2,
  (50 * aspect) / 2,
  (50 * aspect) / -2,
  -0.1,
  20,
)
// should have been centered in using component
ThreeJsCameraOrto.position.set(0, 10, 0)
ThreeJsCameraOrto.zoom = 10
ThreeJsCameraOrto.lookAt(0, 0, 0)

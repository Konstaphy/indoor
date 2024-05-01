import { ReactElement } from "react"
import { OrthographicCamera, PerspectiveCamera } from "three"

export interface IMapEngine<MapProps> {
  renderMap: (props: MapProps) => ReactElement
}

export type EngineConfiguration = {
  camera: OrthographicCamera | PerspectiveCamera
}

export type Engine = "ThreeJS" | "ThreeJSOrto" | "Canvas"

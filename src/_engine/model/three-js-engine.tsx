import { IMapEngine } from "src/_engine/model/engine.types.ts"
import { ThreeJsRenderer } from "src/_engine/ui/three-js-renderer/three-js-renderer.tsx"

type ThreeJsMapProps = {}

export class ThreeJsEngine implements IMapEngine<ThreeJsMapProps> {
  renderMap = (props: ThreeJsMapProps) => {
    console.log(props)
    return <ThreeJsRenderer />
  }
}

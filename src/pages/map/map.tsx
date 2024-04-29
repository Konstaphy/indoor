import { Engine } from "src/_engine/model/engine.types.ts"
import { FC } from "react"
import { ThreeJsEngine } from "src/_engine/model/three-js-engine.tsx"
import { MockedGeoJsonSquare } from "src/shared/model/geo/geojson.ts"

type Props = {
  engine: Engine
}

export const Map: FC<Props> = ({ engine }) => {
  if (engine === "ThreeJS") {
    const engine = new ThreeJsEngine()

    return <>{engine.renderMap({ map: MockedGeoJsonSquare })}</>
  }

  if (engine === "Canvas") {
    return <>Some 2D stuff</>
  }

  throw new Error(
    "Не указан движок для карты, попробуйте перезагрузить страничку",
  )
}

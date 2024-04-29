import { Engine } from "src/_engine/model/engine.types.ts"
import { FC, useEffect, useState } from "react"
import { ThreeJsEngine } from "src/_engine/model/three-js-engine.tsx"
import { getMockedGeoJsonSquare } from "src/shared/model/geo/geojson.ts"
import { GeoJson } from "src/shared/model/geo/geojson.types.ts"

type Props = {
  engine: Engine
}

const Map: FC<Props> = ({ engine }) => {
  const [map, setMap] = useState<GeoJson | null>(null)

  useEffect(() => {
    getMockedGeoJsonSquare().then(setMap)
  }, [])

  if (map === null) {
    return <>Loading...</>
  }

  if (engine === "ThreeJS") {
    const engine = new ThreeJsEngine()

    return <>{engine.renderMap({ map })}</>
  }

  if (engine === "Canvas") {
    return <>Some 2D stuff</>
  }

  throw new Error(
    "Не указан движок для карты, попробуйте перезагрузить страничку",
  )
}

// необходимо для работы саспенса
export default Map

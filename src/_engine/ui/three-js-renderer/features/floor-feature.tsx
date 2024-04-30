import { Shape, Vector2 } from "three"
import { getEdges } from "src/shared/lib/utils/get-edges-by-features.ts"
import { GeoJsonFeature } from "src/shared/model/geo/geojson.types.ts"

type Props = {
  polygonsList: GeoJsonFeature[]
}

export function FloorFeature({ polygonsList }: Props) {
  const minXCoord = getEdges(polygonsList, "x", "min")
  const maxXCoord = getEdges(polygonsList, "x", "max")
  const minYCoord = getEdges(polygonsList, "y", "min")
  const maxYCoord = getEdges(polygonsList, "y", "max")
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <shapeGeometry
        args={[
          new Shape([
            new Vector2(minXCoord, -minYCoord),
            new Vector2(minXCoord, -maxYCoord),
            new Vector2(maxXCoord, -maxYCoord),
            new Vector2(maxXCoord, -minYCoord),
          ]),
        ]}
      />
      <meshBasicMaterial color={"gray"} />
    </mesh>
  )
}

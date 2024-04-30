import { GeoJson } from "src/shared/model/geo/geojson.types.ts"
import { getPolygonsFromGeoJson } from "src/shared/model/geo/geojson.ts"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { PolygonFeatureBox } from "src/_engine/ui/three-js-renderer/polygon-feature-box.tsx"
import { AxesHelper, Color, FogExp2, Shape, Vector2 } from "three"
import { ActiveElementProvider } from "src/_engine/ui/three-js-renderer/context/active-element-context.tsx"

type Props = { map: GeoJson }

/**
 * Renders a Three.js scene of a given map.
 *
 * @param {GeoJson} map - The map data in GeoJSON format.
 * @return {JSX.Element} The rendered Three.js scene.
 */
export const ThreeJsRenderer = ({ map }: Props): JSX.Element => {
  // const meshRef = useRef(null)
  const polygonsList = getPolygonsFromGeoJson(map.features)
  const threeControls = useThree()

  const minXCoord = Math.min(
    ...polygonsList
      .map((polygon) => polygon.geometry.coordinates.map((c) => c[0]))
      .flat(),
  )

  const maxXCoord = Math.max(
    ...polygonsList
      .map((polygon) => polygon.geometry.coordinates.map((c) => c[0]))
      .flat(),
  )

  const minYCoord = Math.min(
    ...polygonsList
      .map((polygon) => polygon.geometry.coordinates.map((c) => c[1]))
      .flat(),
  )

  const maxYCoord = Math.max(
    ...polygonsList
      .map((polygon) => polygon.geometry.coordinates.map((c) => c[1]))
      .flat(),
  )

  useEffect(() => {
    threeControls.scene.background = new Color("#fafaff")
    threeControls.scene.fog = new FogExp2(0xfafaff, 0.01)

    const axesHelper = new AxesHelper(15).setColors("red", "green", "blue")

    threeControls.scene.add(axesHelper)
  }, [threeControls])

  return (
    <ActiveElementProvider>
      {polygonsList.map((_polygon, index) => (
        <PolygonFeatureBox polygon={_polygon} key={index} />
      ))}
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
    </ActiveElementProvider>
  )
}

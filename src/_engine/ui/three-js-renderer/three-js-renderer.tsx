import { GeoJson } from "src/shared/model/geo/geojson.types.ts"
import { getPolygonsFromGeoJson } from "src/shared/model/geo/geojson.ts"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { PolygonFeatureBox } from "src/_engine/ui/three-js-renderer/polygon-feature-box.tsx"
import { Color, FogExp2 } from "three"

export const ThreeJsRenderer = ({ map }: { map: GeoJson }) => {
  // const meshRef = useRef(null)
  const polygonsList = getPolygonsFromGeoJson(map.features)
  const threeControls = useThree()
  useEffect(() => {
    threeControls.scene.background = new Color(0xcccccc)
    threeControls.scene.fog = new FogExp2(0xcccccc, 0.002)

    // const axesHelper = new THREE.AxesHelper(5)
    // threeControls.scene.add(axesHelper)
  }, [threeControls])

  return (
    <>
      {polygonsList.map((_polygon, index) => (
        <PolygonFeatureBox polygon={_polygon} key={index} />
      ))}
    </>
  )
}

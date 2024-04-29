import { GeoJsonFeature } from "src/shared/model/geo/geojson.types.ts"
import { useState } from "react"
import * as THREE from "three"
import { ColorRepresentation } from "three"

export const PolygonFeatureBox = ({ polygon }: { polygon: GeoJsonFeature }) => {
  const [color, setColor] = useState<ColorRepresentation>("pink")

  // creating shape
  const shapePath = new THREE.Shape()
  shapePath.moveTo(
    polygon.geometry.coordinates[0][0],
    polygon.geometry.coordinates[0][1],
  )

  polygon.geometry.coordinates.forEach((coordinate) => {
    shapePath.lineTo(coordinate[0], coordinate[1])
  })
  shapePath.closePath()

  // extruding de shape
  const extrudeSettings = {
    depth: 2,
    steps: 1,
    bevelEnabled: false,
  }

  const geometry = new THREE.ExtrudeGeometry(shapePath, extrudeSettings)
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({
      color: color,
      transparent: true,
      opacity: 0.9,
      blending: 1,
    }),
  )

  geometry.rotateX(Math.PI / 2)

  const edges = new THREE.EdgesGeometry(geometry)
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({
      color: "black",
      opacity: 0.1,
      transparent: true,
    }),
  )

  return (
    <>
      <mesh
        onPointerEnter={() => {
          setColor("#ff6666")
        }}
        onPointerLeave={() => {
          setColor("pink")
        }}
        key={polygon.geometry.type}
      >
        <primitive object={mesh} />
      </mesh>
      <primitive object={line} />
    </>
  )
}

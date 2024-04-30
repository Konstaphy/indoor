import { GeoJsonFeature } from "src/shared/model/geo/geojson.types.ts"
import {
  BufferGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshLambertMaterial,
  Raycaster,
  Shape,
  Vector2,
} from "three"
import { useThree } from "@react-three/fiber"
import { useContext, useEffect, useState } from "react"
import { ActiveElementContext } from "src/_engine/ui/three-js-renderer/context/active-element-context.tsx"
import { ContextActionsContext } from "src/_engine/lib/context-actions/context/context-actions-context.tsx"

type Props = {
  polygon: GeoJsonFeature
}

const lineMaterial = new LineBasicMaterial({
  color: "black",
  opacity: 0.3,
  transparent: true,
})

/**
 * Renders a 3D polygon feature box using Three.js.
 *
 * @param {GeoJsonFeature} polygon - The polygon feature to render.
 * @return {JSX.Element | null} The rendered polygon feature box.
 */
export const PolygonFeature = ({ polygon }: Props): JSX.Element | null => {
  const { camera, scene } = useThree()

  const { activeElement, setActiveElement } = useContext(ActiveElementContext)

  const [meshObject, setMeshObject] = useState<Mesh<
    BufferGeometry,
    MeshLambertMaterial
  > | null>(null)
  const [lineObject, setLineObject] = useState<LineSegments | null>(null)

  const { setContextActionsConf, contextActionsConf } = useContext(
    ContextActionsContext,
  )

  useEffect(() => {
    // creating shape
    const shapePath = new Shape()
    shapePath.moveTo(
      polygon.geometry.coordinates[0][0],
      polygon.geometry.coordinates[0][1],
    )

    polygon.geometry.coordinates.forEach((coordinate) => {
      shapePath.lineTo(coordinate[0], coordinate[1])
    })

    // extruding de shape
    const extrudeSettings = {
      depth: 4,
      steps: 1,
      bevelEnabled: false,
    }
    const geometry = new ExtrudeGeometry([shapePath], extrudeSettings)

    const mesh = new Mesh(
      geometry,
      new MeshLambertMaterial({
        color: "white",
      }),
    )

    setMeshObject(mesh)

    geometry.rotateX(Math.PI / 2)
    geometry.translate(0, 4, 0)

    const edges = new EdgesGeometry(geometry)
    const line = new LineSegments(edges, lineMaterial)
    setLineObject(line)
  }, [polygon, setMeshObject, setLineObject])

  // Проставляем цвет в зависимости от активного элемента
  useEffect(() => {
    if (meshObject?.uuid === activeElement) {
      if (!Array.isArray(meshObject.material)) {
        meshObject.material.color.set("red")
      }
    } else {
      if (!Array.isArray(meshObject?.material)) {
        meshObject?.material.color.set("white")
      }
    }
  }, [meshObject, activeElement])

  if (!meshObject || !lineObject) {
    return null
  }

  return (
    <>
      <mesh
        onClick={(e) => {
          const raycaster = new Raycaster()

          raycaster.setFromCamera(e.pointer, camera)
          const intersects = raycaster
            .intersectObjects(scene.children)
            .filter((ints) => ints.object.type === "Mesh")

          if (e.object.uuid === intersects[0].object.uuid) {
            setActiveElement(e.object.uuid)
          }
        }}
        onDoubleClick={(e) => {
          const raycaster = new Raycaster()
          raycaster.setFromCamera(e.pointer, camera)
          const intersects = raycaster
            .intersectObjects(scene.children)
            .filter((ints) => ints.object.type === "Mesh")
          if (contextActionsConf) {
            setContextActionsConf(null)
          } else {
            setContextActionsConf({
              cursorPos: new Vector2(e.clientX, e.clientY),
              text: polygon.properties?.name || intersects[0].object.uuid,
            })
          }
        }}
        userData={polygon.properties}
        key={polygon.geometry.type}
      >
        <primitive object={meshObject} />
      </mesh>
      <primitive object={lineObject} />
    </>
  )
}

import { GeoJsonFeature } from "src/shared/model/geo/geojson.types.ts"

/**
 * Calculates the minimum or maximum coordinate value along the specified axis of a list of GeoJSON features.
 *
 * @param {GeoJsonFeature[]} list - The list of GeoJSON features.
 * @param {"x" | "y"} axis - The axis along which to calculate the coordinate value.
 * @param {"min" | "max"} edgeType - The type of edge to calculate ("min" or "max").
 * @returns {number} The minimum or maximum coordinate value along the specified axis.
 */
export const getEdges = (
  list: GeoJsonFeature[],
  axis: "x" | "y",
  edgeType: "min" | "max",
): number => {
  const neededCoordinates = [
    ...list
      .map((polygon) =>
        polygon.geometry.coordinates.map((c) => c[axis === "x" ? 0 : 1]),
      )
      .flat(),
  ]
  return edgeType === "min"
    ? Math.min(...neededCoordinates)
    : Math.max(...neededCoordinates)
}

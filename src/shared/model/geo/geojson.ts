import { GeoJson, GeoJsonFeature } from "src/shared/model/geo/geojson.types.ts"
import json from "./mock-geojson.json"

// FOR TESTING ONLY
export const getMockedGeoJsonSquare = async (): Promise<GeoJson> =>
  json as GeoJson

export const getPolygonsFromGeoJson = (featuresList: GeoJsonFeature[]) => {
  return featuresList.filter((feature) => feature.geometry.type === "Polygon")
}

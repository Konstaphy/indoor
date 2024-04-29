import {
  GeoJson,
  GeoJsonFeature,
  GeoJsonType,
} from "src/shared/model/geo/geojson.types.ts"

// FOR TESTING ONLY
export const MockedGeoJsonSquare: GeoJson = {
  type: GeoJsonType.FEATURE_COLLECTION,
  features: [
    {
      type: GeoJsonType.FEATURE,
      geometry: {
        type: "Polygon",
        coordinates: [
          [0, 3],
          [3, 3],
          [3, 0],
          [0, 0],
        ],
      },
    },
    {
      type: GeoJsonType.FEATURE,
      geometry: {
        type: "Polygon",
        coordinates: [
          [5, 7],
          [7, 7],
          [7, 5],
          [7, 3],
          [5, 5],
        ],
      },
    },
    {
      type: GeoJsonType.FEATURE,
      geometry: {
        type: "Polygon",
        coordinates: [
          [-5, -7],
          [-7, -7],
          [-7, -5],
          [-7, -3],
          [-6, -5],
          [-5, -5],
        ],
      },
    },
  ],
}

export const getPolygonsFromGeoJson = (featuresList: GeoJsonFeature[]) => {
  return featuresList.filter((feature) => feature.geometry.type === "Polygon")
}

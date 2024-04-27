import { GeoJson, GeoJsonType } from "src/shared/model/geo/geojson.types.ts"

// FOR TESTING ONLY
export const MockedGeoJsonSquare: GeoJson = {
  type: GeoJsonType.FEATURE_COLLECTION,
  features: [
    {
      type: GeoJsonType.FEATURE,
      geometry: {
        type: "Polygon",
        coordinates: [
          [0, 1],
          [1, 1],
          [1, 0],
          [0, 0],
        ],
      },
    },
  ],
}

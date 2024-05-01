/** Тип объекта представляющего сущность - сущность/коллекция сущностей */
export type GeoJsonType = "Feature" | "FeatureCollection"

/** Вид сущности */
export type GeometryType =
  | "Point"
  | "MultiPoint"
  | "LineString"
  | "MultiLineString"
  | "Polygon"
  | "MultiPolygon"
  | "GeometryCollection"

/** Геометрия сущности */
export type GeoJsonGeometry = {
  type: GeometryType
  coordinates: number[][]
}

export type FeatureProperties = {
  name?: string
  [key: string]: string | undefined
}

/** Сущность */
export type GeoJsonFeature<T = FeatureProperties> = {
  type: "Feature"
  geometry: GeoJsonGeometry
  properties?: T
}

/** Единый формат описания геометрия карты */
export type GeoJson<T = FeatureProperties> = {
  type: "FeatureCollection"
  features: GeoJsonFeature<T>[]
}

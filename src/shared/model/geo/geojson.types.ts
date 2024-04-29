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

/** Сущность */
export type GeoJsonFeature<T = undefined> = {
  type: "Feature"
  geometry: GeoJsonGeometry
  properties?: T
}

/** Единый формат описания геометрия карты */
export type GeoJson<T = undefined> = {
  type: "FeatureCollection"
  features: GeoJsonFeature<T>[]
}

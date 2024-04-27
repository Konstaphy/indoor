/** Тип объекта представляющего сущность - сущность/коллекция сущностей */
export enum GeoJsonType {
  FEATURE = "Feature",
  FEATURE_COLLECTION = "FeatureCollection",
}

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
  coordinates: number[] | number[][]
}

/** Сущность */
export type GeoJsonFeature<T = Record<string, string>> = {
  type: GeoJsonType.FEATURE
  geometry: GeoJsonGeometry
  properties: T
}

/** Единый формат описания геометрия карты */
export type GeoJsonTypes<T> = {
  type: GeoJsonType.FEATURE_COLLECTION
  features: GeoJsonFeature<T>[]
}

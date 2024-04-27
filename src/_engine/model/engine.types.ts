import { ReactElement } from "react"

export interface IMapEngine<MapProps> {
  renderMap: (props: MapProps) => ReactElement
}

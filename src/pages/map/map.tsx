import { IMapEngine } from "src/_engine/model/engine.types.ts"
import { FC } from "react"

type Props = {
  engine: IMapEngine<any>
}

export const Map: FC<Props> = ({ engine }) => {
  return <>{engine.renderMap({})}</>
}

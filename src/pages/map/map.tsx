import { Engine } from "src/_engine/model/engine.types.ts"
import { FC } from "react"
import { ThreeJsEngine } from "src/_engine/model/three-js-engine.tsx"

type Props = {
  engine: Engine
}

export const Map: FC<Props> = ({ engine }) => {
  if (engine === "ThreeJS") {
    const engine = new ThreeJsEngine()

    return <>{engine.renderMap({})}</>
  }

  if (engine === "Canvas") {
    return <>Some 2D stuff</>
  }

  throw new Error(
    "Не указан движок для карты, попробуйте перезагрузить страничку",
  )
}

import { Cuadrado } from './styled'

export default function Scene(props) {
    return (
        <Cuadrado>
            <p>{props.texto}</p>
        </Cuadrado>
    )
}

/*
import React from "react"

export default function Scene() {
    return (
        <h1>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</h1>
    )
}
*/
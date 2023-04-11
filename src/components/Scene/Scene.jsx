import clsx from "clsx";

export default function Scene({frases, active}) {
    return (
        <div>
            <p className={clsx("frase", active && "fraseActiva")}>{frases}</p>
        </div>
    )
}
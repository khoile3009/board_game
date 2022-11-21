import "./Row.css"
import React, { FC } from "react"

type RowProps = {
    children: JSX.Element | JSX.Element[]
}

const Row: FC<RowProps> = ({ children }) => {
    return <div className="row">{children}</div>
}

export default Row
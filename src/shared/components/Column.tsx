import "./Column.css"
import React, { FC } from "react"

type ColumnProps = {
    children: JSX.Element | JSX.Element[]
}

const Column: FC<ColumnProps> = ({ children }) => {
    return <div className="column">{children}</div>
}

export default Column
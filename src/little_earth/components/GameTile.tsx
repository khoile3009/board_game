import React, { FC } from "react";
import "./GameTile.css";

type TileDataType = {
    type: number //TODO: Make enum
}

type GameTileProps = {
    rowIndex: number,
    columnIndex: number,
    styleOverride: object,
    tileData: TileDataType
}

const TILE_TYPE_TO_CLASS_NAME = [
    "null-tile",
    "mountain-tile",
    "forest-tile",
    "farm-tile",
    "wetland-tile",
    "water-tile",
    "grassland-tile"
]

const GameTile: FC<GameTileProps> = ({ rowIndex, columnIndex, styleOverride, tileData }) => {
    return <div className={`game-tile hexagon ${TILE_TYPE_TO_CLASS_NAME[tileData.type]}`} style={{ ...styleOverride }}></div>
}

export default GameTile;
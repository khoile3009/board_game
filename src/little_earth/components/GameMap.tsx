import "./GameMap.css";
import GameTile from './GameTile';
import Column from "../../shared/components/Column";
import Row from "../../shared/components/Row";

const mapHeight = 4;
const mapWidth = 7;

function getStyleOverrideForTile(rowIndex: number, columnIndex: number) {
    let styleOverride = { transform: "" };
    const translateY = rowIndex * -25;
    const translateX = rowIndex % 2 === 1 ? 50 : 0
    styleOverride.transform = `translate(${translateX}%, ${translateY}%)`
    return styleOverride
}

const MOCK_MAP_DATA = [
    [0, 1, 2, 3, 1, 4, 2],
    [5, 1, 4, 1, 2, 3, 6],
    [4, 2, 0, 3, 5, 4, 3],
    [5, 1, 2, 3, 1, 4, 6]
];

export default function GameMap() {
    // TODO(khoi): Have map initialization here and move to backend later
    return <div className="game-map">
        <Column>
            {
                [...Array(mapHeight)].map(
                    (_, hi) => <Row key={hi}>
                        {[...Array(mapWidth)].map((_, wi) => <GameTile styleOverride={getStyleOverrideForTile(hi, wi)} rowIndex={hi} columnIndex={wi} tileData={{ type: MOCK_MAP_DATA[hi][wi] }} key={hi * mapHeight + wi}></GameTile>)}
                    </Row>
                )
            }
        </Column>
    </div>
}
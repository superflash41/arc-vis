import { ARC_COLORS } from "../utils/colorUtils";

interface Props {
    grid: number[][];
    cellPx?: number;
}

export default function GridDisplay({ grid, cellPx = 20 }: Props) {
    return (
        <div
            className="inline-grid"
            style={{
                gridTemplateColumns: `repeat(${grid[0].length}, ${cellPx}px)`,
                gap: 1,
            }}
        >
            {grid.flat().map((c, i) => (
                <div
                    key={i}
                    style={{
                        width: cellPx,
                        height: cellPx,
                        background: ARC_COLORS[c] ?? "transparent",
                    }}
                />
            ))}
        </div>
    );
}
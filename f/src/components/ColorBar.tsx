import { ARC_COLORS } from "../utils/colorUtils";
interface Props {
    hist: Record<number, number>;
}
export default function ColorBar({ hist }: Props) {
    const total = Object.values(hist).reduce((s, n) => s + n, 0);
    return (
        <div className="flex h-3 w-full overflow-hidden rounded">
            {Object.entries(hist).map(([k, v]) => (
                <div
                    key={k}
                    style={{
                        width: `${(v / total) * 100}%`,
                        background: ARC_COLORS[Number(k)],
                    }}
                />
            ))}
        </div>
    );
}

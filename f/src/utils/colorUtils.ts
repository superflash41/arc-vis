// colors

export const ARC_COLORS = [
    "#000000", "#0074D9", "#FF4136", "#2ECC40", "#FFDC00",
    "#AAAAAA", "#F012BE", "#FF851B", "#7FDBFF", "#870C25",
];

export function dominantColors(grid: number[][]): Record<number, number> {
    const freq: Record<number, number> = {};
    grid.flat().forEach((c) => (freq[c] = (freq[c] ?? 0) + 1));
    return freq;
}
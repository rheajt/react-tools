import { CourseSection } from "./types/CourseSection";

const headerRow = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

type Header = string[];
type Row = (string | CourseSection | null)[];
type Grid = (Header | Row)[];

export const secondaryGrid: Grid = [
    ["", "A", "B", "C", "D", "E", "F", "G", "H"],
    ["1", null, null, null, null, null, null, null, null],
    ["2", null, null, null, null, null, null, null, null],
    ["3", null, null, null, null, null, null, null, null],
    ["4", null, null, null, null, null, null, null, null],
];

export const primaryGrid: Grid = [
    ["", "A", "B", "C", "D", "E"],
    ["1", null, null, null, null, null],
    ["2", null, null, null, null, null],
    ["3", null, null, null, null, null],
    ["4", null, null, null, null, null],
    ["5", null, null, null, null, null],
    ["6", null, null, null, null, null],
    ["7", null, null, null, null, null],
    ["8", null, null, null, null, null],
    ["9", null, null, null, null, null],
];

export function loadGrid(school: string) {
    const [rows, columns] = school === "primary" ? [10, 6] : [4, 9];
    const headers = [...headerRow].slice(0, columns);

    const grid = [headers];

    for (let i = 1; i <= rows; i++) {
        const row = Array.from<any>({ length: columns });
        row[0] = "" + i;
        grid.push(row);
    }

    return grid;
}

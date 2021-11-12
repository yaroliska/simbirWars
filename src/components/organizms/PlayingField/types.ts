export interface Cell {
    cellId: string;
    cellCenter: {
        x: number,
        y: number,
    }
}

export interface Row {
    columns: Cell[],
}

export interface FieldObject {
    rows: Row[],
}
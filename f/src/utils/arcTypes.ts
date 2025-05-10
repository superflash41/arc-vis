// interfaces for each arc task

export interface ArcExample {
    input: number[][];
    output: number[][];
}

export interface ArcTask {
    id: string;
    train: ArcExample[];
    test: ArcExample[];
}
import { useEffect, useState } from "react";
import type { ArcTask } from "../utils/arcTypes";

export function useArcTasks() {
    const [tasks, setTasks] = useState<ArcTask[]>([]);
    const [isLoading, setLoad] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = `${import.meta.env.BASE_URL}data/manifest.json`;
        fetch(url)
            .then((r) => {
                if (!r.ok) throw new Error(`Failed to fetch manifest: ${r.status}`);
                return r.json()
            })
            .then(setTasks)
            .catch((e) => setError(String(e)))
            .finally(() => setLoad(false));
    }, []);

    return { tasks, isLoading, error };
}
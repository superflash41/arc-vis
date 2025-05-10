import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import GridDisplay from "./GridDisplay";
import ColorBar from "./ColorBar";
import { dominantColors } from "../utils/colorUtils";
import type { ArcTask } from "../utils/arcTypes";
import { ArrowRightCircleIcon, ChartBarIcon, InboxIcon } from "@heroicons/react/16/solid";

interface Props {
    task: ArcTask;
}

export default function TaskCard({ task }: Props) {
    const [open, setOpen] = useState(false);

    const firstExample = task.train[0];
    const hist = dominantColors(firstExample.input);

    return (
        <motion.section
            layout
            className={clsx(
                "bg-white rounded-2xl shadow-md",
                "cursor-pointer hover:shadow-lg transition-shadow",
                "relative"
            )}
            onClick={() => setOpen(!open)}
        >
            {/* collapsed header */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="font-mono text-sm">{task.id}</h3>
                <div className="text-xs text-gray-600 flex gap-4">
                    <span className="flex items-center gap-1">
                        <InboxIcon className="h-4 w-4" />
                        {firstExample.input.length}×{firstExample.input[0].length}
                    </span>
                    <span className="flex items-center gap-1">
                        <ArrowRightCircleIcon className="h-4 w-4" />
                        {firstExample.output.length}×{firstExample.output[0].length}
                    </span>
                    <span className="flex items-center gap-1">
                        <ChartBarIcon className="h-4 w-4" />
                        {task.train.length + task.test.length} ex.</span>
                </div>
                <ColorBar hist={hist} />
            </div>

            {/* expanded body */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        // layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                        className="border-t p-4 flex flex-col gap-4"
                    >
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            <div>
                                <p className="text-xs mb-1 text-center font-medium">Input</p>
                                <GridDisplay grid={firstExample.input} cellPx={24} />
                            </div>
                            <div>
                                <p className="text-xs mb-1 text-center font-medium">Output</p>
                                <GridDisplay grid={firstExample.output} cellPx={24} />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Click anywhere to collapse
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}

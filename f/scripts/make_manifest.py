#!/usr/bin/env python3
"""
Builds a single manifest.json listing every ARC task found in
public/data/{training,evaluation}. Needs to be run before building the project.
"""

import os
import json

# --- configuration ---
DATA_ROOT   = "public/data"
SUBSETS     = ["training", "evaluation"]
OUTPUT_FILE = os.path.join(DATA_ROOT, "manifest.json")
# ----------------------

def collect_tasks():
    """
    Collects all tasks from the specified subsets and returns them as a list.
    """
    tasks = []
    for subset in SUBSETS:
        subset_dir = os.path.join(DATA_ROOT, subset)
        for dirpath, _, files in os.walk(subset_dir):
            for fname in files:
                if not fname.endswith(".json"):
                    continue
                full_path = os.path.join(dirpath, fname)
                try:
                    with open(full_path, "r", encoding="utf-8") as f:
                        task = json.load(f)
                    # ensure an `id` field; fall back to filename without extension
                    if "id" not in task:
                        task["id"] = os.path.splitext(fname)[0]
                    tasks.append(task)
                except Exception as e:
                    print(f"ERROR: Skipping {full_path}: {e}")
    # sort by id for stable ordering
    tasks.sort(key=lambda t: t.get("id", ""))
    return tasks

def main():
    """
    Main function to collect tasks and write them to the manifest file.
    """
    tasks = collect_tasks()
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        json.dump(tasks, out, indent=2)
    print(f"--> Wrote {len(tasks)} tasks to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()

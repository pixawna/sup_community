import type { Level, Workflow } from "./workflows-data";

export type LevelFilter = "All" | Level;

export type WorkflowFilters = {
  query: string;
  level: LevelFilter;
  category: string;
};

/**
 * Derives the unique, ordered list of categories present in a set of
 * workflows, prefixed with "All" so it can be rendered directly as a
 * filter pill list.
 */
export function getCategoryOptions(source: Workflow[]): string[] {
  const unique = Array.from(new Set(source.map((workflow) => workflow.category)));
  return ["All", ...unique];
}

function matchesQuery(workflow: Workflow, query: string): boolean {
  const trimmed = query.trim().toLowerCase();

  if (!trimmed) {
    return true;
  }

  const haystack = [
    workflow.title,
    workflow.description,
    workflow.category,
    workflow.author,
    ...workflow.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(trimmed);
}

/**
 * Filters a workflow list by free-text search, level, and category.
 * All three criteria must match (AND semantics).
 */
export function filterWorkflows(
  source: Workflow[],
  { query, level, category }: WorkflowFilters,
): Workflow[] {
  return source.filter((workflow) => {
    const matchesLevel = level === "All" || workflow.level === level;
    const matchesCategory = category === "All" || workflow.category === category;

    return matchesLevel && matchesCategory && matchesQuery(workflow, query);
  });
}

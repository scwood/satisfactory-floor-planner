import { BUILDING_CATEGORIES, BUILDING_TYPES } from "@/data/buildings";
import { useLayoutStore } from "@/store/layoutStore";
import { cn } from "@/lib/utils";

export function RightPanel() {
  const armedTypeKey = useLayoutStore((s) => s.armedTypeKey);
  const armTool = useLayoutStore((s) => s.armTool);

  return (
    <aside className="flex w-60 shrink-0 flex-col border-l text-sm">
      <div className="border-b px-3 py-2">
        <h2 className="font-medium">Buildings</h2>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Click to select, then click on the canvas to place. Esc or RMB to
          cancel.
        </p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {BUILDING_CATEGORIES.map((category) => {
          const types = BUILDING_TYPES.filter(
            (type) => type.category === category.key,
          );
          if (types.length === 0) return null;
          return (
            <section key={category.key} className="border-t first:border-t-0">
              <h3 className="sticky top-0 z-10 bg-background px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {category.label}
              </h3>
              <ul>
                {types.map((type) => {
                  const armed = armedTypeKey === type.key;
                  return (
                    <li key={type.key}>
                      <button
                        type="button"
                        onClick={() => armTool(armed ? null : type.key)}
                        aria-pressed={armed}
                        className={cn(
                          "flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-accent",
                          armed && "bg-accent ring-1 ring-inset ring-primary",
                        )}
                      >
                        <span className="flex-1 truncate">{type.name}</span>
                        {!type.isWall && (
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {type.widthMeters}×{type.lengthMeters}m
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </aside>
  );
}

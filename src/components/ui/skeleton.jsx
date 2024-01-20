import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
    return (
        <div
            // className={cn("animate-pulse rounded-md bg-zinc-900/10 dark:bg-zinc-50/10", className)}
            className={cn(
                "animate-pulse rounded-md bg-accent dark:bg-accent",
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };

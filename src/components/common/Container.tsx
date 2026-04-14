import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

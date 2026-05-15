import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer" | "main" | "article" | "nav";
}

export function Container({
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return <Component className={cn("shell", className)} {...props} />;
}

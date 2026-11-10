import { Utensils } from "lucide-react";
import { Category_Icons } from "./category-icons";

interface CategoryIconProps {
    name: string | null;
    className?: string;
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
    const Icon = Category_Icons.find((item) => item.value === name)?.icon ?? Utensils;
    return <Icon className={className} />;
}
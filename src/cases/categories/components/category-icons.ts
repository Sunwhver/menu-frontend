import { Beef, Beer, CakeSlice, Coffee, CupSoda, IceCreamCone, Pizza, Salad, Sandwich, Soup, Utensils, Wine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Category_Icons: { value: string; label: string; icon: LucideIcon }[] = [
    { value: "utensils", label: "Talheres", icon: Utensils },
    { value: "sandwich", label: "Lanche", icon: Sandwich },
    { value: "beef", label: "Carne", icon: Beef },
    { value: "pizza", label: "Pizza", icon: Pizza },
    { value: "salad", label: "Salada", icon: Salad },
    { value: "soup", label: "Sopa", icon: Soup },
    { value: "cup-soda", label: "Refrigerante", icon: CupSoda },
    { value: "beer", label: "Cerveja", icon: Beer },
    { value: "wine", label: "Vinho", icon: Wine },
    { value: "coffee", label: "Café", icon: Coffee },
    { value: "cake-slice", label: "Sobremesa", icon: CakeSlice },
    { value: "ice-cream-cone", label: "Sorvete", icon: IceCreamCone },
];
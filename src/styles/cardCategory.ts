import { tv } from "tailwind-variants";

export const cardCategory = tv({
    base: 'border rounded-lg flex items-center text-white space-x-2 p-4 hover:cursor-pointer hover:font-bold text-xl',
    variants: {
        isSelected: {
          true: 'font-bold'  
        },
        category: {
            GREEN: 'bg-category-green',
            GRAY: 'bg-category-gray',
            BLUE: 'bg-category-blue',
            PURPLE: 'bg-category-purple',
            ORANGE: 'bg-category-orange',
            PINK: 'bg-category-pink',
            BLACK: 'bg-category-black',
            YELLOW: 'bg-category-yellow'
        }
    }
})
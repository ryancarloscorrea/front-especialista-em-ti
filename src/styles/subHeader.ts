import { tv } from "tailwind-variants";

export const liSubHeader = tv({
    base: 'hover:text-yellow-400 hover:cursor-pointer',
    variants: {
        active: {
            true: 'text-yellow-400'
        }
    }
})
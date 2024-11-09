import { TiPinOutline } from "react-icons/ti";
import { Category } from "../enums";
import { cardCategory } from "../styles/cardCategory";

interface CardProps {
  category: Category;
  isSelected: boolean;
  setCategory: (Category: Category) => void;
}

export const CardCategory = ({
  category,
  isSelected,
  setCategory,
}: CardProps) => {
  let title;

  switch (category) {
    case Category.BLACK:
      title = "Melhores do momento em custo-benefício";
      break;
    case Category.GRAY:
      title = "Melhores do momento em custo-benefício.";
      break;
    case Category.BLUE:
      title = "Notebooks p/ uso moderado de trabalho.";
      break;
    case Category.GREEN:
      title = "Notebooks mais fortes para trabalhar.";
      break;
    case Category.PINK:
      title = "Notes c/ design diferenciado e teclado retroiluminado.";
      break;
    case Category.ORANGE:
      title = "Notebooks Gamers.";
      break;
    case Category.YELLOW:
      title = "Notebooks com observações";
      break;
    case Category.PURPLE:
      title = "Celulares e tablets";
      break;
  }

  return (
    <div
      className={cardCategory({ category, isSelected })}
      onClick={() => {
        if (!isSelected) setCategory(category);
      }}
    >
      <p>{title}</p>
      {isSelected ? <TiPinOutline color="white" size={24} /> : <></>}
    </div>
  );
};

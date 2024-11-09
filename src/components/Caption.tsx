import { Category } from "../enums";
import { CardCategory } from "./CardCategory";

interface CaptionProps {
  category: Category;
  setCategory: (Category: Category) => void;
}

export const Caption = ({ category, setCategory }: CaptionProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <CardCategory
          category={Category.BLACK}
          isSelected={category === Category.BLACK}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.GRAY}
          isSelected={category === Category.GRAY}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.BLUE}
          isSelected={category === Category.BLUE}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.GREEN}
          isSelected={category === Category.GREEN}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.PINK}
          isSelected={category === Category.PINK}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.ORANGE}
          isSelected={category === Category.ORANGE}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.YELLOW}
          isSelected={category === Category.YELLOW}
          setCategory={setCategory}
        />
        <CardCategory
          category={Category.PURPLE}
          isSelected={category === Category.PURPLE}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
};

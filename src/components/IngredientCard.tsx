import { Ingredient } from "../types"

interface Props {
  ingredient: Ingredient
}

export default function IngredientCard({ ingredient }: Props) {
  return (
    <div className="bg-[#3a3a3a] rounded-2xl p-4 flex flex-col justify-between aspect-square shadow-md hover:shadow-lg transition-shadow">
      <span className="text-white text-sm font-medium leading-tight">
        {ingredient.name}
      </span>
      <div className="flex gap-1 mt-2">
        {ingredient.diets.map((diet) => (
          <span
            key={diet}
            className="bg-[#A2D135] text-black text-xs font-bold px-2 py-0.5 rounded-full"
          >
            {diet}
          </span>
        ))}
      </div>
    </div>
  )
}

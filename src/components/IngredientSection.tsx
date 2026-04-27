import type { Category, Ingredient } from "../types"
import IngredientCard from "./IngredientCard"

interface Props {
  categories: Category[]
  ingredients: Ingredient[]
}

export default function IngredientSection({ categories, ingredients }: Props) {
  const visibleCategories = categories.filter((c) => c.id !== 6)
  const visibleIngredients = ingredients.filter((i) => i.categoryId !== 6)

  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">

      {/* Circle number */}
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
        3
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Lisaa raaka-aineet</h2>

      {/* Search field */}
      <input
        type="text"
        placeholder="Search ingredients..."
        className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135] mb-6"
      />

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {visibleCategories.map((cat) => (
          <button
            key={cat.id}
            className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Ingredient cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleIngredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  )
}

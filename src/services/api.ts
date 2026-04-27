const API_BASE = "https://fresse-api.onrender.com/api"

export async function getBowls() {
  const res = await fetch(`${API_BASE}/bowls`)
  const data = await res.json()
  return data
}

export async function getCategories() {
  const res = await fetch(`${API_BASE}/categories`)
  const data = await res.json()
  return data
}

export async function getIngredients() {
  const res = await fetch(`${API_BASE}/ingredients`)
  const data = await res.json()
  return data
}

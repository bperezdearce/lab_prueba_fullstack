import { ICard } from "@/interfaces/interfaces";

async function fetchCardsBySetId(id: string): Promise<ICard[]> {
  try {
    const response = await fetch(`http://localhost:2000/sets/${id}`);
    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const cards: ICard[] = await response.json();
    return cards;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    throw new Error(
      "No se pudieron obtener las cartas para este set. Intenta nuevamente."
    );
  }
}

export default fetchCardsBySetId;

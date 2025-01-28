import { ISet } from "@/interfaces/interfaces";

async function fetchSets(): Promise<ISet[]> {
  try {
    const response = await fetch("http://localhost:2000/sets");
    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const sets: ISet[] = await response.json();
    return sets;
  } catch (error) {
    console.error("Error fetching sets:", error);
    throw new Error("No se pudieron obtener los sets. Intenta nuevamente.");
  }
}

export default fetchSets;
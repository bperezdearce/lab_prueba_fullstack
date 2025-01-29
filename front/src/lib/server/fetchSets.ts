import { ISet } from "@/interfaces/interfaces";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function fetchSets(): Promise<ISet[]> {
  try {
    const response = await fetch(`${apiUrl}/sets`);
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
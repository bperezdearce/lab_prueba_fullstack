import { ISet } from "@/interfaces/interfaces";

async function fetchSetDetails(id: string): Promise<ISet> {
  try {
    const response = await fetch("http://localhost:2000/sets");
    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const sets: ISet[] = await response.json();
    const selectedSet = sets.find((set) => set.id === id);

    if (!selectedSet) {
        throw new Error (`Set con ID ${id} no encontrado.`);
    }

    return selectedSet;

  } catch (error) {
    console.error("Error al obtener los detalles del set:", error);
    throw new Error(
      "No se pudieron obtener los detalles del set. Intenta nuevamente"
    );
  }
}

export default fetchSetDetails;
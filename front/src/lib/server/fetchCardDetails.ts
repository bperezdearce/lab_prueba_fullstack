import { ICard } from "@/interfaces/interfaces";

async function fetchCardDetails(id: string): Promise<ICard> {
  try {
    const response = await fetch(`http://localhost:2000/cards/${id}`);
    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const card: ICard = await response.json();

    if (!card) {
      throw new Error(`Carta con ID ${id} no encontrada.`);
    }

    return card;
  } catch (error) {
    console.error("Error al obtener los detalles de la carta:", error);
    throw new Error(
      "No se pudieron obtener los detalles de la carta. Intenta nuevamente."
    );
  }
}

export default fetchCardDetails;

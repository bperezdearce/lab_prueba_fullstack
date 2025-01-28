import React from "react";
import Image from "next/image";
import Link from "next/link";
import fetchCardsBySetId from "@/lib/server/fetchCardsBySetId";
import fetchSetDetails from "@/lib/server/fetchSetDetails";

async function setDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [setCards, setDetails] = await Promise.all([
    fetchCardsBySetId(id),
    fetchSetDetails(id),
  ]);

  return (
    <div className="container mx-auto">
      <title>{setDetails.name}</title>
      <Link
        href={"/sets"}
        className="text-secondary hover:text-accent-default transform transition-all"
      >
        ← Volver al listado de sets
      </Link>

      <section className="h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:gap-20 my-16 xl:my-32">
            {/* logo del set */}
            <div className="w-full flex justify-center order-1 xl:order-none relative max-w-[500px]">
              <Image
                src={setDetails.logo_url}
                width={500}
                height={500}
                alt={`${setDetails.name} Logo`}
                className="h-auto object-contain"
              />
            </div>

            {/* detalles del set */}
            <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none">
              <h2 className="h2 text-accent-hover mb-6">{setDetails.name}</h2>
              <div className="flex flex-col items-center xl:items-start">
                <Image
                  src={setDetails.symbol_url}
                  width={28}
                  height={28}
                  alt={`símbolo de ${setDetails.name}`}
                  className="mt-2"
                />
                <p className="mt-4 text-lg text-white/80">
                  <strong>Total de cartas impreso: </strong>
                  {setDetails.printed_total}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Total real de cartas: </strong>
                  {setDetails.total}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Fecha de lanzamiento: </strong>
                  {new Date(setDetails.release_date).toLocaleDateString(
                    "es-ES"
                  )}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Fecha de la última actualización: </strong>
                  {new Date(setDetails.updated_at).toLocaleDateString("es-ES")}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Código en Pokémon TCG Online: </strong>
                  {setDetails.ptcgo_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* imágenes de las cartas */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 xl:gap-12 mx-8 xl:mx-0 my-16">
          {setCards.map((card) => {
            const imageUrl =
              card.images.find((img) => img.type === "large")?.url ||
              card.images.find((img) => img.type === "small")?.url ||
              "";

            if (!imageUrl) return null;

            return (
              <div key={card.id} className="relative w-full h-auto">
                <Link href={`/cards/${card.id}`}>
                  <Image
                    src={imageUrl}
                    alt={card.name}
                    priority
                    quality={100}
                    width={500}
                    height={500}
                    className="transform transition-transform hover:scale-125"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default setDetail;

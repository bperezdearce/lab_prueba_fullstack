import React from "react";
import Link from "next/link";
import Image from "next/image";
import fetchCardDetails from "@/lib/server/fetchCardDetails";

async function cardDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cardDetails = await fetchCardDetails(id);
  const largeImage = cardDetails.images.find((img) => img.type === "large");

  return (
    <div className="container mx-auto">
      <title>{cardDetails.name}</title>

      <Link
        href={`/sets/${cardDetails.set_id}`}
        className="text-secondary hover:text-accent-default transform transition-all"
      >
        ← Volver al set
      </Link>

      <section className="h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col xl:items-start justify-center items-center gap-12 xl:flex-row my-16 xl:my-32">
            {/* Imagen de la carta */}
            <div className="w-full flex justify-center items-center order-1 xl:order-none relative max-w-[400px]">
              {largeImage && (
                <Image
                  src={cardDetails.images[0].url}
                  alt={cardDetails.name}
                  priority
                  quality={100}
                  width={300}
                  height={300}
                  className="h-auto object-contain"
                />
              )}
            </div>

            {/* Detalles de la carta */}
            <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none">
              <h2 className="h2 text-accent-hover mb-6">{cardDetails.name}</h2>
              <div className="flex flex-col items-center xl:items-start">
                <p className="mt-4 text-lg text-white/80">
                  <strong>Supertipo:</strong> {cardDetails.supertype}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Subtipos:</strong> {cardDetails.subtypes.join(", ")}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Tipos:</strong> {cardDetails.types.join(", ")}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Número:</strong> {cardDetails.number}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  <strong>Rareza:</strong> {cardDetails.rarity}
                </p>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-white/80">
                    Mercados
                  </h2>
                  <ul className="mt-2 list-disc list-inside">
                    {cardDetails.markets.map((market) => (
                      <li key={market.id}>
                        <a
                          href={market.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-accent-default transform transition-all"
                        >
                          {market.market} (Actualizado:{" "}
                          {new Date(market.updated_at).toLocaleDateString(
                            "es-ES"
                          )}
                          )
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default cardDetail;

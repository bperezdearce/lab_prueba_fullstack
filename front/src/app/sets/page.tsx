import React from "react";
import fetchSets from "@/lib/server/fetchSets";
import Image from "next/image";
import Link from "next/link";
import { ISet } from "@/interfaces/interfaces";

const sets = async () => {
  const setsSve = await fetchSets();

  return (
    <section className="h-auto">
      <title>Scarlet & Violet</title>
      <div className=" xl:pt-8 xl:pb-24">
        {/* intro */}
        <div className="text-lg container mx-auto text-center xl:text-justify text-white/80 leading-loose xl:leading-relaxed">
          La serie Escarlata y Púrpura (Scarlet & Violet Series en inglés)
          pertenece a la novena generación de Pokémon TCG. A continuación,
          listamos los sets correspondientres a esta serie. También podrás
          visualizar el detalle de las cartas de cada uno de los sets.
        </div>

        {/* sets */}
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center mx-8">
            {setsSve.map((set: ISet) => (
              <div key={set.id}>
                <Link href={`/sets/${set.id}`}>
                  <Image
                    src={set.logo_url}
                    alt={set.name}
                    priority
                    quality={100}
                    width={350}
                    height={350}
                    className="transform transition-transform hover:scale-125"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default sets;

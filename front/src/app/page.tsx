import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section className="h-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:gap-20 my-16 xl:my-32">
          {/* texto */}
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-2 xl:order-none">
            <h1 className="h1 mb-6">
              ¡Bienvenidos a{" "}
              <span className="text-accent-default">POcKETCG</span>!
            </h1>
            <p className="mb-9 text-white/80 text-lg xl:text-xl leading-loose xl:leading-relaxed xl:text-justify">
              Descubre los sets de cartas Pokémon de la serie Escarlata y
              Violeta y explora todos sus detalles en un solo lugar.
            </p>
          </div>

          {/* imagen de Pokémon TCG */}
          <div className="w-full flex justify-center order-1 xl:order-none relative max-w-[500px]">
            <Image
              src="/assets/pokemonTCG.png"
              alt="logo Pokemon TCG"
              priority
              quality={100}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

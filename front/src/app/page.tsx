import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left">
            <h2 className="h2 mb-6">
              ¡Bienvenidos a{" "}
              <span className="text-accent-default">POcKETCG</span>!
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              Descubre los sets de cartas Pokémon de la serie Escarlata y Violeta y explora todos sus detalles
              en un solo lugar.
            </p>
          </div>

          {/* foto */}
          <div className="w-full h-full relative">
            <div className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px]">
              <Image
                src="/assets/pokemonTCG.png"
                priority
                quality={100}
                fill
                alt="logo Pokemon TCG"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// @ts-ignore
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "POCKETCG",
      version: "1.0.0",
      description: "API para gestionar sets y cartas de Pokémon TCG",
    },
    tags: [
      {
        name: "Sets",
        description: "Gestiona sets de Pokémon TCG",
      },
      {
        name: "Cards",
        description: "Gestiona cartas de Pokémon TCG",
      },
    ],
    servers: [
      {
        url: process.env.SWAGGER_SERVER || "http://localhost:2000",
        description: process.env.NODE_ENV === "production" ? "Servidor en Render" : "Servidor local",
      },
    ],
    components: {
      schemas: {
        Set: {
          type: "object",
          required: [
            "id",
            "name",
            "series",
            "printed_total",
            "total",
            "ptcgo_code",
            "release_date",
            "updated_at",
            "symbol_url",
            "logo_url",
          ],
          properties: {
            id: {
              type: "string",
              description: "ID del set",
              example: "sv7",
            },
            name: {
              type: "string",
              description: "Nombre del set",
              example: "Stellar Crown",
            },
            series: {
              type: "string",
              description: "Serie a la que pertenece el set",
              example: "Scarlet & Violet",
            },
            printed_total: {
              type: "integer",
              description: "Total de cartas impreso en el set",
              example: 142,
            },
            total: {
              type: "integer",
              description: "Total real de cartas en el set",
              example: 175,
            },
            ptcgo_code: {
              type: "string",
              description: "Código del set en Pokémon TCG Online",
              example: "SCR",
            },
            release_date: {
              type: "string",
              format: "date",
              description: "Fecha de lanzamiento del set",
              example: "2024-09-13",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              description: "Fecha de la última actualización",
              example: "2024-08-02T15:00:00.000Z",
            },
            symbol_url: {
              type: "string",
              format: "uri",
              description: "URL del símbolo del set",
              example: "https://images.pokemontcg.io/sv7/symbol.png",
            },
            logo_url: {
              type: "string",
              format: "uri",
              description: "URL del logo del set",
              example: "https://images.pokemontcg.io/sv7/logo.png",
            },
          },
        },
        Card: {
          type: "object",
          required: [
            "id",
            "name",
            "supertype",
            "subtypes",
            "types",
            "set_id",
            "number",
            "rarity",
            "images",
            "markets",
          ],
          properties: {
            id: {
              type: "string",
              description: "ID de la carta",
              example: "sv7-1",
            },
            name: {
              type: "string",
              description: "Nombre de la carta",
              example: "Venusaur ex",
            },
            supertype: {
              type: "string",
              description: "Supertipo de la carta",
              example: "Pokémon",
            },
            subtypes: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Subtipos de la carta",
              example: ["Stage 2", "ex"],
            },
            types: {
              type: "array",
              items: {
                type: "string",
              },
              description: "Tipos de la carta",
              example: ["Grass"],
            },
            set_id: {
              type: "string",
              description: "ID del set al que pertenece la carta",
              example: "sv7",
            },
            number: {
              type: "string",
              description: "Número de la carta en el set",
              example: "1",
            },
            rarity: {
              type: "string",
              description: "Rareza de la carta",
              example: "Double Rare",
            },
            images: {
              type: "array",
              description: "Imágenes de la carta",
              items: {
                type: "object",
                required: ["id", "card_id", "url", "type"],
                properties: {
                  id: {
                    type: "integer",
                    description: "ID de la imagen",
                    example: "362",
                  },
                  card_id: {
                    type: "string",
                    description: "Identificador de la carta asociada",
                    example: "sv7-1",
                  },
                  url: {
                    type: "string",
                    format: "uri",
                    description: "URL de la imagen",
                    example: "https://example.com/images/carta1.png",
                  },
                  type: {
                    type: "string",
                    description: "Tipo de imagen",
                    example: "small",
                  },
                },
              },
            },
            markets: {
              type: "array",
              description: "Mercados online donde está disponible la carta",
              items: {
                type: "object",
                required: ["id", "card_id", "url", "updated_at", "market"],
                properties: {
                  id: {
                    type: "integer",
                    description: "ID del mercado",
                    example: "506",
                  },
                  card_id: {
                    type: "string",
                    description: "Identificador de la carta asociada",
                    example: "sv7-1",
                  },
                  url: {
                    type: "string",
                    format: "uri",
                    description: "URL del mercado",
                    example: "https://mercadoxyz.com/carta1",
                  },
                  updated_at: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha de la última actualización",
                    example: "2023-07-20T04:00:00.000Z",
                  },
                  market: {
                    type: "string",
                    description: "Nombre del mercado",
                    example: "tcgplayer",
                  },
                },
              },
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            statusCode: {
              type: "integer",
              description: "Código de error",
              example: "400"
            },
            message: {
              type: "string",
              description: "Mensaje de error",
              example: "Error al conseguir _____"
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJSDoc(swaggerOptions);

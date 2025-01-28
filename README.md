# Pokémon TCG - Sets y Cartas (Escarlata y Púrpura)

Esta aplicación fue desarrollada con la finalidad de **listar y visualizar información** sobre los **sets** y **cartas** de la serie **Escarlata y Púrpura** del juego Pokémon TCG.

- Incluye una base de datos en PostgreSQL con información detallada de sets y cartas.
- Cuenta con un **backend** que expone una API REST para consultar dicha información.
- Provee un **frontend** para mostrar de manera amigable los datos de los sets y sus cartas asociadas.

---

## Requisitos de Desarrollo

- **Docker** (para levantar el backend y la base de datos en contenedores).
- **Node.js** (para correr el frontend localmente).

> **Nota**: Si deseas correr el backend sin Docker, necesitarías cambiar la variable `DB_HOST` y levantar tu propia instancia de PostgreSQL local o en la nube.

---

## Instalación y Ejecución

### 1. Clonar el repositorio

`git clone <URL_DE_TU_REPOSITORIO> cd LAB_PRUEBA_FULLSTACK`

### 2. Configurar las Variables de Entorno

Asegúrate de configurar los valores adecuados en `.env` (puedes basarte en `.env.example`).

- Para el **backend** (dentro de la carpeta `back`), las variables típicas son `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, etc.
    - En el archivo `docker-compose.yml`, el servicio de la base de datos se suele llamar `postgres` o `db`. Ajusta `DB_HOST` a ese nombre para que el backend se conecte correctamente.
- Para el **frontend** (en la carpeta `front`), podrías necesitar `NEXT_PUBLIC_API_URL` con la URL donde se exponga el backend.

### 3. Levantar Backend y Base de Datos con Docker

Desde la carpeta raíz del proyecto (donde está el `docker-compose.yml`):

`docker-compose up -d`

Esto iniciará:

- Un contenedor de **PostgreSQL**.
- El contenedor del **backend** en Node.js.

Para verificar que ambos contenedores estén corriendo, usa:

`docker-compose ps`

### 4. Levantar el Frontend en Local

El frontend **no** está en Docker en esta configuración, así que debes correrlo localmente:

`cd front npm install   # solo la primera vez npm run dev   # modo desarrollo`

El servidor de Next.js iniciará, normalmente en http://localhost:3000.

---

## Despliegue

### Backend en Render

1. **Variables de entorno**
    
    - Configura en [Render](https://render.com/) las mismas variables del backend (`DB_HOST`, `DB_USER`, etc.).
    - Si la base de datos también está en Render, usa la URL/puerto que te provea.
2. **Comandos de Build y Start**
    
    - _Build Command_: `npm run build`
    - _Start Command_: `npm run start`
3. **URL del Backend**
    
    - Render te proporcionará un dominio como `https://tu-backend.onrender.com/`.
    - Usa esa URL en el frontend (`NEXT_PUBLIC_API_URL`).

### Frontend en Vercel

1. **Variables de entorno**
    
    - Configura `NEXT_PUBLIC_API_URL` apuntando a la URL de tu backend en Render.
2. **Build Command**
    
    - `npm run build` (Vercel ejecuta Next.js en modo serverless).
3. **URL del Frontend**
    
    - Vercel proveerá una URL tipo `https://tu-frontend.vercel.app/`.

---

## Endpoints de la API

- **`GET /sets`**  
    Retorna todos los sets disponibles.
    
- **`GET /sets/:id/cards`**  
    Retorna todas las cartas de un set específico.
    
- **`GET /cards/:id`** _(opcional)_  
    Retorna información detallada de una carta, incluyendo imágenes y datos de mercado.
    

### Documentación con Swagger

La API cuenta con documentación generada por **Swagger**. Para verla (en local) tras levantar el contenedor, visita:

`http://localhost:<PUERTO_BACKEND>/api-docs`

(El puerto varía según tu configuración.)

---

### ¡Listo!

- **Modo desarrollo**: Usa `docker-compose` para levantar el backend y la base de datos, y luego `npm run dev` en `front`.
- **Despliegue**: Se realiza con **Render** para el backend y **Vercel** para el frontend, configurando las variables de entorno en cada plataforma.
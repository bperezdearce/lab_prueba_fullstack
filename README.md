# Pokémon TCG - Sets y Cartas (Escarlata y Púrpura)

Esta aplicación fue desarrollada con la finalidad de **listar y visualizar información** sobre los **sets** y **cartas** de la serie **Escarlata y Púrpura** del juego Pokémon TCG.

- Incluye una base de datos en PostgreSQL con información detallada de sets y cartas.
- Cuenta con un **backend** que expone una API REST para consultar dicha información.
- Provee un **frontend** para mostrar de manera amigable los datos de los sets y sus cartas asociadas.

---

## Requisitos de Desarrollo

- **Docker**  
  Para levantar el backend y la base de datos en contenedores (desarrollo).
- **Node.js**  
  Para correr el **frontend** localmente en desarrollo.
- **ngrok**  
  Para exponer el backend en producción.
- **Cuenta en Vercel**  
  Para desplegar el **frontend** en producción.

> **Nota**: Si deseas correr el backend sin Docker en desarrollo, necesitarías cambiar la variable `DB_HOST` y levantar tu propia instancia de PostgreSQL local o en la nube. Esta configuración no ha sido probada ni se garantiza en este README.

---

## Instalación y Ejecución

### 1. Clonar el repositorio

`git clone <https://github.com/bperezdearce/lab_prueba_fullstack.git> cd LAB_PRUEBA_FULLSTACK`

### 2. Configurar las Variables de Entorno

Asegúrate de configurar los valores adecuados en `.env` (puedes basarte en `.env.example`).

- Para el **backend** (dentro de la carpeta `back`):
  - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`, etc.
  - Cualquier otra variable necesaria para el servidor (por ejemplo, `PORT`).
- Para el **frontend** (en la carpeta `front`):
  - `NEXT_PUBLIC_API_URL`: URL en la que está corriendo tu backend.

### 3. Levantar Backend y Base de Datos con Docker

Desde la carpeta raíz del proyecto (donde está el `docker-compose.yml`):

`docker-compose up -d`

Esto iniciará:

- Un contenedor de **PostgreSQL**.
- El contenedor del **backend** en Node.js.

Para verificar que ambos contenedores estén corriendo, usa:

`docker-compose ps`

El backend normalmente quedará expuesto en `http://localhost:<PUERTO_BACK>`, donde `<PUERTO_BACK>` es el que hayas configurado en tu `docker-compose.yml`.

### 4. Levantar el Frontend en Local

El frontend **no** está en Docker en esta configuración, así que debes correrlo localmente:

- **npm install** # solo la primera vez
- **npm run dev** # modo desarrollo

El servidor de Next.js iniciará, normalmente en http://localhost:3000.

---

## Producción

### Backend con ngrok

1. **Ejecutar localmente el backend**  
   Asegúrate de tener el backend compilado o listo para producción:

   - **cd back**
   - **npm install** # Solo si no lo habías hecho antes
   - **npm run build**
   - **npm run start**

   Ahora el backend estará corriendo (por ejemplo, en `http://localhost:3001`).

2. **Iniciar ngrok**  
   En otro terminal:

   `ngrok http 3001`

   ngrok generará una URL pública (algo como `https://<subdominio>.ngrok.io`).

3. **Actualizar la variable de entorno del Frontend**  
   Toma esa URL pública y configúrala como `NEXT_PUBLIC_API_URL` para tu frontend en producción (ver siguiente sección “Frontend en Vercel”).

> **Nota**: Cada vez que inicies ngrok, puede cambiar el subdominio si no tienes una cuenta Pro. Asegúrate de actualizar la variable en Vercel cuando esto suceda.

### Frontend en Vercel

1. **Variables de Entorno**  
   Ve a tu panel de Vercel y configura:

   - `NEXT_PUBLIC_API_URL` = la URL pública de Ngrok que apunta a tu backend (por ejemplo, `https://<subdominio>.ngrok.io`).
   - Cualquier otra variable si lo necesitas.

2. **Build Command**  
   En Vercel, normalmente:

   `npm run build`

   Este comando generará la build de tu aplicación Next.js.

3. **URL del Frontend**  
   Vercel te proveerá una URL del tipo `https://<tu-front>.vercel.app/`.  
   Los usuarios podrán visitar esa URL y el frontend consumirá tu backend a través de ngrok.

---

## Endpoints de la API

El backend provee los siguientes endpoints para consultar la información de los sets y cartas de Pokémon TCG:

- **`GET /sets`**  
   Retorna todos los sets disponibles.
- **`GET /sets/:id/cards`**  
   Retorna todas las cartas del set con el ID especificado.
- **`GET /cards/:id`**
   Retorna información detallada de una carta, incluyendo imágenes y datos de mercado.

### Documentación con Swagger

La API cuenta con documentación generada por **Swagger**. Para acceder a ella localmente (después de levantar el contenedor), visita:

`http://localhost:<PUERTO_BACKEND>/api-docs`

(El puerto depende de tu configuración en el `docker-compose.yml` o en tu archivo `.env`.)

---

## ¡Listo!

- **Modo Desarrollo**: Usa `docker-compose` para levantar el backend y la base de datos; luego `npm run dev` en la carpeta `front`.
- **Modo Producción**:
  - El **backend** se expone localmente y se hace público mediante **ngrok**.
  - El **frontend** se despliega en **Vercel**, configurando el `NEXT_PUBLIC_API_URL` con la URL generada por ngrok.

Si en algún momento quieres correr el backend sin Docker, deberás ajustar las variables de entorno (`DB_HOST`, etc.) y levantar tu propia instancia de PostgreSQL fuera de Docker. Por ahora, en esta configuración, Docker es **requerido** para backend + DB en desarrollo.

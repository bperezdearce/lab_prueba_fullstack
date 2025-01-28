# Pokémon TCG - Sets y Cartas (Escarlata y Púrpura)

Esta aplicación fue desarrollada con la finalidad de **listar y visualizar información** sobre los **sets** y **cartas** de la serie **Escarlata y Púrpura** del juego Pokémon TCG.

- Incluye una base de datos en PostgreSQL con información detallada de sets y cartas.
- Cuenta con un **backend** que expone una API REST para consultar dicha información.
- Provee un **frontend** para mostrar de manera amigable los datos de los sets y sus cartas asociadas.

## Instalación y Ejecución en Entorno Local (Sin Docker)

### 1. Clonar el repositorio

`git clone <URL_DE_TU_REPOSITORIO> cd LAB_PRUEBA_FULLSTACK`

### 2. Variables de Entorno

Asegúrate de configurar correctamente tus variables de entorno en el archivo `.env` (o usar `.env.example` como plantilla) tanto en el backend como en el root del proyecto, si corresponde.

- Para el **backend** necesitarás valores como `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, etc.
- Para el **frontend**, puede que requieras la URL del backend (`NEXT_PUBLIC_API_URL`, por ejemplo).

### 3. Instalación de dependencias

#### 3.1. Backend

`cd back npm install`

- Aquí se instalan las dependencias de Node y TypeScript para el backend.

#### 3.2. Frontend

`cd ../front npm install`

- Se instalan las dependencias de Next.js y TailwindCSS para el frontend.

### 4. Ejecución local

#### 4.1. Backend

Dentro de la carpeta `back`:

- **Desarrollo (hot reload con nodemon)**
    
    `npm run dev`
    
- **Build y ejecución**
    
    `npm run build npm run start`
    
    Esto compila el proyecto a JavaScript en `dist/` y luego levanta el servidor en Node.

#### 4.2. Frontend

Dentro de la carpeta `front`:

- **Desarrollo**
    
    `npm run dev`
    
- **Build y ejecución**
    
    `npm run build npm run start`
    
    Con esto se crea la carpeta `.next/` y luego se levanta la aplicación Next.js en modo producción.

---

## Ejecución con Docker (Desarrollo)

Esta parte es opcional y se usa solo en **entornos de desarrollo**, si prefieres aislar la base de datos y/o la aplicación en contenedores. El archivo `docker-compose.yml` provee un contenedor de **PostgreSQL** y, opcionalmente, para **backend** y **frontend**.

1. **Configurar `.env`** apropiadamente para apuntar a los contenedores (p. ej. `DB_HOST=db` si el servicio se llama `db` en el `docker-compose.yml`).
2. **Levantar contenedores**:
    
    `docker-compose up -d`
    
3. Verifica que los contenedores estén corriendo con:
    
    `docker-compose ps`

---

## Despliegue en Render

Para producción, la aplicación está desplegada en [Render](https://render.com/). Solo se despliega el **backend** (Node) y el **frontend** (Next.js) como servicios separados (o un único servicio fullstack, dependiendo de tu setup).

1. **Variables de entorno**:
    
    - Configura en el panel de Render las mismas variables de entorno que usas localmente (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, etc.).
    - Render te permite administrar variables de entorno de forma segura desde su dashboard.
2. **Base de datos**:
    
    - Si usas la base de datos de Render, asigna la URL/host/puerto que Render te proporciona para `DB_HOST`, `DB_PORT`, etc.
    - Si usas la base de datos en Docker (local) únicamente para desarrollo, entonces en Render apuntas a otra instancia de PostgreSQL en la nube.
3. **Build & Start Commands**:
    
    - **Backend**:
        - _Build Command_: `npm run build`
        - _Start Command_: `npm run start`
    - **Frontend**:
        - _Build Command_: `npm run build`
        - _Start Command_: `npm run start`
4. **Enlaces de despliegue**
    
    - Cada servicio en Render tendrá su propia URL pública.
    - Si el frontend consume el backend, asegúrate de actualizar la variable `NEXT_PUBLIC_API_URL` (o similar) para apuntar a la URL del backend en Render.

## Endpoints de la API

El backend provee los siguientes endpoints para consultar la información de los sets y las cartas de Pokémon TCG:

- **`GET /sets`**  
    Retorna todos los sets disponibles.
    
- **`GET /sets/:id/cards`**  
    Retorna todas las cartas asociadas al set con el ID especificado.
    
- **`GET /cards/:id`** _(opcional)_  
    Retorna la información detallada de una carta específica, incluyendo imágenes y datos de mercado.
    

### Documentación con Swagger

La API cuenta con documentación generada automáticamente por **Swagger**. Para acceder a ella localmente (después de levantar el servidor), ve a la ruta donde la hayas configurado.  
Por ejemplo:

`http://localhost:3001/api-docs`

De esta manera, podrás explorar todos los endpoints disponibles, revisar sus parámetros y ver ejemplos de respuestas.
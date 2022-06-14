# ⚡ Cliente - Servidor (Backend) ⚡
(Ejercicio 4) Semana 5: LaunchX | Mission Backend JS

Esta es una práctica fullstack ya que tenemos un backend (este proyecto) y un [cliente](https://github.com/herr-code/client-launchx).
El backend es una API (realizada [aquí](https://github.com/herr-code/api-prisma-db)) la cúal será consumida por un cliente (frontend), que no es más que una aplicación hecha en [Vue 3](https://vuejs.org/).

## :exclamation: Consideraciones

Comunicar aplicaciones de diferentes dominios generan un problema de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS). Básicamente es un mecanismo que implementan los navegadores para permitir acceder a recursos de un servidor en un origen distinto (dominio) al que pertenece.

![diagrama](https://user-images.githubusercontent.com/61515833/173467635-a494a4ca-f051-4cbd-9425-073bf704cb25.png)

Para solucionar esto tenemos que hacer uso del paquete [CORS](https://www.npmjs.com/package/cors) para Node JS.

Instalamos la dependencia necesaria: `cors`:

```
npm install cors --save
```

Ahora escribimos el código necesario en `lib/server.js` para permitir el acceso:

```js
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
```
## :pushpin: Requerimientos:


2. Dependencias y tecnologías.

:tanabata_tree: Tecnologías usadas:

:mag_right: Dependencias:

- [CORS](https://www.npmjs.com/package/cors "Cors NPM") ^4.18.1 Proporciona un middleware Connect / Express que se puede usar para habilitar CORS con varias opciones.

6. El siguiente grafico representa la estructura de la solucíón:

```mermaid
graph TD;
    Server-->BD
    BD-->Server;
    Schema.prisma-->BD
    Seed-->BD[(Database)]
```
- `Server.js`: Contendrá los endpoints (API).
- `Seed.js`: Inserciones iniciales a la BD.
- `Schema.prisma`: Aquí se define la estructura de las tablas para realizar las migraciones.
- `.env`: Archivo para establecer las variables de entorno y contiene la cadena de conección de PostgreSQL con la siguiente estructura:

```env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

## :shipit: Resultados


## :open_file_folder: Estructura de carpetas

```
api-prisma-db
│   .eslintrc.js
│   .gitignore
│   .env
│   package-lock.json
│   package.json
│   README.md   
│
└───prisma
│   └───migrations
│   │   └───20220528020807_init
│   │   │    │  migration.sql
│   │   │
│   │   └───20220530021201_init
│   │   │   │  migration.sql
│   │   │
│   │   │  migration_lock.toml
│   │
│   └───schema.prisma
│   │   
│   └───seed.js
│    
└───lib
│   |   server.js
```


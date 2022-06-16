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

### Nuevo Feature Fullstack

`missionCommander`
| Campo | Tipo |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| username | String |
| mainStack | String |
| currentEnrollment | Boolean |
| hasAzureCertification | Boolean |

1. Crea la tabla nueva anterior. Agrega unos registros por medio de los seeds.
2. Crea un CRUD expuesto en un API en el `server.js` (métodos GET, POST, PUT, DELETE, recuerda que el método GET deberá tener 2 endpoints, uno para traer todos los registros y otro para consultar solo el registro por ID).
3. En la pantalla inicial del front, consulta todos los registros en esta tabla y muéstralos. Tú decides el diseño.
4. Agrega la posibilidad de agregar uno nuevo.
5. Agrega la posibilidad de editar el `mainStack`.
6. Agrega la posibilidad de eliminar el registro.


## Dependencias y tecnologías.

:mag_right: Dependencias:

- [CORS](https://www.npmjs.com/package/cors "Cors NPM") ^4.18.1 Proporciona un middleware Connect / Express que se puede usar para habilitar CORS con varias opciones.

El siguiente grafico representa la estructura de la solucíón:

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

Para verificar los endpoints se hace uso de Postman. He aquí algunos ejemplos:

- Endpoint: Obtener todos los missionComanders:
  - Request => localhost:3000/missionCommanders

![Animation1](https://user-images.githubusercontent.com/61515833/173965537-9908a0f6-b951-4992-b4ee-91d7ae13274c.gif)

- Endpoint: Crear un nuevo missionComander:
  - Request => localhost:3000/missionCommander (POST)

![Animation2](https://user-images.githubusercontent.com/61515833/173966359-2abb6a6e-c510-48bb-ba27-75b96c7c2274.gif)

- Endpoint: Actualizar el `mainStack` de un missionComander mediante el id:
  - Request => localhost:3000/missionCommander/4 (PUT)

![Animation3](https://user-images.githubusercontent.com/61515833/173968359-dfd81346-ec1e-4105-a7ae-6f4c6b920b32.gif)

- Endpoint: Eliminar un missionComander mediante el id:
  - Request => localhost:3000/missionCommander/4 (DELETE)

![Animation4](https://user-images.githubusercontent.com/61515833/173969386-ddd2abd8-d881-431f-928d-0af3c0dededd.gif)

Con lo realizado se cubren los requerimientos 1 y 2. Los demás requerimientos (3, 4, 5, 6) no corresponden a este proyecto y puedes consultarlos [aquí](https://github.com/herr-code/client-launchx).

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


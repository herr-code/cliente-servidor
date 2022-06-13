# ⚡ Cliente - Servidor (Backend) ⚡
(Ejercicio 4) Semana 5: LaunchX | Mission Backend JS

Esta es una práctica fullstack ya que tenemos un backend (este proyecto) y un [cliente](https://github.com/herr-code/client-launchx).
El backend es una API (realizada [aquí](https://github.com/herr-code/api-prisma-db)) la cúal será consumida por un cliente (frontend), que no es más que una aplicación hecha en [Vue 3](https://vuejs.org/).

## :exclamation: Consideraciones

Comunicar aplicaciones de diferentes dominios generan un problema de [CORS]()

## :pushpin: Requerimientos:


2. Dependencias y tecnologías.

:tanabata_tree: Tecnologías usadas:

- [Node JS](https://nodejs.org/es/ "Node Oficial") v13.14.0 (Entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome).
- [NPM](https://www.npmjs.com/ "NPM Oficial") v6.14.4 (Gestor de dependencias para Node JS)
- [Git](https://git-scm.com/ "Git Oficial") v2.31.1 (Sistema de control de versiones)
- [PostgreSQL](https://www.postgresql.org/ "PostgreSQL Oficial") v14 (Sistema de base de datos relacional de objetos de código abierto)
- [Postman](https://www.postman.com/ "Postman Oficial") (Aplicación que dispone de herramientas nativas que nos permite realizar peticiones de una manera simple para testear APIs de tipo REST propias o de terceros)

:mag_right: Dependencias:

- [Express JS](http://expressjs.com/ "Express Oficial") ^4.18.1 (Web framework de Node JS para infraestructura de aplicaciones web y simplificar la creación de APIS).
- [Eslint](https://eslint.org/ "Eslint Oficial") ^8.15.0 (Linter que examina código Javascript de acuerdo a ciertas normas y criterios (personalizables por el programador) para que el código Javascript siga unos estándares y estilos de calidad).
- [Prisma](https://jestjs.io/es-ES/](https://www.prisma.io/ "Prisma Oficial") ^3.14.0 ([ORM](https://codigofacilito.com/articulos/orm-explicacion "Qué es un ORM") de próxima generación de código abierto).

3. Crear un proyecto de JS dentro de la carpeta `visual-thinking-api` con las opciones por defecto:

```
npm init --yes
```

4. Inicializar un repositorio dentro de la carpeta `api-prisma-db`:

```
git init
```
5. Instalar las dependencias necesarias: `Express JS`, `Eslinter`, `Prisma`:

```
npm install express --save
npm install eslint --save-dev
npm install prisma --save-dev
```

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
Para consultar más información sobre Prisma (migraciones, schemas, etc.) [aquí](https://www.prisma.io/docs/getting-started "Prisma Oficial").

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


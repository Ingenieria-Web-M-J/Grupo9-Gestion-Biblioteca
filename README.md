# Documentación del Proyecto

Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Propósito del Proyecto

El propósito de este proyecto es gestionar transacciones relacionadas con libros y sus movimientos, así como manejar la información de los maestros. El proyecto permite a los usuarios agregar, ver y gestionar libros y sus transacciones asociadas, además de gestionar los registros de los maestros.

## Primeros Pasos

Para comenzar con este proyecto, sigue los pasos a continuación.

### Prerrequisitos

Asegúrate de tener instalados en tu máquina:
- Node.js
- Yarn (manejador de paquetes)

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-repo/tu-proyecto.git
   cd tu-proyecto
   ```

2. **Instala las dependencias**

   ```bash
   yarn install
   ```

3. **Agrega Prisma y su cliente**

   ```bash
   yarn add prisma -D
   yarn add @prisma/client
   yarn prisma generate
   ```

4. **Agrega los paquetes necesarios**

   ```bash
   yarn add type-graphql
   yarn add next react react-dom
   yarn add next-auth
   yarn add @auth/prisma-adapter
   yarn add react-modal
   ```

### Configuración de la Base de Datos

1. **Inicializar Prisma primera vez**

   ```bash
   npx prisma init
   ```

2. **Migra la base de datos**

   Si es la primera vez configurando la base de datos:

   ```bash
   npx prisma migrate dev --name "PrimerMigracion"
   ```

   Para desplegar migraciones manteniendo los datos existentes:

   ```bash
   npx prisma deploy
   ```

### Ejecutando el Servidor de Desarrollo

1. **Inicia el servidor de desarrollo**

   ```bash
   yarn dev
   ```

2. **Abre el proyecto en tu navegador**

   Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

### Estructura del Proyecto

- **Páginas**

  Puedes comenzar a editar la página modificando `pages/index.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

  **Rutas de API**

  [Las rutas de API](https://nextjs.org/docs/api-routes/introduction) se pueden acceder en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `pages/api/hello.ts`.

  El directorio `pages/api` está mapeado a `/api/*`. Los archivos en este directorio se tratan como [rutas de API](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas de React.

- **Fuentes**

  Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Más Información

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y la API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes revisar el [repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - tus comentarios y contribuciones son bienvenidos.

## Despliegue en Vercel

La manera más fácil de desplegar tu aplicación de Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación sobre el despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.

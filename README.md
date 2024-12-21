# Proyecto de Programación Web - Aplicación SPA con React

## Descripción
Esta es una aplicación web desarrollada como Proyecto Integrador en el marco de la asignatura de Programación Web para la Universidad de Tecnologia Nacional (utn). La aplicación es una SPA (Single Page Application) construida en React y permite realizar un CRUD completo sobre dos entidades: una entidad principal y una entidad de soporte.

La temática de la aplicación está orientada al negocio (E-commerce) de **componentes tecnológicos**, permitiendo gestionar productos y categorías de forma eficiente.

---

## Funcionalidades Principales

1. **Autenticación**
   - Registro e inicio de sesión seguro utilizando tokens JWT.

2. **Módulo de ABMC (Alta, Baja, Modificación, Consulta)**
   - Gestión completa de productos y categorías con validaciones.

3. **Navegación SPA**
   - Interfaz dinámica y navegación sin recargar la página.

4. **Uso de Hooks**
   - Implementación de hooks personalizados y optimización con `useState`, `useEffect`, y `useContext`.

---

## Tecnologías Utilizadas

- **React**: Framework principal para construir la SPA.
- **React Router**: Manejo de rutas dinámicas y navegación.
- **Axios**: Conexión con la API para operaciones CRUD.
- **CSS**: Estilización moderna y responsive.
- **Vercel**: Hosting gratuito para despliegue de la aplicación.
- **Git**: Control de versiones y trabajo colaborativo.

---

## Estructura del Proyecto

```
storePC-frontend
├── node_modules
├── public
│   ├── icon.svg
│   └── index.html
├── src
│   ├── assets
│   │   ├── sponsors
│   │   │   ├── amd.webp
│   │   │   ├── asus.webp
│   │   │   ├── intel.webp
│   │   │   ├── kingston.webp
│   │   │   └── anuncio.webp
│   │   ├── carrito.svg
│   │   ├── logo.svg
│   │   ├── lupa.svg
│   │   ├── pcPromo.webp
│   │   ├── styles.css
│   │   └── user.svg
│   ├── components
│   ├── context
│   │   └── UserAuthContext.jsx
│   ├── hooks
│   │   ├── fetchProductsByCategory.jsx
│   │   ├── useFetchCategories.jsx
│   │   ├── useFetchProducts.jsx
│   │   ├── useFetchUsers.jsx
│   │   ├── useLogin.jsx
│   │   └── useRegister.jsx
│   ├── pages
│   │   ├── AdminPages
│   │   ├── ArmadoPCPage
│   │   ├── HomePage
│   │   ├── ProductosPage
│   │   └── SoportePage
│   ├── router
│   │   ├── AppRouter.jsx
│   │   └── ProtectedRoutes.jsx
│   ├── services
│   ├── utils
│   │   └── helpers.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
---

## Instrucciones de Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/alfarofernando/storePc-backend.git
   git clone https://github.com/zfranco21/storepc-frontend.git
   ```

2. **Instalar dependencias**
   ```bash
   cd proyecto-react-spa
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

---

## Pagina web

https://cerulean-mousse-bda5aa.netlify.app/

---

## Contribuidores

- Franco Herrera (Desarrollador Front-End)
  - Github: https://github.com/zfranco21
  - Linkedin: https://www.linkedin.com/in/zfrancoh/

- Fernando Alfaro (Desarrollador Back-End)
  - Github: https://github.com/alfarofernando
  - Linkedin: https://www.linkedin.com/in/fernando-alfaro-132973246/


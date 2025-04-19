
# 🚀 MERN Setup – Fullstack Boilerplate

Este es un setup de fullstack utilizando la pila **MERN** (MongoDB, Express, React y Node.js). Este proyecto proporciona una base sólida para construir aplicaciones web escalables y seguras.

---

## 🧩 Características

- 🔗 Utiliza **MongoDB** como base de datos NoSQL para almacenar y recuperar datos.
- 🚦 Usa **Express.js** como framework de Node.js para crear la API RESTful.
- 🧠 Funciona sobre **Node.js** como entorno de ejecución del servidor.
- 🎨 Compatible con **React.js** para construir interfaces de usuario interactivas.

---

## 📁 Estructura del Proyecto

### 🛠 Backend

> Organizado por tipos (`.ts`) con dependencias separadas para desarrollo y producción.

#### 📦 Dependencias

- **Desarrollo (`devDependencies`):**

```bash
npm install -D typescript ts-node-dev @types/node @types/express @types/cors @types/morgan
```

- **Producción (`dependencies`):**

```bash
npm install express dotenv helmet morgan winston cors mongoose
```

#### ⚡ Recarga en caliente con `ts-node-dev`

| Característica              | nodemon + ts-node           | ts-node-dev ✅ |
|----------------------------|-----------------------------|----------------|
| Soporte TS en caliente     | ⚠️ Requiere configuración    | ✅ Listo desde el inicio |
| Herramienta de recarga     | Manual                      | Automática     |
| Minimalista y moderno      | ❌                          | ✅             |
| Recomendado para TS        | ❌                          | ✅ Sí          |

#### 📜 Scripts del backend (`package.json`)

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/server.ts",
  "dev:fast": "ts-node-dev --respawn --transpile-only src/server.ts"
}
```

---

### 🎯 Frontend

> También estructurado por tipos con dependencias bien organizadas.

#### 📦 Dependencias

- **Producción (`dependencies`):**
  - `react`
  - `react-dom`
  - `axios`

- **Desarrollo (`devDependencies`):**
  - `vite`
  - `typescript`
  - `@vitejs/plugin-react-swc`
  - `@eslint/js`
  - `eslint`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
  - `@types/react`
  - `@types/react-dom`
  - `globals`
  - `typescript-eslint`

---

## ⚙️ Instalación y Ejecución

1. 🔁 Clona el repositorio:

```bash
git clone https://github.com/RichardFelic/mern-setup.git
```

2. 📥 Instala las dependencias en ambas carpetas (`backend/` y `frontend/`):

```bash
npm install
```

3. 🛡 Crea el archivo `.env` en **ambas carpetas** con las variables de entorno necesarias.

4. 🚀 Ejecuta los servidores en cada carpeta:

```bash
# En backend/
npm run dev

# En frontend/
npm run dev
```

---

## 🤝 Contribuciones

Este proyecto es de código abierto y cualquier contribución es bienvenida. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución.
3. Realiza los cambios necesarios.
4. Envía un pull request para revisión.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.  
Puedes encontrar más información en el archivo Puedes encontrar más información en el archivo [`LICENSE`]([LICENSE](https://github.com/RichardFelic/mern-setup?tab=MIT-1-ov-file)).

---

¡Gracias por visitar este repositorio! 🙌
```

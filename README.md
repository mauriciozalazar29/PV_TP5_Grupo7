# 📘 Gestión de Alumnos – EduManager

Aplicación web desarrollada en **React + Vite** para la gestión de alumnos. Permite agregar, editar, eliminar y visualizar información detallada de cada estudiante en un entorno moderno y amigable. Está estructurada en componentes funcionales reutilizables, aplicando eventos en React y navegación entre vistas con React Router DOM.

---

## 👥 Desarrolladores 

* Mauricio Tomas Zalazar – [@mauriciozalazar29](https://github.com/mauriciozalazar29)
* Mariano Gabriel Gutiérrez – [@marianogutierrez2008](https://github.com/marianogutierrez2008)

---

## 🚀 Tecnologías

* ⚛️ React
* ⚡ Vite
* 🌐 React Router DOM
* 💅 Bootstrap 5
* 🧠 JSX
* 💻 JavaScript (ES6+)

---

## ⚙️ Características Técnicas

* Hooks utilizados:

  * `useState`, `useEffect`, `useMemo`, `useCallback`
* Manejo de eventos:

  * Sintéticos: `onClick`, `onChange`, `onSubmit`
  * Nativos: con `addEventListener` (si es necesario)
* Comunicación entre componentes:

  * Props para eventos personalizados

---

## 📚 Funcionalidades principales

* 🏠 **Página de inicio** con presentación y navegación
* 👨‍🏫 **Lista de alumnos** en una tabla responsiva
* 🔍 **Vista de detalles** individuales por alumno
* ➕ **Agregar alumno** con validaciones
* ✏️ **Editar alumno** con control de duplicados y validaciones
* ❌ **Eliminar alumno** con confirmación
* ↺ **Mensajes dinámicos** tras acciones exitosas
* 🧱 **Navegación fluida** entre vistas con rutas dinámicas:

  * `/alumnos/:id`
  * `/alumnos/:id/editar`

---

## 💠 Cómo usar el proyecto

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/mauriciozalazar29/PV_TP5_Grupo7.git
   cd PV_TP5_Grupo7
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Ejecutá la app:

   ```bash
   npm run dev
   ```

4. Abrí el navegador en: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Buenas prácticas aplicadas

* 🧹 Componentes reutilizables y separados por responsabilidad
* ✅ Validaciones en formularios y control de errores
* 📦 Manejo adecuado del estado global
* ♻️ Eliminación de ramas Git luego del merge
* 💬 Confirmaciones amigables al usuario tras crear, editar o eliminar

---

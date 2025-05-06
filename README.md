# k0lmena-project

Este es un proyecto base de automatización usando el framework **k0lmena** con integración de:
- **Cucumber + Playwright** para pruebas de UI.
- **Artillery** para pruebas de rendimiento.
- **TypeScript** como lenguaje principal.

---

## 🚀 Requisitos

- Node.js (>= 18.x recomendado)
- Navegadores instalados con `npx playwright install`
- Git (opcional para subir a GitHub)

---

## 📁 Estructura del proyecto

```
k0lmena-project/
├── tests/
│   ├── ui/
│   │   ├── features/
│   │   │   └── login.feature
│   │   ├── steps/
│   │   │   └── loginS.ts
│   │   ├── pages/
│   │   │   └── loginP.ts
│   │   └── support/
│   │       ├── hooks.ts
│   │       └── world.ts
│   └── performance/
│       └── scripts/
│           └── test-load.yml
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Scripts disponibles

| Comando            | Descripción                          |
|--------------------|--------------------------------------|
| `npm run test:ui`  | Ejecuta pruebas de UI con Playwright |
| `npm run test:perf`| Ejecuta pruebas de performance con Artillery |
| `npm run report`   | Genera reporte con Allure (si se configura) |

---

## 🌐 Prueba de ejemplo

Se prueba el sitio de OrangeHRM:

🔗 https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Credenciales:
- Usuario: `Admin`
- Contraseña: `admin123`

---

## 📸 Dashboard esperado

El test valida que aparezca el texto `Dashboard` después del login exitoso.

---

## 🧪 Ejecutar pruebas

```bash
npm install
npx playwright install
npm run test:ui
```

---

## ✨ Autor

Proyecto base generado por Ricardo Torrado.

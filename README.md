# SismoSeguro Colombia

Plataforma para apoyar la preparación y respuesta ante sismos en Colombia, con información de prevención, alertas, puntos de encuentro y recursos de capacitación.

> **Estado:** configuración inicial del repositorio. La arquitectura y el stack definitivo (por ejemplo, React/Vite o Next.js, aplicación móvil y servicios de backend) deben confirmarse antes de generar el scaffold de la aplicación.

## Equipo y planificación

- **Gestión de tareas y sprints:** Linear.
- **Repositorio:** GitHub, privado.
- **Rama principal:** `main`.
- **Flujo de cambios:** ramas por tarea + Pull Request + revisión antes de integrar.
- **Seguimiento:** cada rama y Pull Request debe referenciar su issue de Linear (por ejemplo, `SIS-77`).

## Flujo de trabajo

1. Actualiza tu rama local `main` con los cambios del equipo.
2. Crea una rama para una sola tarea.
3. Implementa el cambio y ejecuta las pruebas relevantes.
4. Revisa los archivos modificados y crea uno o más commits con mensajes claros.
5. Sube tu rama y abre un Pull Request dirigido a `main`.
6. Pide revisión a otro integrante. Integra el PR solo cuando cumpla los criterios de aceptación y las comprobaciones acordadas.

### Convención de ramas

- Funcionalidad: `feature/SIS-XX-descripcion-corta`
- Corrección: `fix/SIS-XX-descripcion-corta`
- Documentación: `docs/SIS-XX-descripcion-corta`
- Pruebas: `test/SIS-XX-descripcion-corta`

### Comandos básicos

```bash
git switch main
git pull origin main
git switch -c feature/SIS-XX-descripcion-corta

# Trabaja en los archivos y ejecuta las pruebas
git status
git add ruta/del/archivo
git commit -m "feat(SIS-XX): describe el cambio"
git push -u origin feature/SIS-XX-descripcion-corta
```

Después abre el Pull Request en GitHub hacia `main`. No hagas push directo a `main` para el trabajo habitual.

## Reglas para proteger el proyecto

- No subir secretos, tokens, contraseñas ni archivos `.env`.
- Mantener un archivo `.env.example` con nombres de variables y valores ficticios, nunca credenciales reales.
- No sobrescribir ni borrar archivos existentes sin revisar su contenido y coordinarlo con el equipo.
- Mantener los cambios de cada PR pequeños y relacionados con una issue.
- Actualizar la documentación cuando cambie la forma de instalar, configurar o ejecutar el proyecto.
- Antes de integrar, comprobar el diff, los criterios de aceptación y las pruebas disponibles.

## Estructura prevista

La estructura final se definirá cuando el equipo confirme el stack. Evitamos crear carpetas de frontend, móvil o backend antes de tomar esa decisión.

## Instalación y ejecución

Pendiente de definir el stack y añadir los pasos reproducibles de instalación, configuración y ejecución.

## Seguridad

Si una credencial se sube por error, eliminarla del repositorio no basta: debe revocarse o rotarse inmediatamente. Reporta el incidente al responsable del proyecto.

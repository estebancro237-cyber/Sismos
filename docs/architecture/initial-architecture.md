# Arquitectura inicial — SismoSeguro Colombia

**Estado:** propuesta técnica inicial para validar en equipo.  
**Fecha:** 2026-10-29  
**Alcance:** MVP académico; esta decisión no implica que alertas oficiales o servicios externos estén integrados.

## Decisiones propuestas

1. Monolito modular en el backend para reducir complejidad operativa con un equipo pequeño.
2. Web con React + TypeScript + Vite.
3. App móvil con React Native + Expo + TypeScript.
4. API REST con NestJS y validación explícita de entrada.
5. PostgreSQL como base relacional; PostGIS solo para las consultas geográficas que el MVP requiera.
6. Supabase puede alojar PostgreSQL y autenticación si el equipo valida su uso. No mantener dos sistemas de identidad paralelos.
7. Toda integración con fuentes sísmicas externas debe aislarse detrás de un módulo/adaptador y registrar fuente, hora de consulta y errores.
8. El producto debe distinguir datos oficiales, contenido educativo revisado y contenido en borrador. La interfaz no debe presentarse como sistema oficial de alertas.

## Límites modulares sugeridos

- **Identity:** autenticación, perfil y permisos.
- **Learning:** cursos, módulos, lecciones, evaluaciones y progreso.
- **SeismicData:** adaptadores para fuentes oficiales, normalización y trazabilidad.
- **Notifications:** preferencias y entrega de notificaciones; no prometer disponibilidad sin proveedor configurado.
- **Geography:** zonas, puntos de encuentro y rutas; acceso a geolocalización con permiso.
- **Administration:** publicación y revisión de contenido, gestión de puntos y auditoría.
- **Shared:** configuración, validación, errores, logging y contratos comunes.

## Contrato HTTP

- Prefijo versionado: `/api/v1`.
- Respuestas JSON.
- Validar todos los parámetros y cuerpos en el servidor.
- Errores consistentes: `statusCode`, `code`, `message`, `requestId`.
- Paginación explícita en listados.
- No exponer stack traces, tokens ni información personal en respuestas o logs.

## Estructura objetivo

```text
apps/
  web/                 # React + Vite
  mobile/              # React Native + Expo
  api/                 # NestJS
packages/
  contracts/           # tipos/esquemas compartidos cuando convenga
docs/
  architecture/
  api/
```

La rama actual contiene el prototipo web en la raíz. La migración a monorepo debe hacerse en una tarea dedicada y con pruebas; no mover carpetas a ciegas.

## Datos y migraciones

- Versionar cambios de esquema.
- Probar migraciones desde una base vacía y documentar rollback cuando aplique.
- No incluir credenciales reales; usar `.env.example` con valores ficticios.
- No guardar ubicación precisa más tiempo del necesario; documentar consentimiento, propósito y retención antes de implementar.

## Pruebas y entrega

- Pull requests deben ejecutar checks automáticos.
- Unit tests para lógica pura; integración para repositorios/API; pruebas de contrato para respuestas.
- La demo debe indicar claramente datos simulados frente a datos reales.
- Requerido antes de producción: revisión de seguridad, accesibilidad, privacidad, monitoreo y validación de fuentes oficiales.

## Pendientes de decisión

- Confirmar qué módulos forman parte del MVP evaluable.
- Decidir Supabase Auth frente a autenticación propia de NestJS (no duplicar).
- Acordar proveedor y alcance de notificaciones.
- Definir contrato de normalización para cada fuente sísmica.
- Validar disponibilidad y permisos del equipo.

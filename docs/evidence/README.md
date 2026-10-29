# Evidencias de implementación — SismoSeguro Colombia

**Actualizado:** 2026-10-29  
**Regla de evidencia:** un PR abierto acredita cambios propuestos, no una integración aprobada ni una ejecución exitosa de pruebas.

## Evidencias verificables en GitHub

| Entregable | Evidencia | Estado comprobable |
|---|---|---|
| Base web React + TypeScript + Vite | [PR #90](https://github.com/estebancro237-cyber/Sismos/pull/90) | Fusionado a main; prototipo informativo |
| CI, lint, pruebas, typecheck y build | [PR #91](https://github.com/estebancro237-cyber/Sismos/pull/91) | Abierto; esperar ejecución de Actions |
| Arquitectura modular inicial | [PR #92](https://github.com/estebancro237-cyber/Sismos/pull/92) | Abierto; propuesta para validar con el equipo |
| Catálogo educativo inicial | [PR #93](https://github.com/estebancro237-cyber/Sismos/pull/93) | Abierto; borrador sujeto a revisión editorial |

## Fuente oficial de preparación sísmica

- UNGRD — [Medidas de prevención ante sismos](https://portal.gestiondelriesgo.gov.co/Paginas/Noticias/2015/Medidas-de-prevencion-ante-sismos.aspx): conocer riesgos, asegurar objetos, simulacros, puntos de encuentro, kit y acciones de autoprotección.
- Servicio Geológico Colombiano — [Información de preparativos ante un sismo](https://www2.sgc.gov.co/Noticias/Paginas/Informaci%C3%B3n-de-preparativos-ante-un-Sismo.aspx): recomendaciones durante y después del evento.
- UNGRD — [Sistema Nacional de Información para la Gestión del Riesgo](https://www.gestiondelriesgo.gov.co/SNIGRD/pagina.aspx?id=149): contexto de preparación y amenaza sísmica.

**Criterio editorial:** la información del catálogo debe cotejarse con las fuentes anteriores y revisarse por una persona competente antes de publicarse como material validado. El proyecto no es una autoridad oficial ni sustituye alertas o instrucciones de las autoridades.

## Bloqueos y criterios pendientes

1. No se ha acreditado una ejecución exitosa de GitHub Actions para el PR #91; verificar la pestaña **Checks** del PR.
2. SIS-20 incluye pruebas de migraciones desde una base limpia. El repositorio todavía no contiene una API ni migraciones de base de datos; ese criterio no puede darse por satisfecho con pruebas solo del frontend.
3. SIS-25 es una propuesta de arquitectura; API NestJS, app móvil Expo, PostGIS y migraciones no están implementados por estos documentos.
4. SIS-5 contiene un catálogo inicial, no una integración funcional en API/interfaz ni un contenido aprobado por revisor.
5. SIS-77 requiere API y persistencia de progreso; no marcar como completada hasta implementar y probar ambos.

## Cómo reproducir las comprobaciones frontend

Con Node.js 22 instalado en una copia local del repositorio:

```bash
npm install
npm run lint
npm test
npm run typecheck
npm run build
```

Adjuntar el resultado de la pestaña **Checks** del PR y/o la salida real de esos comandos. No registrar capturas o logs como exitosos hasta que existan.

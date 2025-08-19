# Visão de Arquitetura (C4)

Este espaço agrega diagramas do **C4 Model** (System Context, Containers, Components e, quando útil, Code).

- DSL em: `/c4/workspace.dsl`
- Diagramas exportados em: `/static/img/c4/*.png`

> Como exportar: veja `/c4/README.md`.

## Níveis
1. **Context**: atores e sistemas externos.
2. **Containers**: serviços, DBs, filas, frontends.
3. **Components**: módulos internos de cada container.
4. **Code**: trechos específicos (opcional).

## Exemplo (mermaid para wire rápido)
```mermaid
flowchart LR
  User((Usuário)) -->|HTTP| Web[Web App]
  Web --> API[API]
  API --> DB[(PostgreSQL)]

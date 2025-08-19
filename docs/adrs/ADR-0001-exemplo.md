
## `docs/adrs/ADR-0001-exemplo.md`
```md
# ADR-0001 — Autenticação centralizada

**Status:** Accepted  
**Data:** 2025-08-19

## Contexto
Precisamos unificar autenticação entre apps web e APIs.

## Decisão
Adotar **JWT** (Access + Refresh), com RBAC no backend.

## Consequências
- ✅ Simples para front-ends; escalável
- ⚠️ Rotação de chaves precisa de processo
- ❌ Mais complexidade em cenários de revogação imediata

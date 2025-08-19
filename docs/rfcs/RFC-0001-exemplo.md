# RFC-0001 — Observabilidade padronizada

**Autor:** @LuccaGianKolenez  
**Status:** Draft  
**Data:** 2025-08-19

## Sumário
Proposta para padronizar logs, métricas e traces (OTel + Grafana stack).

## Motivação
Facilitar troubleshooting e SLOs.

## Design
- SDKs OTel em web e backend
- Export OTLP para Collector
- Dashboards por serviço

## Impactos
- Dependência do Collector
- Pequeno overhead de CPU/RAM

## Plano
1. PoC em 2 serviços
2. Rollout por domínio
3. Documentar painéis

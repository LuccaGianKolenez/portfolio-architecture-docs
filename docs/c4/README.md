# C4 – Exportando diagramas

Recomendado gerar **PlantUML** a partir da DSL e depois **PNG/SVG**:

### 1) Exportar DSL → PlantUML (usando Docker do Structurizr CLI)
```bash
docker run --rm -v $PWD:/wrk -w /wrk structurizr/cli:latest \
  export -workspace c4/workspace.dsl -format plantuml -output c4/out

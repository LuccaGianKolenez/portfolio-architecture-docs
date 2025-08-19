workspace "Portfolio" "Diagrama C4 do portfólio" {
  model {
    user = person "Usuário" "Pessoa que utiliza o sistema"
    web = softwareSystem "Web App" "Front-end React/Next"
    api = softwareSystem "API" "Backends (Nest/Express/Django)"
    db = softwareSystem "Banco" "PostgreSQL"

    user -> web "Acessa"
    web -> api "Consome"
    api -> db "Lê/Escreve"

    container api_container in api "API Service" "NestJS/Express" "HTTP + JSON"
    container worker in api "Worker" "Jobs assíncronos" "Mensageria"
    container postgres in db "PostgreSQL" "DB relacional"
    container cache in api "Redis" "Cache / fila"

    web_container = container web "Frontend" "Next.js/React" "HTTP(S)"

    user -> web_container "Usa"
    web_container -> api_container "REST/GraphQL"
    api_container -> postgres "SQL"
    api_container -> cache "Pub/Sub"
    worker -> postgres "SQL"
  }

  views {
    systemContext web {
      include *
      autolayout lr
    }
    container api {
      include *
      autolayout lr
    }
    theme default
  }
}

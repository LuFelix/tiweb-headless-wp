# 🗺️ Guia de Arquitetura e Mapa Completo do Ecossistema TIWEB

Este documento serve como a **Fonte Única de Verdade (Single Source of Truth)** sobre toda a infraestrutura, domínios, DNS, containers e código do ecossistema TIWEB.

---

## 🏢 1. Topologia Geral do Ecossistema

O ecossistema TIWEB é dividido em duas infraestruturas estratégicas desacopladas:

1. **Hospedagem Compartilhada (HostGator - `50.116.87.68`):**
   - Camada de aquisição, portais estáticos de ultra-velocidade (React/Angular), blog, checkout WooCommerce e área de membros / mimos.
2. **Servidor Dedicado Cloud (VPS Hostinger - `13.140.163.193`):**
   - Camada de execução de sistemas corporativos pesados, bancos relacionais isolados por tenant, webhooks n8n, robôs de IA social e stack de telemetria/observabilidade (Grafana + Prometheus).

```
                               [ INTERNET / VISITANTES ]
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     [ HOSTGATOR: 50.116.87.68 ]                     [ VPS: 13.140.163.193 ]
  (Apache + PHP 8.2 + FTP Deploy)                (Docker + Nginx Proxy Manager)
                  │                                               │
   ├── tiweb.app.br (Portal React)                 ├── smartcontact.tiweb.app.br
   ├── tiweb.app.br/wp-json (WordPress Core)       ├── api.smartcontact.tiweb.app.br
   ├── spedfacil.tiweb.app.br (Angular SPA)        ├── n8n.tiweb.app.br (Orquestrador)
   ├── smartlegal.tiweb.app.br (React Showcase)    ├── mas.educa-ia.app.br (Motor MAS)
   ├── conceptodontologia.odo.br (React)           └── grafana.tiweb.app.br (Observabilidade)
   └── educa-ia.app.br (Portal Loja MAS)
```

---

## 🌐 2. Mapa Completo de Domínios e DNS

| Domínio / Subdomínio | Tipo | Destino / IP | Aplicação / Função | Hospedagem / Stack |
| :--- | :--- | :--- | :--- | :--- |
| **`tiweb.app.br`** | A | `50.116.87.68` | Portal Corporativo TIWEB (React Vite) + WP REST API | HostGator (Raiz `public_html/`) |
| **`spedfacil.tiweb.app.br`** | A | `50.116.87.68` | SPA SPED Fácil (Angular 17+ / Área de Downloads) | HostGator (`public_html/spedfacil/`) |
| **`smartlegal.tiweb.app.br`** | A | `50.116.87.68` | Showcase Vertical Advocacia (React) | HostGator (`public_html/smartlegal/`) |
| **`conceptodontologia.odo.br`**| A | `50.116.87.68` | Case Real Clínica Odontológica (React) | HostGator (`public_html/concept.../`) |
| **`educa-ia.app.br`** | A | `50.116.87.68` | Portal e Loja WooCommerce do MAS | HostGator (`public_html/educa-ia/`) |
| **`smartcontact.tiweb.app.br`**| A | `13.140.163.193`| Frontend do SmartContact (SaaS Atendimento) | VPS (Docker) |
| **`api.smartcontact...`** | A | `13.140.163.193`| API Backend NestJS do SmartContact | VPS (Docker) |
| **`n8n.tiweb.app.br`** | A | `13.140.163.193`| Orquestrador de Automações Sociais e Webhooks | VPS (Docker) |
| **`mas.educa-ia.app.br`** | A | `13.140.163.193`| Motor de Aprendizagem Smart (Lab/Simuladores) | VPS (Docker) |

---

## 🖥️ 3. Descomissionamento na VPS & Ganho de Recursos

Com a virada do tráfego do `site-tiweb` e `spedfacil` para a HostGator, os contêineres legados `tiweb_wp_prod`, `tiweb_mysql_prod` e `tiweb_web_prod` foram desligados na VPS.
- **Memória RAM Liberada:** ~1.5 GB de RAM.
- **Destinação da Folga:** Entrada da stack de observabilidade centralizada (**Grafana + Prometheus + Node Exporter**) para monitoramento de SLA e saúde dos robôs de clientes.

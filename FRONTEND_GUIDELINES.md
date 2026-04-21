# 🧩 SPED FÁCIL - REGRAS DE OURO DO FRONTEND

## 1. ARQUITETURA DE UI (AUTH CARDS)
- **Layout:** Sempre centralizado com `display: flex` e `bg: #282a36`.
- **Width Control:** O `<mat-card>` deve SEMPRE estar dentro de uma `div.login-wrapper`.
- **Medidas Blindadas:** `min-width: 500px` e `max-width: 500px`. Não aceitar valores menores no desktop.
- **Dracula Theme:** Fundo `#282a36`, Card `#44475a`, Botão `#bd93f9`.

## 2. COMPONENTES MATERIAL (MDC)
- **Labels Estáticas:** PROIBIDO usar `mat-label` dentro do campo. Usar `<label class="custom-label">` ACIMA do `mat-form-field`.
- **Bugs de CSS:** Resetar o `notched-outline` para evitar rasgos na borda em modo dark.
- **Placeholders:** Devem ter cor `rgba(248, 248, 242, 0.4)` para legibilidade.

## 3. FLUXO DE NAVEGAÇÃO
- **Ponto de Entrada:** Hero -> `/login`.
- **Alternância:** Login -> `/register` | Register -> `/login`.
- **Lazy Loading:** Sempre usar `loadComponent` para rotas filhas.

## 4. ESTADO E LÓGICA
- **Signals:** Usar Signals para controle de UI (ex: `showManualLogin`).
- **SCSS:** Usar SCSS puro para estrutura. Tailwind apenas para paddings/margins internos.
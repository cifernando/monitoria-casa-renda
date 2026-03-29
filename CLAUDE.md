@AGENTS.md

# Monitoria Casa Rendá

## Workflow

Use a skill **tlc-spec-driven** (`/tlc-spec-driven`) para planejar e implementar features neste projeto.

## Codebase Docs

Antes de implementar qualquer mudança, consulte os docs relevantes em `.specs/codebase/`:

- `.specs/codebase/STACK.md` — tech stack (Next.js 16, React 19, Tailwind v4, TypeScript)
- `.specs/codebase/ARCHITECTURE.md` — arquitetura e padroes (SSG, rota dinamica por telefone, gerador de Story)
- `.specs/codebase/CONVENTIONS.md` — convencoes de codigo (naming, imports, styling, idioma)
- `.specs/codebase/STRUCTURE.md` — estrutura de diretorios e onde cada coisa vive
- `.specs/codebase/TESTING.md` — infraestrutura de testes (inexistente por ora)
- `.specs/codebase/INTEGRATIONS.md` — integracoes externas (nenhuma)
- `.specs/codebase/CONCERNS.md` — tech debt e riscos conhecidos

## Regras

- Dados dos alunos vivem em `src/data/students.ts` — nao espalhar por outros arquivos
- Design tokens (cores, fontes) estao em `src/app/globals.css` — usar as CSS variables, nao hardcodar valores hex
- Conteudo visivel ao usuario em portugues brasileiro; codigo em ingles

# <img src="./docs/assets/brand/hopduck-primary.svg#gh-light-mode-only" alt="HopDuck primary logo" height="34" /><img src="./docs/assets/brand/hopduck-white-orange.svg#gh-dark-mode-only" alt="HopDuck light mode logo" height="34" />

![License](https://img.shields.io/github/license/stephen-wm/hopduck?color=blue)
![Version](https://img.shields.io/github/v/tag/stephen-wm/hopduck?label=version)
![Last Commit](https://img.shields.io/github/last-commit/stephen-wm/hopduck?color=yellow)
![GitHub Repo stars](https://img.shields.io/github/stars/stephen-wm/hopduck)

**HopDuck** is a modern SaaS platform blending hyper-secure URL shorteners with dynamic, device-aware deep links, geo targeting rules, and sub-second edge routing.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```ASCII
hopduck/
├─ .claude/                             # Claude Code workspace settings, commands, and contexts
├─ .cspell/                             # Spell-check dictionaries
├─ .github/                             # GitHub configuration (workflows, issue/PR templates, etc.)
│  ├─ hooks/ultracite.json              # Ultracite hook for fixing lint and formatting issues
│  ├─ CODEOWNERS                        # Pull request template
│  └─ SECURITY.md                       # Security policy, vulnerability reporting, and disclosure process
├─ .husky/                              # Git hooks for enforcing code quality and commit standards
├─ .vscode/                             # VSCode workspace settings, recommended extensions, etc.
├─ public/                              # Static assets served directly by Next.js
├─ src/                                 # Application source code (App Router, components, styles, utilities)
│  └─ app/                              # Next.js App Router (routes, layouts, route handlers, etc.)
│     ├─ favicon.ico                    # Favicon
│     ├─ globals.css                    # Global stylesheet
│     ├─ layout.tsx                     # Root application layout
│     └─ page.tsx                       # Home page
├─ .editorconfig                        # Editor-agnostic coding style rules
├─ .gitattributes                       # Git behavior settings (line endings, diff rules, etc.)
├─ .gitignore                           # Files and directories excluded from version control
├─ .lintstagedrc.json                   # lint-staged configuration for running checks on staged files
├─ .markdownlint-cli2.jsonc             # Markdown linting configuration
├─ .npmrc                               # npm configuration (dependency behavior, install settings)
├─ .nvmrc                               # Node.js version for local development consistency
├─ AGENTS.md                            # Guidelines for AI agents/tools interacting with the codebase
├─ CHANGELOG.md                         # Project changelog (Keep a Changelog format)
├─ CLAUDE.md                            # Project-specific instructions and context for Claude AI
├─ CODE_OF_CONDUCT.md                   # Community standards and enforcement guidelines
├─ commitlint.config.mjs                # Commit message linting rules (Conventional Commits)
├─ CONTRIBUTING.md                      # Contribution guidelines, workflow, and coding standards
├─ cspell.json                          # Spell checking configuration for code and docs
├─ LICENSE                              # Project license (AGPL-3.0)
├─ next.config.ts                       # Next.js configuration
├─ oxfmt.config.ts                      # Oxfmt configuration
├─ oxlint.config.ts                     # Oxlint configuration
├─ package-lock.json                    # Locked dependency versions for reproducible installs
├─ package.json                         # Project metadata, scripts, and dependencies
├─ postcss.config.mjs                   # PostCSS configuration
├─ README.md                            # Project overview, setup, and usage instructions
├─ SUPPORT.md                           # Support channels, troubleshooting, and help resources
└─ tsconfig.json                        # TypeScript configuration
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Versioning

This project is currently in pre-1.0 development. Breaking changes may occur at any time.

Releases follow [Semantic Versioning](https://semver.org/) and are documented in [CHANGELOG.md](./CHANGELOG.md).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Author

Created and maintained by [@stephen-wm](https://github.com/stephen-wm/).

## Contributors

- [@stephen-wm](https://github.com/stephen-wm/)

## License

AGPL-3.0 © 2026 HopDuck. See [LICENSE](./LICENSE) for details.

## Contact

For questions or support, open an issue or email [hello@hopduck.xyz](mailto:hello@hopduck.xyz).

---

Badges generated by [shields.io](https://shields.io/).

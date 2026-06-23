# Changelog

All notable changes to HopDuck will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.3.0] - 2026-06-23

### Added

- Dark and light mode HopDuck logo variants in the README file header.
- Architectural Decision Records (ADR) documents for project package manager, linter/formatter, React Compiler and app router decisions.
- [CONTRIBUTING.md](./CONTRIBUTING.md) with full development workflow and coding standards.
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) based on Contributor Covenant v2.1.
- [SECURITY.md](./.github/SECURITY.md) with vulnerability reporting guidelines.
- [SUPPORT.md](./SUPPORT.md) with instructions on how to ask questions and receive help on the project.
- [Versioning](./README.md#versioning) and [Contributing](./README.md#versioning) sections in README file.
- "Arcjet" term to custom CSpell dictionary (`.cspell/project-terms.txt`).
- Added spell check script in `package.json`.

### Changed

- Replaced inline HTML SVG element in README head with `<img>`.
- Updated project structure diagram in README file to reflect added files and folders.
- Updated lint-staged configuration to execute Ultracite using the project root, ensuring staged files are correctly detected during pre-commit checks.

### Fixed

- Fixed URL for last-commit badge in README header.

## [0.2.0] - 2026-06-23

### Added

- Commitlint + Husky with `pre-commit` and `commit-msg` hooks to enforce conventional commits.
- Ultracite with Oxlint and Oxfmt configurations for linting and formatting source code.
- Lint, formatting, and docs scripts in the `package.json`.
- VSCode workspace settings and recommended extensions.
- `.nvmrc` pinning Node to version `v22.22.1`.
- `.npmrc` to configure NPM behavior for dependency management.
- `engines` field enforcing Node version >=22 and npm >=11 in `package.json`
- CSpell for project spell checking with custom `project-terms` dictionary in `.cspell/` directory.
- Lint-staged to lint, format, and spell check staged files.
- Configured `.github/hooks/ultracite.json` for GitHub awareness of Ultracite lint and formatting commands.
- Project metadata in `package.json` (description, license details, author, etc.).
- Added license, version, last commit, and repo stars badges to the head of the README file.

### Changed

- Updated AI agent files to provide more context on formatting standards for the project.
- Updated project structure diagram in README file to reflect added files and folders.
- Replaced main "HopDuck" heading text with official project logo in README file.

### Fixed

- v[0.1.0] tag date in this CHANGELOG file.

## [0.1.0] - 2026-06-22

### Added

- Initial Next.js 16 project scaffold with App Router, TypeScript, React compiler, and Tailwind CSS v4.
- Added project licensing under AGPL-3.0.
- Added a CHANGELOG following the Keep a Changelog format.
- Added project documentation and setup instructions in the README.
- Added repository metadata and AI agent guidance files.
- Added initial application layout and home page.
- Added `.editorconfig` and `.gitattributes` for consistent editor and Git behavior.

### Changed

- Updated application metadata to use the HopDuck name and description.
- Replaced the default Next.js landing page with an under-construction page linking to the HopDuck GitHub repository.
- Enabled `turbopackFileSystemCacheForDev` in Next.js configuration to cache compiler artifacts and reduce startup times in development.
- Updated TypeScript configuration to strengthen compiler options:
  - Enabled `noFallThroughCaseInSwitch` and `noUnCheckedIndexedAccess` options
  - Disabled `allowUnreachableCode` option suppression

[Unreleased]: https://github.com/stephen-wm/hopduck/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/stephen-wm/hopduck/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/stephen-wm/hopduck/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/stephen-wm/hopduck/releases/tag/v0.1.0

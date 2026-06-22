# Changelog

All notable changes to HopDuck will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.1.0] - 2026-06-19

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

[Unreleased]: https://github.com/stephen-wm/hopduck/compare/v0.5.0...HEAD
[0.1.0]: https://github.com/stephen-wm/hopduck/releases/tag/v0.1.0

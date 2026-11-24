# CLAUDE.md — agent quickstart for ui-components

See workspace router: `../CLAUDE.md`.

## What this is

Shared `@uno-jobs/components` package consumed by UnoJobs web apps
(`git+https://github.com/Unojobs/ui-components.git#v0.9.37` in consumer repos).

## Shipping (PR-based, card p105)

Library: no deploy. Flow: `feature/*` or `bugfix/*` (from `develop`) -> PR into
`develop` -> PR `develop` -> `staging` -> PR `staging` -> `main`. Every PR runs the
`ci` and `security-gates` checks; PRs into `main` need a code-owner approval from
someone other than the author (agent PRs are opened as Karan, so Pushkar approves).
Hotfix: `hotfix/*` from `main` -> PR into `main`, then PR `main` back into `develop`.
Release: after merge to `main`, a person cuts a `vX.Y.Z` tag by hand (consumers pin
`#vX.Y.Z`); there is no release-tag ruleset for this repo. Never push directly to
`develop`, `staging` or `main`, never merge or tag without the user's go-ahead.

## Code Intelligence

- Index: `.codegraph/` (run `codegraph init -i` if missing)
- Obsidian repo note: [[Code Intelligence/Repos/ui-components]]
- For architecture/trace questions: use CodeGraph MCP first

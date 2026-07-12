# CLAUDE.md — agent quickstart for ui-components

See workspace router: `../CLAUDE.md`.

## What this is

Shared `@uno-jobs/components` package consumed by UnoJobs web apps
(`git+https://github.com/Unojobs/ui-components.git#v0.9.37` in consumer repos).

## Shipping (PR-based)

Release branch: `main` (tagged releases). Ship via PR — branch → push →
`gh pr create` → CI/review gate → merge, then cut a tag. Never push directly to
`main` or bypass branch protection unless the user explicitly asks in the moment.
Confirm before merging/tagging. See workspace rule `pr-based-shipping.mdc`.

## Code Intelligence

- Index: `.codegraph/` (run `codegraph init -i` if missing)
- Obsidian repo note: [[Code Intelligence/Repos/ui-components]]
- For architecture/trace questions: use CodeGraph MCP first

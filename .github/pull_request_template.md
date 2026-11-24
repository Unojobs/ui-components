<!--
Keep it short; delete lines that do not apply.
Branch flow: feature/* or bugfix/* -> develop -> staging -> main. hotfix/* -> main (then auto back-merge).
-->

## What and why

<!-- One or two sentences a non-engineer can follow. Link the card or issue. -->

Card / issue:

## Type

- [ ] Feature (`feature/*` -> develop)
- [ ] Bug fix (`bugfix/*` -> develop)
- [ ] Release promotion (develop -> staging, or staging -> main)
- [ ] Hotfix (`hotfix/*` -> main; a back-merge PR to develop opens automatically)
- [ ] Back-merge (main -> develop / staging; merge commit, no squash)

## Who wrote it

- [ ] Opened by an AI agent (session link: ) - a human who is **not** the account owner must review
- [ ] Written by a person

## How it was tested

- [ ] Unit tests added or updated, `ci` passes
- [ ] Checked on staging (promotion and hotfix PRs: say what you checked and when)
- [ ] Not testable before production (say why, and how you will check after deploy)

## Risk and rollback

<!-- What could break, who would notice, and how to undo it. Production rollback =
deploy-production with action=rollback and the previous v* tag. Say if rollback is NOT enough
(data migrations, sent messages, external state). -->

## Security and data

- [ ] No secrets, tokens or personal data in code, config, logs or this description
- [ ] New or upgraded dependencies are needed and come from a trusted source
- [ ] `security-gates` passes, or a baseline entry is added with a reason and an expiry date
- [ ] Hasura migration or metadata change: it is NOT applied by the deploy; the manual,
      production-gated apply workflow is included (see Unojobs-backend PRs #370-#372)
- [ ] New environment variable or secret: listed here (names only) and set in staging and production

## Release notes (library)

- [ ] Consumers pin a tag (`#vX.Y.Z`): a new tag is needed after merge, and consuming apps must bump it

## Deploy notes

<!-- Order of operations, feature flags, config to change, anyone to tell. -->

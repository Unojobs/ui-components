#!/bin/sh
# Pre-commit gate for ui-components.
#
# Two failure modes this guards against:
#
# 1. `.npmrc` pins `_authToken=${GITHUB_TOKEN}` for the private GitHub
#    Packages registry. Yarn classic THROWS ("Failed to replace env in
#    config") on ANY command when GITHUB_TOKEN is unset, which blocked
#    every commit for contributors without a token. lint/typecheck never
#    talk to the registry, so a harmless placeholder is enough to let
#    yarn parse its config. A real token (from Azure Key Vault) is used
#    when present.
#
# 2. ui-components is a shared library that is not always installed in
#    every workspace checkout. When deps are missing, skip with a clear
#    message instead of a cryptic "could not determine executable to run".

export GITHUB_TOKEN="${GITHUB_TOKEN:-placeholder-for-local-lint}"

if [ ! -x node_modules/.bin/lint-staged ]; then
  echo "ui-components: dev dependencies not installed — skipping lint/typecheck."
  echo "  Run 'yarn install' (with GITHUB_TOKEN set) to enable pre-commit checks."
  exit 0
fi

yarn lint-staged && yarn typescript

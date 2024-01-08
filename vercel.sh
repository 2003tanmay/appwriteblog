#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  git log -1 --pretty=oneline --abbrev-commit | grep -w "build" && exit 1 || exit 0

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
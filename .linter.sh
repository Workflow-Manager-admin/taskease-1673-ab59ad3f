#!/bin/bash
cd /tmp/kavia/workspace/code-generation/taskease-1673-ab59ad3f/main_container_for_taskease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


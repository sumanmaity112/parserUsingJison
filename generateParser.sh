#!/usr/bin/env bash
regex="*.lex"
if [[ ! -z "$1" ]]; then
    regex=$1
fi
for file in `ls ${regex}`; do
    jison ${file}
done

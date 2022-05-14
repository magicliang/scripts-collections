#!/bin/sh

# 递归地修改文件权限为可执行
find . -type f  -name '*.sh' -exec chmod 777 \{\} \;;
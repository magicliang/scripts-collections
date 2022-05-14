#!/bin/bash

# git config pull.ff only
git config pull.rebase true
# 注意 global 的选项可用
git config --global init.defaultBranch main
git pull

echo "ready to commit, your comment is: "  
read comment
echo "coment is:  $comment"

git add -A .

git commit -m "$comment"
git push
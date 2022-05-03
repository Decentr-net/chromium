# How to update chromium engine
1. [Checkout the required chrome release branch.](https://www.chromium.org/developers/how-tos/get-the-code/working-with-release-branches/)
2. Use `git cherry-pick` command to merge the changes one by one from the development branch into the local chrome release branch.
3. Fix all of the conflicts that occurred during the merge.
4. Use `git push` to push the changes to the remote branch.
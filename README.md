# ![Logo](chrome/app/theme/chromium/product_logo_64.png) Decentr

Decentr is an open-source browser project that aims to build a safer, faster,
and more stable way for all users to experience the web.

The project's web site is https://decentr.net/.

# How to check out the code
1. To check out the source code locally, don't use `git clone`! Instead,
follow [the instructions on how to get the code](docs/get_the_code.md).
2. Add our github remote: `git remote add decentr https://github.com/Decentr-net/chromium`
3. Download objects and refs from our repository: `git fetch github`
4. Switch to our branch: `git checkout github/${BRANCH_NAME}`
5. Synchronize dependencies: `gclient sync -D`
6. You're ready to build the code. Proceed using the [official chromium instructions](docs/get_the_code.md).
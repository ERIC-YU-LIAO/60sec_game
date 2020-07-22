set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ERIC-YU-LIAO/60sec_game/.git master:gh-pages
git push -f https://github.com/ERIC-YU-LIAO/60sec_game.git master:gh-pages

cd -
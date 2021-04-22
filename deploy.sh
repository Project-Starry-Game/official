# abort on errors 
set -e

npm run build

cd dist

# if you are deploying to a custom domain add a CNAME 
#echo 'yourcustomdomain.com' > CNAME 

git init
git add -A
git commit -m 'deploy'

# deploy 
echo Deploying.. 
git push -f "https://github.com/AaronXue0/project-starry.git" master:gh-pages

cd -
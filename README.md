1. Steps to deploy react app on firebase for staging envirment

    1) First install env-cmd library using 
            npm install env-cmd --save 
    2) Open your package.json and add a homepage field for your project also create todo_staging named repository and set remote locally for that branch.
            "homepage": "https://dipak2811.github.io/todo_staging/",
    3) Add belowe lines in package.json in scripts
            "build:staging": "env-cmd -f .env.staging npm run build",
            "predeploy": "npm run build:production",
            "deploy": "gh-pages -d build"
    4) Install gh-pages using belowe command
            npm install --save gh-pages
    5) Deploy on githubpages using
            npm run deploy
           
Deployed Link for staging:- https://dipak2811.github.io/todo_staging/  
note:-check console to see var of staging env




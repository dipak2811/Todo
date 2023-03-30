1. Steps to deploy react app on firebase for staging envirment

    1) First install env-cmd library using 
            npm install env-cmd --save 
    2) Add belowe line in package.json in scripts
            "build:staging": "env-cmd -f .env.staging npm run build"
    3) Install firebase tools using belowe command
            npm install -g firebase-tools
    4) Login in firebase
            firebase login
    5) Initialize firebase using belowe command and select belowe options
            firebase init
            
            Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            build
            Y
            N
            N
    6) Deploy on firebase using
            firebase deploy
           


2. Steps to deploy react app on firebase for production envirment

    1) First install env-cmd library using 
            npm install env-cmd --save 
    2) Add belowe line in package.json in scripts
            "build:production": "env-cmd -f .env.production npm run build"
    3) Install firebase tools using belowe command
            npm install -g firebase-tools
    4) Login in firebase
            firebase login
    5) Initialize firebase using belowe command and select belowe options
            firebase init
            
            Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
            build
            Y
            N
            N
    6) Deploy on firebase using
            firebase deploy

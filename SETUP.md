
choco install visualstudiocode
choco install nodejs
choco install googlechrome

npm install --global yarn
npm install --global @angular/cli

ng new projectname
cd projectname

## From here: https://medium.com/beautiful-angular/angular-2-with-redux-using-ngrx-store-2f93a8ad0dd
## Also here: https://gist.github.com/btroncone/a6e4347326749f938510

yarn add @ngrx/core @ngrx/store @ngrx/effects
yarn add @ngrx/store-devtools --dev
yarn add @ngrx/schematics --dev

ng set defaults.schematics.collection=@ngrx/schematics

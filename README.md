# HelloWorldReact
Premier test fonctionnel de React Native, application affichant un Hello World

L'application fonctionne sur Android 4.1 ou suppérieur

Les commandes React-Native sont nécessaire pour lancer rapidement l'application sur un téléphone branché en USB 

Voir le lien "Getting started" de React Native pour l'installation de l'environnement. 

<https://facebook.github.io/react-native/docs/getting-started.html>

## Variables utilisateur ## 
```
ANDROID_HOME => C:\Users\<username>\AppData\Local\Android\sdk
PATH => C:\Users\<username>\AppData\Roaming\npm
``` 
## Variables système ##
```
JAVA_HOME => C:\Program Files\Java\jdkX.X.X_XXX
PATH => C:\Program Files\nodejs\;
        C:\Users\<username>\AppData\Local\Android\sdk\platform-tools;
        C:\Users\<username>\AppData\Local\Android\sdk\tools;
        %JAVA_HOME%/lib
```

## Erreurs communes ##

Pour l'erreur suivante concernant le build de l'application : 

" Could not get batchedbridge make sure your bundle is packaged properly "

Méthode 1 ( Version Android >= 5.0 ) :
Utiliser la commande : ```adb reverse tcp:8081 tcp:8081```

Méthode 2 ( Version Android < 5.0 ) :
Utiliser la commande suivante depuis la racine de l'application : 

```node node_modules/react-native/local-cli/cli.js bundle --platform android --dev true --reset-cache --entry-file index.android.js --bundle-output android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/debug``` 


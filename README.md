# GTI791
Projet spécial : Application Web d'analyse de données pour SerreÉTS

## API Backend
REST API en PHP, la structure de l'API est basée sur [ceci](https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html).

## Application web Front End
Application web en Angular.js généré avec [Yeoman](http://yeoman.io/) et utilisant le template Bootstrap [SB Admin 2](https://startbootstrap.com/template-overviews/sb-admin-2/), la structure de l'application est basée sur [ceci](https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html).  

## Utilisation
### Mise en place de l'environnement de développement
#### Backend
1. Installer PHP, PHPMyAdmin et un serveur Apache OU installer une solution tout en un du genre [WAMP](http://www.wampserver.com/) pour Windows ou [MAMP](https://www.mamp.info/en/) pour Mac.
2. Démarrer le serveur Apache et faire un clone du projet dans le répertoire approprié (par exemple /www ou /htdocs).
3. Ouvrir PHPMyAdmin et créer une nouvelle base de données "serreets_db".
4. Dans "serreets_db", exécuter le code SQL du fichier "sql/insert_data.sql". Cela va créer les tables nécessaires, ajouter les contraintes et remplir avec les données existantes.
3. L'API REST permet de faire des requêtes vers la base de données. Par exemple, à cet code(url http://localhost:8888/GTI791/api_dev/controllers/project/getProjectInfo.php?id=1) nous obtenons les informations du projet dont l'ID est 1.

#### Front end
1. Installer [Node.js](https://nodejs.org/en/)
2. Ouvrir l'invite de commande et naviguer à travers les dossiers jusqu'à l'emplacement de code(/app)
3. Installer le générateur [Yeoman](http://yeoman.io/learning/index.html) 
```
npm install -g yo
```
4. Installer [Grunt](https://gruntjs.com/getting-started)
```
npm install -g grunt
```
5. Installer [Bower](https://bower.io/)
```
npm install -g bower
```
6. Installer les dépendances Node nécessaires
```
npm install
```
7. Installer les dépendances Bower nécessaires
```
bower install
```
8. Démarrer le serveur web
```
grunt serve
```

### Préparer l'application web pour la production
#### Backend
1. Le code présent dans le dossier code(/api_dev) doit être copié sur le serveur applicatif.
#### Frontend
1. Afin de minifier le code, compresser les images (s'il y a lieu) et rendre l'application web prête pour être mise en ligne il faut exécuter cette commande code à la racine de l'application code(/app).
```
grunt build
```
2. Une fois les opérations de commpression et de minification terminée, l'application générée se retrouve dans le dossier code(/dist). L'ensemble de ce dossier doit être copié sur le serveur applicatif.

## À faire
* Terminer l'authentification/la déconnexion (lier l'API REST avec l'application web, gérer les sessions, et détruire les sessions)
* Terminer la modification du profil de l'utilisateur (lier l'API REST avec l'application web)
* Régler le problème de formatage du Array contenant les résultats de recherche côté client (Application web) afin d'être en mesure d'exporter correctement ces résultats en format CSV
* Modifier la fonction générant les requêtes SQL afin de la rendre générale à l'application (plutôt que de la copier/coller dans chaque contrôleur)
* Implémenter toutes les fonctionnalités relatives aux alertes (gestion des alertes, envoie de courriels aux utilisateurs, et affichage dans le sous-menu du menu principal)
* Faire un clean up dans le code, ajouter des commentaires, et restructurer ce qui peut l'être afin d'éviter les répétitions
        




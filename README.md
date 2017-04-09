# GTI791
Projet spécial : Application Web d'analyse de données pour SerreÉTS

## API Backend
REST API en PHP, la structure de l'API est basée sur [ceci](https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html).

## Application web Front End
Application web en Angular.js généré avec [Yeoman](http://yeoman.io/) et utilisant le template Bootstrap [SB Admin 2](https://startbootstrap.com/template-overviews/sb-admin-2/), la structure de l'application est basée sur [ceci](https://www.codeofaninja.com/2015/12/angularjs-crud-example-php.html).  

## À faire
* Terminer l'authentification/la déconnexion (lier l'API REST avec l'application web, gérer les sessions, et détruire les sessions)
* Terminer la modification du profil de l'utilisateur (lier l'API REST avec l'application web)
* Régler le problème de formatage du Array contenant les résultats de recherche côté client (Application web) afin d'être en mesure d'exporter correctement ces résultats en format CSV
* Modifier la fonction générant les requêtes SQL afin de la rendre générale à l'application (plutôt que de la copier/coller dans chaque contrôleur)
* Implémenter toutes les fonctionnalités relatives aux alertes (gestion des alertes, envoie de courriels aux utilisateurs, et affichage dans le sous-menu du menu principal)
* Faire un clean up dans le code, ajouter des commentaires, et restructurer ce qui peut l'être afin d'éviter les répétitions
        




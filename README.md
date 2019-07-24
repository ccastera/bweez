Avant de lancer le projet, il faut au préalable installer toutes les dépendances du projet:
### `npm i`

Pour lancer le projet en mode développement
### `npm start`
Cette commande démarre l'application sur le port 3000 (si celui-ci n'est pas utilisé par un autre process)
Ouvrir le navigateur à la page [http://localhost:3000](http://localhost:3000) pour voir l'application.

Pour lancer le serveur en mode production, il faut compiler le projet à l'aide de la commande suivante
### `npm run build`
Un dossier `build` sera créé et contiendra les sources minifiées de l'application pour de meilleures performances

Ce projet par défaut attaque son webservice (`bweez-server`) sur le port 5000, si vous changez le numéro de port au niveau du serveur,
Il ne faudra surtout pas oublier de le changer aussi dans le fichier `./src/services/Request.js`

Ce projet a 4 composants:
- `App` qui est le composant principal, chargé de manager les autres et de retourner un rendu à l'utilisateur
- `Capture` qui est le composant associé à la home page, charger de prendre une photo grâce à la webcam et la stocker sur le serveur
- `Picture` qui affiche le QR Code associé à l'image que l'utilisateur a pris précédemment au niveau de la home page
- `Pictures` qui affiche tous les QR Codes disponibles dans la base de données et au clic de l'un d'entre eux, l'image associée est chargée dans la vue

Pour des soucis de simplicité du test, le composant `Pictures` n'est pas chargé dans les vues, mais est parfaitement fonctionnel.

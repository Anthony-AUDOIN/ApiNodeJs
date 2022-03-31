# NodeJs - API 

![forthebadge](READMEDATA/made-with-nodejs.svg) ![forthebadge](READMEDATA/powered-by-hapipal.svg)

Projet NodeJs permettant la mise en place d'une API.

## Pour commencer

Veuillez cloner le repository [NodeJs - API](https://github.com/Anthony-AUDOIN/ApiNodeJs) via cette commande ```git clone https://github.com/Anthony-AUDOIN/ApiNodeJs.git```

### Pré-requis

Il est nécessaire d'avoir un environnement de développement web tel que WAMP.

### Installation

Pour l'installation, il suffit juste de lancer le téléchargement des packages via NPM grace a la commande 
```npm install```,
et de changer les propriétés de connexion a la BD dans le fichier /server/manifest.js : 
```js
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'root',
 password: process.env.DB_PASSWORD || '',
 database: process.env.DB_DATABASE || 'apinode',
```
## Démarrage

Pour finir, il suffit de lancer l'API avec la commande  ```npm start``` 

## Fabriqué avec

* [NodeJs](https://nodejs.org/) - Langage de programmation
* [Hapipal](https://hapipal.com/) - Framework NodeJs 
* [WAMP](https://www.wampserver.com/) - SGBD

## Versions
**Dernière version stable :** 1.0

**Dernière version :** 1.0

Liste des versions : [Cliquer pour afficher](https://github.com/Anthony-AUDOIN/PTLP/tags)

## Auteurs
* **Anthony AUDOIN** _alias_ [@Anthony-AUDOIN](https://github.com/Anthony-AUDOIN)

## License

Ce projet est sous licence ``mit`` - voir le fichier [LICENSE.md](LICENSE) pour plus d'informations.


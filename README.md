# Projet - Filtered Table

## Description du projet

En utilisant le jeu de données fournies, vous créerez un module JavaScript qui affichera les datas sous forme de tableau HTML.
Le tableau devra avoir au moins 7 colonnes dont : Nom, Prénom, Âge, Couleur des yeux et email.
Le tableau devra pouvoir être filtré grâce à des paramètre en query `?` dans l'URL.

L'entrée `eyeColor` devra être filtrable suivant l'une des valeurs suivantes : `blue`, `brown`, `green`
L'entrée `age` devra être filtrable par tranche de 5 ans : de 20 à 25 ans, de 26 à 30 ans, de 31 à 35 ans et enfin de 36 à 41 ans

## Installation et exécution du projet

### Pré-requis

- Avoir `Node` et `npm` installé sur sa machine.

1. Cloner le repo

```sh
git clone https://github.com/Gregson971/filtered-table.git
```

2. Se placer dans le dossier filtered-table

```sh
cd /filtered-table
```

3. Installer les dépendances

```sh
npm install
```

4. Lancer le serveur de développement

```sh
npm  run start
```

5. Si vous souhaitez générer un build

```sh
npm run build
```

et placer le contenu du dossier `dist` sur votre serveur.

6. Lancer les tests

```sh
npm run test
```

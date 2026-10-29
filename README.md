# TaskFlow — Gestionnaire de tâches

TaskFlow est un projet d'apprentissage du développement web. Il permet de gérer des tâches et d'apprendre progressivement les bases du frontend, de JavaScript et des API REST.

## Fonctionnalités du frontend

- Ajouter une tâche
- Afficher la liste des tâches
- Modifier le titre d'une tâche
- Marquer une tâche comme terminée
- Supprimer une tâche
- Enregistrer les tâches dans le navigateur avec `localStorage`
- Conserver un affichage adapté aux écrans mobiles

## API REST — Séance 11

Un premier serveur API a été créé avec Node.js et Express.

Routes disponibles :

| Méthode | Route | Fonction |
|---|---|---|
| GET | `/` | Afficher un message de bienvenue |
| GET | `/api/tasks` | Récupérer les tâches |

Le serveur utilise également le middleware CORS et accepte les données JSON.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- CORS
- Git et GitHub

## Installation et lancement de l'API

Prérequis : Node.js et npm.

1. Ouvrir un terminal dans le dossier `api`.
2. Installer les dépendances :

   `npm.cmd install`

3. Démarrer le serveur :

   `node server.js`

4. Tester les routes :

   - `http://localhost:3000/`
   - `http://localhost:3000/api/tasks`

## État du projet

- [x] Gestion des tâches côté navigateur
- [x] Persistance avec localStorage
- [x] Première API REST avec Express
- [x] Récupération des tâches avec GET
- [ ] Création de tâches avec POST
- [ ] Modification et suppression via l'API
- [ ] Persistance des données dans une base de données

**Note :** les tâches de l'API sont actuellement stockées en mémoire. Elles sont réinitialisées au redémarrage du serveur.

## Auteur

FalyTiana — Projet personnel d'apprentissage du développement web.

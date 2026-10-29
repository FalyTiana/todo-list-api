# TaskFlow — Application de gestion des tâches

## Présentation

TaskFlow est une application web de gestion des tâches développée dans le cadre de mon apprentissage du développement web. Elle permet d'ajouter, d'afficher et de supprimer des tâches grâce à HTML, CSS et JavaScript.

## Fonctionnalités

- Ajouter une tâche à partir d'un formulaire.
- Afficher les tâches dans une liste.
- Supprimer une tâche individuellement.
- Enregistrer automatiquement les tâches avec `localStorage`.
- Restaurer les tâches après l'actualisation de la page.
- Afficher un message lorsque la liste est vide.
- Adapter l'affichage aux écrans mobiles.
- Modifier le titre d'une tâche.
- Marquer une tâche comme terminée.
- Conserver l'état des tâches dans localStorage.

## Technologies utilisées

- **HTML5** : structure de la page.
- **CSS3** : mise en forme et affichage responsive.
- **JavaScript** : interactions et gestion des tâches.
- **localStorage** : stockage local des tâches dans le navigateur.
- **Git et GitHub** : gestion des versions et hébergement du code source.

## Installation et lancement

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/FalyTiana/todo-list-api.git
   ```

2. Ouvrir le dossier du projet :

   ```bash
   cd todo-list-api
   ```

3. Ouvrir `index.html` dans un navigateur web, ou utiliser l'extension Live Server de VS Code.

Aucune installation de dépendances n'est nécessaire pour la version actuelle.

## Structure du projet

```text
todo-list-api/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Stockage des données

Les tâches sont enregistrées dans le `localStorage` du navigateur. Elles restent disponibles après une actualisation de la page, sur le même navigateur et pour la même origine.

À ce stade, les données ne sont pas stockées dans une base de données distante et ne sont pas synchronisées entre plusieurs appareils.

## Améliorations prévues

- Mettre en place une API REST.
- Ajouter une base de données.
- Étudier l'authentification des utilisateurs.


## Auteur

Projet personnel d'apprentissage du développement web — Faly Tiana.

## Licence

Projet pédagogique. Aucune licence spécifique n'est définie pour le moment.
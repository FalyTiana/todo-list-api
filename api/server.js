
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const tasks = [
    {
        id: 1,
        title: "Apprendre JavaScript",
        completed: false
    },
    {
        id: 2,
        title: "Comprendre les API REST",
        completed: true
    },
    {
        id: 3,
        title: "Créer mon propre serveur",
        completed: false
    }
];

// Route d'accueil
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API TaskFlow !"
    });
});

// Récupérer toutes les tâches
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(
        `API TaskFlow disponible sur http://localhost:${PORT}`
    );
});

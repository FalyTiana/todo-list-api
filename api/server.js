
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


app.post("/api/tasks", (req, res) => {
    const { title } = req.body;

    // Vérifier le titre reçu
    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            message: "Le titre de la tâche est obligatoire."
        });
    }

    // Créer la nouvelle tâche
    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: title.trim(),
        completed: false
    };

    tasks.push(newTask);

    // Renvoyer la tâche créée
    res.status(201).json(newTask);
});

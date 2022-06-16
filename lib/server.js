const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.json({message: "alive"});
});

app.get("/explorers", async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post("/explorers", async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = "Explorer creado.";
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    });

    return res.json({message: "Actualizado correctamente"});
});

app.delete("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

app.get("/missions", async (req, res) => {
    const allMissions =  await prisma.mission.findMany({});
    res.json(allMissions);
});

app.get("/missions/:id", async (req, res) => {
    const id = req.params.id;
    const mission = await prisma.mission.findUnique({where: {id: parseInt(id)}});
    res.json(mission);
});

app.post("/missions", async (req, res) => {
    const mission = {
        name: req.body.name,
        lang: req.body.lang,
        missionComander: req.body.missionComander,
        enrollments: req.body.enrollments
    };
    const message = "Mission created.";
    await prisma.mission.create({data: mission});
    return res.json({message});
});

app.put("/missions/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.mission.update({
        where: {
            id: id
        },
        data: {
            missionComander: req.body.missionComander
        }
    });

    return res.json({message: "Actualizado correctamente"});
});

app.delete("/missions/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.mission.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

app.get("/missionCommanders", async (req, res) => {
    const allMissionCommanders =  await prisma.missionCommander.findMany({});
    res.json(allMissionCommanders);
});

app.get("/missionCommanders/:id", async (req, res) => {
    const id = req.params.id;
    const missionCommander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
    res.json(missionCommander);
});

app.post("/missionCommander", async (req, res) => {
    const missionCommander = {
        name: req.body.name,
        username: req.body.username,
        mainStack: req.body.mainStack
    };
    const message = "MissionCommander created.";
    await prisma.missionCommander.create({data: missionCommander});
    return res.json({message});
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});
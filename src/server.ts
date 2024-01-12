import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/get-coordinates/:cep", async (req: Request, res: Response) => {
    const { cep } = req.params;

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: cep,
                key: "AIzaSyAaRG_Q93Makyp9Dt_n_r_fyYGd3g91yIo",
            },
        });

        const { results } = response.data;

        if (results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            res.json({ lat, lng });
        } else {
            res.status(404).json({ error: "Coordenadas não encontradas para o CEP fornecido." });
        }
    } catch (error) {
        console.error("Erro ao obter coordenadas:", error);
        res.status(500).json({ error: "Erro interno ao processar a solicitação." });
    }
});

app.listen(port, () => {
    console.log(`O servidor está ativo na rota http://localhost:${port}`);
});

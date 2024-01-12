"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/api/get-coordinates/:cep", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cep } = req.params;
    try {
        const response = yield axios_1.default.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: cep,
                key: "AIzaSyAaRG_Q93Makyp9Dt_n_r_fyYGd3g91yIo",
            },
        });
        const { results } = response.data;
        if (results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            res.json({ lat, lng });
        }
        else {
            res.status(404).json({ error: "Coordenadas não encontradas para o CEP fornecido." });
        }
    }
    catch (error) {
        console.error("Erro ao obter coordenadas:", error);
        res.status(500).json({ error: "Erro interno ao processar a solicitação." });
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

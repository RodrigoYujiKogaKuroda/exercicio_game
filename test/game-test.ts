import app from '../src/app';
import supertest from 'supertest';
import prisma from "../src/config/database";
import { createGame, createWrongGame } from "./factories/game-factory.js";

describe("POST /games", () => {
    it("should answer with status 201 when entity is created", async () => {
        const game = await createGame();
        const response = await supertest(app).post("/games").send({ title: game.title, consoleId: game.consoleId });
        expect(response.status).toBe(201);
    });

    it("should answer with status 422 when no name is given", async () => {
        const game = await createWrongGame();
        const response = await supertest(app).post("/games").send({ title: game.title, consoleId: game.consoleId });
        expect(response.status).toBe(422);
    });
});
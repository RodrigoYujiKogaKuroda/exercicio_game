import app from '../src/app';
import supertest from 'supertest';
import prisma from "../src/config/database";
import { createConsole, createWrongConsole } from "./factories/console-factory.js";

describe("POST /consoles", () => {
    it("should answer with status 201 when entity is created", async () => {
        const console = await createConsole();
        const response = await supertest(app).post("/consoles").send({ name: console.name });
        expect(response.status).toBe(201);
    });

    it("should answer with status 422 when no name is given", async () => {
        const console = await createWrongConsole();
        const response = await supertest(app).post("/consoles").send({ name: console.name });
        expect(response.status).toBe(422);
    });
});
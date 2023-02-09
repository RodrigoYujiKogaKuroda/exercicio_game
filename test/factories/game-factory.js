import faker from "@faker-js/faker";

export async function createGame () {
    const game = {
        title: faker.name.findName(),
        consoleId: 1
    }
    return game;
}

export async function createWrongGame () {
    const game = {
        title: null,
        consoleId: 1
    }
    return game;
} 
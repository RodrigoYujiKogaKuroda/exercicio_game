import faker from "@faker-js/faker";

export async function createConsole () {
    const console = {
        name: faker.name.findName()
    }
    return console;
}

export async function createWrongConsole () {
    const console = {
        name: null
    }
    return console;
} 
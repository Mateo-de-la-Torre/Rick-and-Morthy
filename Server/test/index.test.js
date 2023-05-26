const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 923,
    name: "Mateo",
    species: "human",
    gender: "Male",
    status: "Alive",
    origin: {
        name: "Eart (C-137)"
    },
    image: "image.jpg"
}

describe("Test de RUTAS", ()=> {
    describe("GET /rickandmorty/character/:id", () => {

        it("Responde con status: 200", async()=>{
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const response = await request.get('/rickandmorty/character/1');

           for(const prop in character){ // recorre el obj q creamos arrriba
            expect(response.body).toHaveProperty(prop);
           }
           
        });

        it("Si hay un error responde con status: 500", async()=>{
            const response = await request.get('/rickandmorty/character/2313j'); // forzamos el error, ponemos una url q no existe
            expect(response.statusCode).toBe(500);
        });

    });

    
    describe("GET /rickandmorty/login", () => {
        const access = {access: true};

        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async() =>{
            const response = await request.get('/rickandmorty/login?email=mateo.delatorre@gmail.com&password=123456789');
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida", async() =>{
            const response = await request.get('/rickandmorty/login?email=mateo.delatore@gmail.com&password=12345eeee9');
            access.access = false;
            expect(response.body).toEqual(access);
        });
    });


    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post("/rickandmorty/fav").
            send(character);
            expect(response.body).toContainEqual(character); // cuando buscamos obj se usa el toContainEqual
        })
    }) 

});

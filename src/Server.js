import { createServer } from "miragejs"


  export const serverIt = () =>{
    createServer({
      routes() {
        this.get("/api/users", () => ({
          users: [
            {
              id: '1',
              name: "Jude",
              gender: "male",
              skinColor: "caramel",
              height: "5.7ft",
              eyeColor: "black",
            },
            {
              id: '2',
              name: "Adebayo",
              gender: "male",
              skinColor: "brown",
              height: "5.4ft",
              eyeColor: "black",
            },
            {
              id: '4',
              name: "Kenny",
              gender: "female",
              skinColor: "soft-light",
              height: "4.7ft",
              eyeColor: "black",
            },
            {
              id: '5',
              name: "Damola",
              gender: "male",
              skinColor: "dark",
              height: "5.3ft",
              eyeColor: "black",
            },
            {
              id: '6',
              name: "Opeyemi",
              gender: "male",
              skinColor: "dark",
              height: "5.9ft",
              eyeColor: "black",
            },
            {
              id: '7',
              name: "Oluwaseun",
              gender: "male",
              skinColor: "caramel",
              height: "5.8ft",
              eyeColor: "brown",
            },
          ],
        }))
      },
    })
  } 

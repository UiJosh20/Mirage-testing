import { createServer } from "miragejs";

export const backEx = () => {
  createServer({
    routes() {
      this.get('/api/users', ()=>({
        users : [
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
        ]
      }))
    }
  })
}
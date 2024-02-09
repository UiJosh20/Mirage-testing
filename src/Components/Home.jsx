import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users")
    .then((res) => {
      console.log(res.data.users);
      setData(res.data.users);
    });
  }, []);

  return (
    <section>
      <div className="py-5">
      <h1 className="text-white text-5xl  text-center text-pretty font-bold">MERN DEVELOPERS</h1>
      </div>
      <main className="flex flex-wrap gap-5 justify-center items-center py-20">
        {data.map((user) => (
          <div key={user.id} >
          <div className="card  text-white " >
            <div className="card__content p-5">
              <p>Name: {user.name}</p>
              <p>Gender: {user.gender}</p>
              <p>Skin Color: {user.skinColor}</p>
              <p>Height: {user.height}</p>
              <p>Eye Color: {user.eyeColor}</p>
            </div>
          </div>
          </div>
        ))}
      </main>
    
    </section>
  );
};

export default Home;

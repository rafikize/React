import { useState } from "react";
import "./App.css";

import Navbar from "./composants/Navbar";
import Post from "./composants/Post";

function App() {
  const [posts, setPost] = useState([
    {
      id: 1,
      titre: "Rafi iz",
      descreption:
        "Voici un exzmple de texte qui vient juste de replacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Rafi iz",
      descreption:
        "Voici un exzmple de texte qui vient juste de replacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Rafi iz",
      descreption:
        "Voici un exzmple de texte qui vient juste de replacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Rafi iz",
      descreption:
        "Voici un exzmple de texte qui vient juste de replacer ce texte ici",
      liker: false,
    },
  ]);
  const liker = (data) => {
    const donneesCopier = [...posts];
    const index = posts.indexOf(data);
    donneesCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPost(donneesCopier);
    console.log(donneesCopier);
  };

  const effacerPost = (id) => {
    const nouvelledonnee = posts.filter(p => p.id != id);
    setPost(nouvelledonnee);
  };
   const nombrelike = posts.filter(p => p.liker);
  return (
    <div className="App">
      <Navbar nombrelike ={nombrelike.length}/>
      {posts.map((p) => (
        <Post data={p} key={p.id} liker={liker} supression={effacerPost} />
      ))}
    </div>
  );
}
export default App;

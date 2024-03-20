import { useState, useEffect } from "react";
import { dsnotes } from "../../utils/custom hooks/useDsNotes";
import { Link } from "react-router-dom";

const DSAnotes = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    dsnotes()
      .then((result) => {
        setNotes(result);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return (
    <div className=" w-3/4 h-full relative top-32 right-0 left-0 m-auto ">
      <h1 className=" text-white font-mont font-extrabold text-4xl ">
        DSA NOTES
      </h1>
      <div>
        {notes &&
          notes.map((note) => (
            <Link key={note.key} to={"/ScriptQuiz/dsa-notes/" + note.key}>
            <div
              className="w-full h-24 mt-5 border border-slate-700 rounded-xl flex justify-center items-center cursor-pointer transition-all hover:scale-105"
              
            >
              <span className="text-white font-mont text-xl uppercase font-semibold z-10">
                {note.title}
              </span>
            </div>
              </Link>
          ))}
      </div>
    </div>
  );
};

export default DSAnotes;

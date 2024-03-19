import { useState, useEffect } from "react";
import { dsnotes } from "../../utils/custom hooks/useDsNotes";

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
            <div
              className="w-full h-24 mt-5 border border-slate-700 rounded-xl flex justify-center items-center cursor-pointer transition-all hover:scale-105"
              key={note.key}
            >
              <span className="text-white font-mont text-xl uppercase font-semibold z-10">
                {note.title}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DSAnotes;

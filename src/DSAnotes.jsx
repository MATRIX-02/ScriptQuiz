import { useState, useEffect } from "react";
import { dsnotes } from "../utils/custom hooks/useDsNotes"
import Markdown from "react-markdown";

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
      <h1 className=" text-white font-mont font-extrabold text-4xl ">DSA NOTES</h1>
      <div>
        {notes && notes.map((note) =>(
          <div key={note.key}>
          <span className="text-white" >{note.title}</span>
          <Markdown className="text-white">{note.content}</Markdown>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DSAnotes

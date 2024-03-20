import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Custom Hooks
import { dsnotes } from "../../utils/custom hooks/useDsNotes";
import Markdown from "react-markdown";

const Notes = () => {
  const { dsId } = useParams();
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    dsnotes()
      .then((result) => {
        const note = result.find((note) => note.key === dsId);
        setNotes(note);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [dsId]);

  return (
    <div className="w-3/4 overflow-hidden relative top-32 left-0 right-0 m-auto flex justify-start flex-col">
      <span className="text-white font-mont font-extrabold text-3xl">{notes?.title}</span>
      <Markdown className="text-white whitespace-pre-wrap">{notes?.content}</Markdown>
    </div>
  );
};

export default Notes;

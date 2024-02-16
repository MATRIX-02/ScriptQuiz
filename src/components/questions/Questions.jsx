import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Markdown from "react-markdown";
import { markQuestionCompleted } from "../store/store";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

const Questions = ({ questionNumber, questionData, completedStatusArray, setCompletedStatusArray }) => {
  const { title, body, answers, correctAnswer, explanation } = questionData
  const [showDesc, setShowDesc] = useState(false);
  const isCompleted = completedStatusArray[questionNumber - 1];
  const currentUser = auth.currentUser;

  const handleOptionSelect = async (optionChar) => {
    // Check if the question is incomplete
    if (!isCompleted) {
      // Toggle the completion status of the question
      try {
        const docRef = doc(db, "completedQuestions", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const completedQuestionsData = docSnap.data();
          if (completedQuestionsData.hasOwnProperty(questionNumber)) {
            const isCompleted = completedQuestionsData[questionNumber];
            await setDoc(docRef, { [questionNumber]: !isCompleted }, { merge: true });
            setCompletedStatusArray((prevArray) => {
              const newArray = [...prevArray];
              newArray[questionNumber - 1] = !isCompleted;
              return newArray;
            }); // Update local state
          } else {
            // Question not marked as completed, mark it as incomplete
            await setDoc(docRef, { [questionNumber]: true }, { merge: true });
            setCompletedStatusArray((prevArray) => {
              const newArray = [...prevArray];
              newArray[questionNumber - 1] = true;
              return newArray;
            }); // Update local state
          }
        } else {
          // User document does not exist, create it and mark question as incomplete
          await setDoc(docRef, { [questionNumber]: true });
          setCompletedStatusArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[questionNumber - 1] = true;
            return newArray;
          }); // Update local state
        }
      } catch (error) {
        console.error("Error toggling question completion:", error);
      }

      // Mark the question as completed in Firestore
      markQuestionCompleted(questionNumber);
    }
  };

  useEffect(() => {
    const fetchQuestionCompletionStatus = async () => {
      try {
        const docRef = doc(db, "completedQuestions", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const completedQuestionsData = docSnap.data();
          if (completedQuestionsData.hasOwnProperty(questionNumber)) {
            const completedStatus = completedQuestionsData[questionNumber];
            setCompletedStatusArray((prevArray) => {
              const newArray = [...prevArray];
              newArray[questionNumber - 1] = completedStatus;
              return newArray;
            });
          }
        }
      } catch (error) {
        console.error("Error fetching question completion status:", error);
      }
    };

    fetchQuestionCompletionStatus();
  }, [currentUser, questionNumber, setCompletedStatusArray]);

  const buttonText = isCompleted ? "Mark as Incomplete" : "Mark as Complete";

  const markQuestionIncomplete = async () => {
    try {
      const docRef = doc(db, "completedQuestions", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const completedQuestionsData = docSnap.data();
        if (completedQuestionsData.hasOwnProperty(questionNumber)) {
          const isCompleted = completedQuestionsData[questionNumber];
          await setDoc(docRef, { [questionNumber]: !isCompleted }, { merge: true });
          setCompletedStatusArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[questionNumber - 1] = !isCompleted;
            return newArray;
          }); // Update local state
        } else {
          // Question not marked as completed, mark it as incomplete
          await setDoc(docRef, { [questionNumber]: false }, { merge: true });
          setCompletedStatusArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[questionNumber - 1] = false;
            return newArray;
          }); // Update local state
        }
      } else {
        // User document does not exist, create it and mark question as incomplete
        await setDoc(docRef, { [questionNumber]: false });
        setCompletedStatusArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[questionNumber - 1] = false;
          return newArray;
        }); // Update local state
      }
    } catch (error) {
      console.error("Error toggling question completion:", error);
    }
  };

  const optionClassName = (option) => {
    if (isCompleted) {
      // Question is completed, show border based on correct answer
      return `text-left p-4 border-2  ${
        option.char === correctAnswer ? "border-green-500" : "border-red-500"
      }`;
    } else {
      // Question is not completed, hide borders
      return "text-left p-4";
    }
  };

  return (
    questionData && (
      <motion.div
        layout
        transition={{ layout: { type: "spring" } }}
        className="h-max w-full bg-slate-800 rounded-lg p-5"
      >
        <motion.div className="flex justify-between">
          <motion.span layout="position" className="text-slate-200">
            {title}
          </motion.span>
          <motion.button
            layout
            className={`text-xs px-2 py-1 rounded  text-white ${isCompleted ? "bg-red-500" : "bg-green-500"
              } `}
            onClick={markQuestionIncomplete}
          >
            {buttonText}
          </motion.button>
        </motion.div>
        {body && (
          <motion.span className="block mt-5 text-slate-400 text-sm font-extralight bg-slate-700 p-4 rounded">
            <Markdown>{body}</Markdown>
          </motion.span>
        )}
        <motion.div
          layout
          className="text-slate-200 text-base font-normal py-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {answers.map((option, index) => (
            <motion.button
              key={index}
              layout
              className={optionClassName(option)}
              onClick={() => handleOptionSelect(option.char)}
            >
              <motion.span layout>{option.char}</motion.span>. {option.text}
            </motion.button>
          ))}
        </motion.div>
        <motion.p
          layout
          onClick={() => setShowDesc(!showDesc)}
          className="text-base text-slate-200 select-none cursor-pointer p-3 flex justify-center items-center"
        >
          <MdOutlineKeyboardDoubleArrowDown
            className={`scale-125 transition-all ${
              showDesc ? " rotate-180" : ""
            }`}
          />
          Show Explanation
        </motion.p>

        {showDesc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base font-normal text-slate-200 text-justify"
          >
            {explanation}
          </motion.div>
        )}
      </motion.div>
    )
  );
};

export default Questions;

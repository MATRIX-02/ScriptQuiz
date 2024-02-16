// Home.js
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import useQuiz from "../../utils/customHooks/useQuiz";
import Menu from "./Menu";
import Header from "./Header";
import Questions from "./questions/Questions";
import { motion } from "framer-motion";
import { auth, db } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  const { currentUser } = useAuth();
  const { questionData } = useQuiz();

  const [showQuestions, setShowQuestions] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [completedStatusArray, setCompletedStatusArray] = useState(
    Array(questionData.length).fill(false)
  );

  const showQuestionHandler = () => {
    setShowQuestions(() => !showQuestions);
  };

  useEffect(() => {
    const fetchQuestionCompletionStatus = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userId = currentUser.uid;
          const docRef = doc(db, "completedQuestions", userId);

          const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              const completedQuestionsData = docSnap.data();
              const newCompletedStatusArray = questionData.map((question) => {
                const questionId = question.id;
                return completedQuestionsData.hasOwnProperty(questionId)
                  ? completedQuestionsData[questionId]
                  : false;
              });
              setCompletedStatusArray(newCompletedStatusArray);
            } else {
              const initialCompletedStatusArray = Array(
                questionData.length
              ).fill(false);
              setCompletedStatusArray(initialCompletedStatusArray);
            }
          });

          return () => unsubscribe();
        }
      } catch (error) {
        console.error("Error fetching question completion status:", error);
      }
    };

    fetchQuestionCompletionStatus();
  }, [currentUser, questionData]);

  const handleNextQuestion = () => {
    setQuestionNumber((prevQuestionNumber) => Number(prevQuestionNumber) + 1);
  };

  const handlePreviousQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber((prevQuestionNumber) => Number(prevQuestionNumber) - 1);
    }
  };

  return questionData.length === 0 ? (
    <>Loading...</>
  ) : (
    <motion.div
      layout
      className="text-2xl font-bold font-display h-full w-full flex place-content-center place-items-center"
    >
      <Header showQuestionHandler={showQuestionHandler} />
      {showQuestions && (
        <motion.div
          layout
          className="overflow-x-hidden h-screen w-full 2xl:w-1/4 xl:w-2/4 lg:w-3/4 bg-slate-900 absolute top-0 right-0 transition-all duration-150 pt-24 px-5 z-10 shadow-2xl"
        >
          <Menu
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </motion.div>
      )}

      <motion.div layout className="flex place-items-center place-content-center w-full justify-center h-full">
        <button
          className={`text-slate-200 p-1 lg:p-4 ${
            Number(questionNumber) === 1 && "opacity-0"
          }`}
          onClick={handlePreviousQuestion}
          disabled={Number(questionNumber) === 1}
        >
          <FaAngleLeft />
        </button>

        <div className="h-4/5 lg:h-2/3 lg:w-1/2 overflow-auto scrollbar rounded-lg">
          <Questions
            questionNumber={questionNumber}
            questionData={questionData[questionNumber - 1]}
            completedStatusArray={completedStatusArray}
            setCompletedStatusArray={setCompletedStatusArray}
          />
        </div>

        <button
          className={`text-slate-200 p-1 lg:p-4 ${
            Number(questionNumber) === 155 && "opacity-0"
          }`}
          onClick={handleNextQuestion}
          disabled={Number(questionNumber) === 155}
        >
          <FaAngleRight />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;

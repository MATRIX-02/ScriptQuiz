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

  const [showQuestions, setShowQuestions] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [completedStatusArray, setCompletedStatusArray] = useState(Array(questionData.length).fill(false)); 

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
                return completedQuestionsData.hasOwnProperty(questionId) ? completedQuestionsData[questionId] : false;
              });
              setCompletedStatusArray(newCompletedStatusArray);
            } else {
              const initialCompletedStatusArray = Array(questionData.length).fill(false);
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
      className="text-2xl font-bold  h-screen w-full flex justify-center items-center font-display"
      style={{
        background: "#c94b4b",
        background: "-webkit-linear-gradient(to left, #c94b4b, #4b134f)",
        background: "linear-gradient(to left, #c94b4b, #4b134f)",
      }}
    >
       
      <Header showQuestionHandler={showQuestionHandler} />
       {showQuestions && (
        <motion.div
        layout 
          className="overflow-x-hidden h-screen w-full 2xl:w-1/4 xl:w-2/4 lg:w-3/4 bg-slate-900 absolute top-0 right-0 transition-all duration-150 pt-24 px-5 z-10 shadow-2xl"
        
        >
          <Menu questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
        </motion.div>
      )}

      <motion.div className="flex w-full justify-center"> 
      <button className="text-slate-200" onClick={handlePreviousQuestion} disabled={Number(questionNumber) === 1}><FaAngleLeft /></button>

      <div className="m-5 w-full h-3/4 lg:w-1/2 overflow-auto">
        <Questions questionNumber={questionNumber} questionData={questionData[questionNumber - 1]} completedStatusArray={completedStatusArray} setCompletedStatusArray={setCompletedStatusArray}/>
      </div>
      
      <button className="text-slate-200" onClick={handleNextQuestion} disabled={Number(questionNumber) === 155}><FaAngleRight /></button>
      </motion.div>
    </motion.div>
  );
};

export default Home;

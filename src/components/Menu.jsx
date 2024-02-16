// Menu.js
import { auth, db } from '../firebase/firebase';
import { doc, onSnapshot } from "firebase/firestore";
import { motion } from 'framer-motion';
import useQuiz from "../../utils/customHooks/useQuiz";
import Menulist from "./menulist/Menulist";
import { useEffect, useState } from 'react';

const Menu = ({ questionNumber, setQuestionNumber }) => {
    const { questionData } = useQuiz();
    const [completedQuestions, setCompletedQuestions] = useState([]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchCompletedQuestions = async () => {
            try {
                if (currentUser) {
                    const docRef = doc(db, "completedQuestions", currentUser.uid);
                    const unsubscribe = onSnapshot(docRef, (doc) => {
                        if (doc.exists()) {
                            setCompletedQuestions(Object.keys(doc.data()).filter(key => doc.data()[key]));
                        }
                    });
                    return () => unsubscribe();
                }
            } catch (error) {
                console.error("Error fetching completed questions:", error);
            }
        };

        fetchCompletedQuestions();
    }, [currentUser]);

    return (
        <motion.div
            className="h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <span className="text-slate-200">Practical Questions</span>
            <div className="h-4/5 overflow-auto flex flex-wrap gap-4 my-3">
                {questionData.map((question) => (
                    <motion.div
                        key={question.id}
                        variants={itemVariants}
                    >
                        <Menulist
                            number={question.id}
                            setQuestionNumber={setQuestionNumber}
                            isCompleted={completedQuestions.includes(question.id)}
                            isActive={Number(question.id) === Number(questionNumber)}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Menu;

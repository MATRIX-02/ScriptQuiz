import { auth, db } from "../../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const markQuestionCompleted = async (questionId) => {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      const completedQuestionsRef = doc(db, "completedQuestions", userId);
      await setDoc(
        completedQuestionsRef,
        { [questionId]: true },
        { merge: true }
      );
      console.log("Question marked as completed");
    } else {
      console.error("User not authenticated");
    }
  } catch (error) {
    console.error("Error marking question as completed:", error);
  }
};

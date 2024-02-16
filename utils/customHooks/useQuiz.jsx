import { useEffect, useState } from "react";

const useQuiz = () => {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/lydiahallie/javascript-questions/master/README.md"
        );
        const markdown = await response.text();
        const unparsed = markdown.split(/(?=#{6} [1-9])/).slice(1);
        setQuestionData(parseQuestions(unparsed));

        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const parseQuestions = (unparsed) => {
    return unparsed.map((question) => {
      const indexOfFirstDot = question.indexOf('.');
      const indexOfA = question.indexOf('- A: ');
      const indexOfDetails = question.indexOf('<details>', indexOfA);

      const id = question.slice(7, indexOfFirstDot);
      const title = question.slice(indexOfFirstDot + 2, question.indexOf('\n'));
      const body = question.slice(question.indexOf('\n') + 2, indexOfA - 2);
      const answers = question
        .slice(indexOfA, indexOfDetails - 2)
        .split('\n')
        .map((answer) => {
          return {
            char: answer[2],
            text: answer.slice(5),
          };
        });

      const spoiler = question.slice(indexOfDetails);
      const indexOfCorrectAnswer = spoiler.indexOf('#### Answer: ') + 13;

      const correctAnswer = spoiler[indexOfCorrectAnswer];

      const explanation = spoiler.slice(
        indexOfCorrectAnswer + 3,
        spoiler.indexOf('</p>', indexOfCorrectAnswer) - 1
      );

      return { id, title, body, answers, correctAnswer, explanation };
    });
  };

  return ({questionData});
};

export default useQuiz;

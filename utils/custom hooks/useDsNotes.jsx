const fetchMarkdownFile = async (filePath) => {
  try {
    const response = await fetch(filePath);
    return await response.text();
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

// Return a promise that resolves with the array of notes
export const dsnotes = async () => {
  try {
    const arraysMarkdown = await fetchMarkdownFile("./dsNotes/arrays.md");
    const linkedListMarkdown = await fetchMarkdownFile("./dsNotes/linkedlist.md");
    return [
      { title: "Arrays", key: "101", content: arraysMarkdown },
      { title: "Linked List", key: "102", content: linkedListMarkdown }
    ];
  } catch (error) {
    console.error("Error fetching markdown files:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

import inquirer from "inquirer";
async function wordCounter() {
    const userInput = await inquirer.prompt([
        {
            name: "sentance",
            type: "input",
            message: "Enter your sentance to count the words"
        }
    ]);
    const formattedSentance = userInput.sentance.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").trim();
    const wordCount = formattedSentance.split(" ").length;
    console.log(`The sentence has ${wordCount} ${wordCount === 1 ? 'word' : 'words'}.`);
}
wordCounter();

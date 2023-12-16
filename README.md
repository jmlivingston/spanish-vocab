Data
https://www.brainscape.com/packs/5000-most-common-spanish-words-21303832

Use the following script to parse.

```javascript
const rows = Array.from(document.querySelectorAll(".flashcard-row"));

const data = rows.map((row) => {
  return {
    id: 4500 + Number.parseInt(row.querySelector(".header").textContent.trim()),
    question: row
      .querySelector(".question-contents .scf-face > p:nth-child(2)")
      ?.textContent.trim(),
    questionDetails: row
      .querySelector(".question-contents .scf-footnote")
      ?.textContent.trim(),
    answer: row
      .querySelector(".answer-contents .scf-face > p:nth-child(1)")
      ?.textContent.trim(),
    answerDetails: row
      .querySelector(".answer-contents .scf-footnote")
      ?.textContent.trim(),
  };
});

console.log(data);
```

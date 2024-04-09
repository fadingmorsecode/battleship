export default function getDomCell(cell, boardName) {
  const element = document.querySelector(
    `[coordinate=${cell}][boardName=${boardName}]`,
  );
  return element;
}

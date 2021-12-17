export function addNote(content) {
  return {
    type: "ADD_NOTE",
    payload: content,
  };
}

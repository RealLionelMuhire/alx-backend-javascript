export default function taskBlock (trueOrFalse) {
  let task2 = true
  let task = false

  if (trueOrFalse) {
    task = true
    task2 = false
  }

  return [task, task2]
}

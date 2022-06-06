const task = ["codar"]

const newTask = process.argv[2]

const updatedTask = task.map(() => {
    return [...task, newTask]
})

console.log(updatedTask)
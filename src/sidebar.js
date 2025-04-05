import './style.css'

document.querySelector('#sidebar').innerHTML = `
  <aside class="bar hidden md:px-10 md:py-10 bg-gray-200 md:flex md:flex-col gap-4 justify-between min-h-screen overflow-x-hidden">
    <section class="flex flex-col gap-6">
        <!-- User Name + Hide Icon -->
        <section class="flex justify-between items-center">
            <div class="userProfile flex items-center gap-2">
                <img src="Katherine.png" alt="" class="w-12 h-12 rounded-full" />
                <p class="font-semibold text-3xl">Katherine</p>
            </div>
        </section>
        <!-- List of tasks -->
        <section class="tasks flex flex-col gap-4 mt-6">
            <div class="flex border-b-2">
                <p class="font-semibold text-2xl">My Tasks</p>
            </div>
            <section class="flex flex-col gap-4">
                <ul class="list-tasks flex flex-col">
                    
                </ul>
                <form id="add-task" class="flex flex-col gap-2">
                    <input type="text" id="input-task" class="border-2 border-gray-400 rounded-lg p-2" placeholder="Add new task" />
                    <button type="submit" id="button-task" class="flex items-center gap-2 px-5 py-2 bg-orange-400 hover:bg-amber-300 rounded-lg cursor-pointer">
                    <img src="add_circle.png" alt="" class="h-6" />
                    <p class="font-semibold">Add Task</p>
                </button>
                </form>
            </section>
        </section>
        <!-- List of projects -->
        <section class="projects flex flex-col gap-4 mt-6">
            <div class="flex border-b-2">
                <p class="font-semibold text-2xl">My Projects</p>
            </div>
            <section class="flex flex-col gap-4">
                <ul class="list-projects flex flex-col">                    
                </ul>
                <form id="add-task" class="flex flex-col gap-2">
                    <input type="text" id="input-project" class="border-2 border-gray-400 rounded-lg p-2" placeholder="Add new project" />
                    <button type="submit" id="button-project" class="flex items-center gap-2 px-5 py-2 bg-orange-400 hover:bg-amber-300 rounded-lg cursor-pointer">
                    <img src="add_circle.png" alt="" class="h-6" />
                    <p class="font-semibold">Add Project</p>
                </button>
                </form>
            </section>
        </section>
    </section>
    <!-- My Account -->
    <section class="flex justify-start">
        <button class="flex items-center gap-2">
            <img src="user.png" alt="" class="h-8" />
            <p class="">My Account</p>
        </button>
    </section>
</aside>
`

// Add Task Functionality
// This code adds a task to the list when the button is clicked
const taskName = document.getElementById("input-task")
const buttonTask = document.getElementById("button-task")
const listTasks = document.querySelector(".list-tasks")

buttonTask.addEventListener("click", (e) => {
    e.preventDefault()
    const task = taskName.value
    if(task) {
        const li = document.createElement("li")
        li.className = "flex justify-between"
        listTasks.appendChild(li)

        const wrap = document.createElement("div")
        wrap.className = "flex gap-2"
        li.appendChild(wrap)

        const input = document.createElement("input")
        input.type = "checkbox"
        input.style.cursor = "pointer"
        input.style.width = "20px"
        wrap.appendChild(input)
        input.style.marginRight = "14px"

        const span = document.createElement("span")
        if(task.length > 7) {
            span.textContent = task.slice(0, 7) + "..."
        } else {
            span.textContent = task
        }
        wrap.appendChild(span)
        span.style.marginRight = "14px"

        const deleteButton = document.createElement("button")
        const deleteIcon = document.createElement("img")
        deleteIcon.src = "delete.png"
        deleteIcon.style.width = "20px"
        deleteButton.appendChild(deleteIcon)
        deleteButton.style.cursor = "pointer"
        li.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => {
            li.remove()
        })

        taskName.value = ""

        span.style.fontSize = "24px"

        input.addEventListener("click", () => {
            if(input.checked) {
                span.style.textDecoration = "line-through"
                span.style.textDecorationThickness = "2px"
                span.style.color = "red"
            } else {
                span.style.textDecoration = "none"
                span.style.color = "black"
                span.style.textDecorationColor = "black"
            }
        })
    }
})


// Add Project Functionality
// This code adds a project to the list when the button is clicked
const projectName = document.getElementById("input-project")
const buttonProject = document.getElementById("button-project")
const listprojects = document.querySelector(".list-projects")

buttonProject.addEventListener("click", (e) => {
    e.preventDefault()
    const project = projectName.value
    if(project) {
        const li = document.createElement("li")
        li.className = "flex justify-between"
        listprojects.appendChild(li)

        const wrap = document.createElement("div")
        wrap.className = "flex gap-2"
        li.appendChild(wrap)

        const input = document.createElement("input")
        input.type = "checkbox"
        input.style.cursor = "pointer"
        input.style.width = "20px"
        wrap.appendChild(input)
        input.style.marginRight = "14px"

        const span = document.createElement("span")
        if(project.length > 7) {
            span.textContent = project.slice(0, 7) + "..."
        } else {
            span.textContent = project
        }
        wrap.appendChild(span)
        span.style.marginRight = "14px"

        const deleteButton = document.createElement("button")
        const deleteIcon = document.createElement("img")
        deleteIcon.src = "delete.png"
        deleteIcon.style.width = "20px"
        deleteButton.appendChild(deleteIcon)
        deleteButton.style.cursor = "pointer"
        li.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => {
            li.remove()
        })

        projectName.value = ""

        span.style.fontSize = "24px"

        input.addEventListener("click", () => {
            if(input.checked) {
                span.style.textDecoration = "line-through"
                span.style.textDecorationThickness = "2px"
                span.style.color = "red"
            } else {
                span.style.textDecoration = "none"
                span.style.color = "black"
                span.style.textDecorationColor = "black"
            }
        })
    }
})

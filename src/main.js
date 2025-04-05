import './style.css'

document.querySelector('#app').innerHTML =`
<main class="main px-10 md:px-20 xl:px-30 py-10 flex flex-col justify-between min-h-screen overflow-x-hidden">
    <section class="flex flex-col gap-10">
        <section class="flex justify-between items-center md:hidden">
            <div class="flex items-center gap-2">
                <img src="Katherine.png" alt="" class="w-12 h-12 rounded-full" />
                <p class="font-semibold text-3xl">Katherine</p>
            </div>
            <button class="menu cursor-pointer flex gap-2 items-center">                    
                <img src="menu.png" alt="" class="bdIcon h-8" />
            </button>
        </section>
        <section class="flex flex-col gap-6">
            <div class="flex items-center w-full justify-between md:w-fit md:gap-8">
                <h1 class="text-3xl xl:text-4xl font-bold">Project 1</h1> 
            </div>
            <textarea placeholder="Add a description about this project..." class="w-full md:hidden focus:outline-none"></textarea>
        </section>
        <article class="flex flex-col gap-6 mt-2 md:mt-6">
             <button class="bdMembers flex gap-2 border-b-2 cursor-pointer">
                 <h3 class="text-xl font-semibold">Members</h3>
                 <img src="arrow_left.png" alt="" class="bdMembersIcon h-6" />
             </button>
             <ul class="members hidden md:flex flex-col gap-2 px-6">
                 <li class="flex items-center gap-2">
                     <img src="Katherine.png" alt="" class="w-12 h-12 rounded-full" />
                     <p class="font-semibold text-xl">Katherine</p>
                 </li>
                 <li class="flex items-center gap-2">
                     <img src="Patrick.png" alt="" class="w-12 h-12 rounded-full" />
                     <p class="font-semibold text-xl">Patrick</p>
                 </li>
             </ul>
        </article>
        <article class="flex flex-col gap-2">
             <button class="bdTasks flex gap-2 border-b-2 cursor-pointer">
                 <h3 class="text-xl font-semibold">Tasks</h3>
                 <img src="arrow_down.png" alt="" class="bdTaskIcon h-6" />
             </button>
             <ul class="listActivities flex flex-col gap-2 px-10">

             </ul>
             <form id="new-todo-form" class="flex flex-col lg:flex-row gap-2">
                <input type="text" id="todo-input" class="border-2 border-gray-400 rounded-lg p-2" placeholder="Add a new activity" />
                <button type="submit" id="button" class="px-8 py-2 bg-orange-400 hover:bg-amber-300 font-semibold cursor-pointer rounded-lg">Add Activity</button>
              </form>
        </article>
        <article class="hidden md:flex md:flex-col gap-2">
             <button class="bdDescription flex gap-2 border-b-2 cursor-pointer">
                 <h3 class="text-xl font-semibold">Description</h3>
                 <img src="arrow_down.png" alt="" class="bdDescriptionIcon h-6" />
             </button>
             <div class="description border-gray-400 border-2 rounded-lg">
                 <textarea placeholder="Add a description about this project ..." class="w-full h-40 p-4 focus:outline-none"></textarea>
             </div>
        </article>
    </section>
    <section class="flex flex-col gap-2 items-center md:items-start">
        <p class="modal text-lg font-bold"></p>
        <button class="saved w-full py-3 md:w-fit md:px-8 bg-gray-900 hover:bg-gray-700 rounded-lg cursor-pointer mt-4">
            <p class="font-semibold text-lg text-white">Save</p>
        </button>
    </section>
</main>
`

const bdMembers = document.querySelector('.bdMembers')
const bdMembersIcon = document.querySelector('.bdMembersIcon')
const members = document.querySelector('.members')
const bdTasks = document.querySelector('.bdTasks')
const bdTaskIcon = document.querySelector('.bdTaskIcon')
const listActivities = document.querySelector('.listActivities')
const bdDescription = document.querySelector('.bdDescription')
const description = document.querySelector('.description')
const bdDescriptionIcon = document.querySelector('.bdDescriptionIcon')
const savedButton = document.querySelector('.saved')
const modal = document.querySelector('.modal')

savedButton.addEventListener('click', () => {
    modal.textContent = "Project saved successfully!"
    setTimeout(() => {
        modal.textContent = ""
    }, 2000)
})


    if(members.style.display === 'none') {
            bdMembersIcon.src = 'arrow_down.png'
            members.style.display = 'flex'
        } else {
            bdMembersIcon.src = 'arrow_left.png'
            members.style.display = 'none'
    }

    bdMembers.addEventListener('click', () => {
        if(members.style.display === 'none') {
            bdMembersIcon.src = 'arrow_down.png'
            members.style.display = 'flex'
        } else {
            bdMembersIcon.src = 'arrow_left.png'
            members.style.display = 'none'
        }
    })

    bdTasks.addEventListener('click', () => {
        if(listActivities.style.display === 'none') {
            bdTaskIcon.src = 'arrow_down.png'
            listActivities.style.display = 'flex'
        } else {
            bdTaskIcon.src = 'arrow_left.png'
            listActivities.style.display = 'none'
        }
    })

    bdDescription.addEventListener('click', () => {
        if(description.style.display === 'none') {
            bdDescriptionIcon.src = '/arrow_down.png'
            description.style.display = 'flex'
        } else {
            bdDescriptionIcon.src = 'arrow_left.png'
            description.style.display = 'none'
        }
    })

const content = document.getElementById("todo-input")
const button = document.getElementById("button")
const list = document.querySelector(".listActivities")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const todo = content.value
    if(todo) {
        const li = document.createElement("li")
        list.appendChild(li)

        const input = document.createElement("input")
        input.type = "checkbox"
        input.style.cursor = "pointer"
        input.style.width = "20px"
        li.appendChild(input)
        input.style.marginRight = "14px"

        const span = document.createElement("span")
        span.textContent = todo
        li.appendChild(span)
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

        content.value = ""

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

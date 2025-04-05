(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector("#sidebar").innerHTML=`
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
`;const u=document.getElementById("input-task"),g=document.getElementById("button-task"),h=document.querySelector(".list-tasks");g.addEventListener("click",r=>{r.preventDefault();const n=u.value;if(n){const l=document.createElement("li");l.className="flex justify-between",h.appendChild(l);const s=document.createElement("div");s.className="flex gap-2",l.appendChild(s);const e=document.createElement("input");e.type="checkbox",e.style.cursor="pointer",e.style.width="20px",s.appendChild(e),e.style.marginRight="14px";const t=document.createElement("span");n.length>7?t.textContent=n.slice(0,7)+"...":t.textContent=n,s.appendChild(t),t.style.marginRight="14px";const o=document.createElement("button"),c=document.createElement("img");c.src="delete.png",c.style.width="20px",o.appendChild(c),o.style.cursor="pointer",l.appendChild(o),o.addEventListener("click",()=>{l.remove()}),u.value="",t.style.fontSize="24px",e.addEventListener("click",()=>{e.checked?(t.style.textDecoration="line-through",t.style.textDecorationThickness="2px",t.style.color="red"):(t.style.textDecoration="none",t.style.color="black",t.style.textDecorationColor="black")})}});const m=document.getElementById("input-project"),v=document.getElementById("button-project"),w=document.querySelector(".list-projects");v.addEventListener("click",r=>{r.preventDefault();const n=m.value;if(n){const l=document.createElement("li");l.className="flex justify-between",w.appendChild(l);const s=document.createElement("div");s.className="flex gap-2",l.appendChild(s);const e=document.createElement("input");e.type="checkbox",e.style.cursor="pointer",e.style.width="20px",s.appendChild(e),e.style.marginRight="14px";const t=document.createElement("span");n.length>7?t.textContent=n.slice(0,7)+"...":t.textContent=n,s.appendChild(t),t.style.marginRight="14px";const o=document.createElement("button"),c=document.createElement("img");c.src="delete.png",c.style.width="20px",o.appendChild(c),o.style.cursor="pointer",l.appendChild(o),o.addEventListener("click",()=>{l.remove()}),m.value="",t.style.fontSize="24px",e.addEventListener("click",()=>{e.checked?(t.style.textDecoration="line-through",t.style.textDecorationThickness="2px",t.style.color="red"):(t.style.textDecoration="none",t.style.color="black",t.style.textDecorationColor="black")})}});document.querySelector("#app").innerHTML=`
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
`;const k=document.querySelector(".bdMembers"),a=document.querySelector(".bdMembersIcon"),i=document.querySelector(".members"),E=document.querySelector(".bdTasks"),f=document.querySelector(".bdTaskIcon"),d=document.querySelector(".listActivities"),j=document.querySelector(".bdDescription"),p=document.querySelector(".description"),x=document.querySelector(".bdDescriptionIcon"),C=document.querySelector(".saved"),y=document.querySelector(".modal");C.addEventListener("click",()=>{y.textContent="Project saved successfully!",setTimeout(()=>{y.textContent=""},2e3)});i.style.display==="none"?(a.src="arrow_down.png",i.style.display="flex"):(a.src="arrow_left.png",i.style.display="none");k.addEventListener("click",()=>{i.style.display==="none"?(a.src="arrow_down.png",i.style.display="flex"):(a.src="arrow_left.png",i.style.display="none")});E.addEventListener("click",()=>{d.style.display==="none"?(f.src="arrow_down.png",d.style.display="flex"):(f.src="arrow_left.png",d.style.display="none")});j.addEventListener("click",()=>{p.style.display==="none"?(x.src="/arrow_down.png",p.style.display="flex"):(x.src="arrow_left.png",p.style.display="none")});const b=document.getElementById("todo-input"),D=document.getElementById("button"),L=document.querySelector(".listActivities");D.addEventListener("click",r=>{r.preventDefault();const n=b.value;if(n){const l=document.createElement("li");L.appendChild(l);const s=document.createElement("input");s.type="checkbox",s.style.cursor="pointer",s.style.width="20px",l.appendChild(s),s.style.marginRight="14px";const e=document.createElement("span");e.textContent=n,l.appendChild(e),e.style.marginRight="14px";const t=document.createElement("button"),o=document.createElement("img");o.src="delete.png",o.style.width="20px",t.appendChild(o),t.style.cursor="pointer",l.appendChild(t),t.addEventListener("click",()=>{l.remove()}),b.value="",e.style.fontSize="24px",s.addEventListener("click",()=>{s.checked?(e.style.textDecoration="line-through",e.style.textDecorationThickness="2px",e.style.color="red"):(e.style.textDecoration="none",e.style.color="black",e.style.textDecorationColor="black")})}});

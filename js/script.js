{
    const tasks = [
      
    ];

    const onFormSubmit = (event) => {
       
            event.preventDefault();

            const newItemElement = document.querySelector(".js-newItem");
            const newItemContent = document.querySelector(".js-newItem").value.trim();
            
            if (newItemContent !== "") {

                addNewItem(newItemContent);
                newItemElement.value="";
            } 

        newItemElement.focus();
        
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }
    
    const removeItem = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }
   
    const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, taskIndex) => {
        removeButton.addEventListener("click", () => {
           removeItem(taskIndex);
        })
    });
    
const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
    toggleDoneButton.addEventListener("click", () => {
       toggleTaskDone(taskIndex);
    })
});
    }

    const render = () => {
        let htmlString = ""; 

        for(const task of tasks) { 
            htmlString +=  ` 
            <li class="items__list js-items">

            <span class="items__content ${task.done ? "items__content--done" : ""}">${task.content}
            </span>
                <button class="form__buttonDone form__buttonDone--toggleDone js-toggleDone">${task.done ? "Got it!" : "Got it!"}</button>
                <button class="form__buttonRemove js-remove">🗑</button> 
            </li> 
            `;
        }

        document.querySelector(".js-items").innerHTML=htmlString;

        bindEvents();
    
    }

    const addNewItem = (newItemContent) => {

    tasks.push({
        content: newItemContent
    })
    render(); 
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
   
    };

init ();

}


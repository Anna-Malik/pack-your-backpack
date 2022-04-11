{
    const tasks = [
       
    ];

    const onFormSubmit = (event) => {
       
            event.preventDefault();

            const newItemContent = document.querySelector(".js-newItem").value.trim();
            
            if (newItemContent === "") {
                return;
            } 
        addNewItem(newItemContent);
        
    }
    const render = () => {
        let htmlString = ""; 

        for(const task of tasks) { 
            htmlString +=  ` 
            <li 
                ${task.done ? "style = \"text-decoration: line-through\"" : ""}>
                ${task.content}
                <button class="js-remove">Remove item</button>
            </li> 
            `;
        }

        document.querySelector(".js-items").innerHTML=htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
               removeItem(index);
            })
        });
        
    }

    const addNewItem = (newItemContent) => {

    tasks.push({
        content: newItemContent
    })
    render(); 
}
const removeItem = (index) => {
    tasks.splice(index, 1);
    render();
}

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
   
};

init ();

}


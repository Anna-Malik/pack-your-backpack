{
    const tasks = [];

    const render = () => {
        let htmlString = ""; // na początku pusty ciąg znaków//

        for(const task of tasks) { 
            htmlString +=  ` 
            <li>
                ${task.content}
            </li> 
            `;
        }

        document.querySelector(".js-items").innerHTML=htmlString;
    }


    const init = () => {
        render();

};

init ();

}


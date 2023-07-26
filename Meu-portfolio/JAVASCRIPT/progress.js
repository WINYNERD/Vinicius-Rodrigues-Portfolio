// FUNCAO DO PROGRESS
function simulateProgress(selector, color, startingPercentage) {
    let progress = 0; // valor inicial
    const progressBar = document.querySelector(selector);
    progressBar.style.backgroundColor = color || '#00ff00'; // Cor padrão é verde

    function updateProgress() {
        if (progress <= startingPercentage) {
            progress += 1;
            progressBar.style.height = `${progress}%`;

            if (progress < 100) {
                setTimeout(updateProgress, 10); // tempo do progresso
            }
        }
    }

    updateProgress();
}

// Chame a função para cada itens de progresso com diferentes cores

// FRONT-END
simulateProgress('#progress-html', '#FF7D39', 89); // Item 1 - html
simulateProgress('#progress-css', '#39B3FF', 75); // Item 2 - css
simulateProgress('#progress-javascript', '#FAFF39', 59); // Item 3 - javascript
simulateProgress('#progress-react', '#0096FF', 39); // Item 4 - react

// BACK-END

simulateProgress('#progress-python', '#2986A1', 79); // Item 4 - react
simulateProgress('#progress-django', '#29A15A', 32); // Item 4 - react

// DATA-SCIENCE

simulateProgress('#progress-mysql', '#2986A1', 45); // Item 4 - react

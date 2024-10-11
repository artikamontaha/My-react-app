const loadcard = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data => {
        console.log(data);  
        if (data.categories) {
            DisplayCategories(data.categories); 
        } 
    })
    .catch(error => console.error("Error fetching data:", error));
}

const DisplayCategories = (categories) => { 
    const container = document.getElementById('categoriesContainer');
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'bg-white gap-5 shadow-lg flex rounded-lg pt-5 mt-20 h-[200px] w-[500px]';
        card.innerHTML = `
        <div>            <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-[400px] h-32 object-cover rounded-t-lg" />
</div>

<div>
    <h3 class="text-lg font-bold mt-2">${category.strCategory}</h3>
    <p class="text-sm text-gray-600">${category.strCategoryDescription.substring(0, 150)}...</p>

<!-- Button to trigger the modal -->
<button class="btn btn-link text-[#FFC107]" onclick="document.getElementById('my_modal_3').showModal()">View Details 📖</button>

<!-- Modal structure -->
<!-- Button to trigger the modal -->
<dialog id="my_modal_3" class="modal bg-white p-4 rounded-lg" style="width: 300px; max-width: 100%; h-[300px] margin: auto;">
    <div class="flex flex-col items-center">
        <!-- Image with a fixed height to control modal height -->
        <div class="w-full">
            <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-32 object-cover rounded-t-lg" /> <!-- Limited height here -->
        </div>

        <!-- Text Content with reduced padding -->
        <div class="p-2 text-center">
            <h3 class="text-lg font-bold mt-2">${category.strCategory}</h3>
            <p class="text-sm text-gray-600 line-clamp-3">${category.strCategoryDescription}</p> <!-- Limited to 3 lines -->
        </div>
    </div>

    <!-- Close button -->
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick="document.getElementById('my_modal_3').close()">✕</button>
</dialog>
        `;
        container.appendChild(card);
    });
}

loadcard();

console.log('artika');


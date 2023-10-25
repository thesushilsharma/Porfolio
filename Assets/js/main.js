 // Fetch JSON data 
 const jsonURL = 'Assets/json/data.json';

 fetch(jsonURL)
     .then(response => response.json())
     .then(data => {
         const portfolioGallery = document.getElementById('portfolio-gallery');

         data.forEach(websiteItem => {
             const portfolioItem = document.createElement('a');
             portfolioItem.href = websiteItem.url;
             portfolioItem.classList.add('block', 'group', 'relative', 'transition', 'ease-out', 'active:opacity-75', 'overflow-hidden');

             const image = document.createElement('img');
             image.src = websiteItem.image;
             image.alt = 'Product Image';
             image.classList.add('transform', 'transition', 'ease-out', 'group-hover:scale-110');
             portfolioItem.appendChild(image);

             const overlay = document.createElement('div');
             overlay.classList.add('absolute', 'inset-0', 'bg-black', 'bg-opacity-25', 'transition', 'ease-out', 'group-hover:bg-opacity-0');
             portfolioItem.appendChild(overlay);

             const info = document.createElement('div');
             info.classList.add('p-4', 'flex', 'items-center', 'justify-center', 'absolute', 'inset-0');
             const infoText = document.createElement('div');
             infoText.classList.add('py-3', 'px-4', 'bg-white', 'bg-opacity-95', 'rounded-3xl', 'text-sm', 'font-semibold', 'uppercase', 'tracking-wide', 'transition', 'ease-out', 'group-hover:text-white', 'group-hover:bg-blue-600', 'dark:bg-gray-900/90', 'dark:border-gray-800');
             infoText.textContent = websiteItem.name;
             info.appendChild(infoText);
             infoText.style.zIndex = '1';
             info.appendChild(infoText);
             portfolioItem.appendChild(info);

             const description = document.createElement('div');
             description.classList.add('p-4', 'm-3', 'bg-blue-200', 'rounded-lg');
             const descriptionText = document.createElement('p');
             descriptionText.classList.add('text-xl', 'font-bold', 'text-black');
             descriptionText.textContent = websiteItem.description;
             description.appendChild(descriptionText);
             portfolioItem.appendChild(description);

             portfolioGallery.appendChild(portfolioItem);
         });
     })
     .catch(error => {
         console.error('Error fetching JSON data: ', error);
     });
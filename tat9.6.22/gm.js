const pictures = [
      {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'A new picture',
        author: 'Bruno Brave',
        price: 15 ,
        inStock: true,
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'A new picture2',
        author: 'Bruno Brave',
        price: 35 ,
        inStock: true,
      },
      {
        image: 'https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_960_720.jpg',
        name: 'A new picture3',
        author: 'Bruno Brave',
        price: 25 ,
        inStock: false,
      },

];

function dispPictures(){
  let html = '';
  let stockStatus = " ";

    pictures.forEach(pic =>{
        if(pic.inStock === true){
            stockStatus = " ";
        }
        else{
            stockStatus = "Not avalible ";
        }

        html += 
       `<div class="card" style="width: 18rem;">
        <img src="${pic.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${pic.name}</h5>
        <p class="card-text">
        ${pic.author}
        </p>
        <p class="card-text">
        ${pic.price}
        </p>
        <span class="text-danger">${stockStatus}</span>
     </div>
     </div>`;

    })
   const container = document.getElementById('pics-container');
   container.innerHTML = html;
}

dispPictures();
console.log('testy mctesterson')

const menu = [
  // Category
  {
    category: 'Vessels',
    categoryItems: [
      {
        item: 'Waffle Cone',
        price: 3,
        img: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Waffle Cup',
        price: 4,
        img: 'https://images.unsplash.com/photo-1564919126030-8dbf63751ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Dipped Cone',
        price: 5,
        img: 'https://images.unsplash.com/photo-1569429378981-f4c5ba689a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ]
  },
  // Category
  {
    category: 'Ice Cream',
    categoryItems: [
      {
        item: 'Vanilla',
        price: 3,
        img: 'https://images.unsplash.com/photo-1646318750399-77c33b8d3aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Chocolate',
        price: 3,
        img: 'https://images.unsplash.com/photo-1469428946640-844b286ebf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Strawberry',
        price: 3,
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Cookies & Cream',
        price: 4,
        img: 'https://images.unsplash.com/photo-1616863858589-9e04f2728c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Mint',
        price: 4,
        img: 'https://images.unsplash.com/photo-1529688499411-262f191fe29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Affogato',
        price: 4,
        img: 'https://images.unsplash.com/photo-1638543284847-3a6bed3e1689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ]
  },
  // Category
  {
    category: 'Toppings',
    categoryItems: [
      {
        item: 'Sprinkles',
        price: 2,
        img: 'https://images.unsplash.com/photo-1516746924755-babd21844370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Chocolate Chips',
        price: 3,
        img: 'https://images.unsplash.com/photo-1585502866757-30ae9e509e31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      },
      {
        item: 'Gummy Worms',
        price: 2,
        img: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }
]

// const categoryHTML = `
//           <div class="col-12 category title">
//             <div class="p fs-1">${categoryName}</div>
//           </div>
//           `;

// const itemHTML = `
//           <div class="col-12 col-md-4 p-3 p-md-4">
//             <div class="card menuItems" onclick="addItem('${itemName}')">
//               <img src="${itemImg}" alt="${itemName}">
//               <p class="items">${itemName} • $${itemPrice}</p>
//             </div>
//           </div>
//           `

function drawMenu() {
  let menuHTML = "";

  menu.forEach(section => {
    // console.log(section.category);
    // console.log(section.categoryItems);
    menuHTML += `
    <div class="col-12 category title">
    <div class="p fs-1">${section.category}</div>
    </div>
    `;
    section.categoryItems.forEach(sectionItem => {
      // console.log(sectionItem.item);
      // console.log(sectionItem.price);
      // console.log(sectionItem.img);
      menuHTML += `
          <div class="col-12 col-md-4 p-3 p-md-4">
            <div class="card menuItems" onclick="addItem('${sectionItem.item}')">
              <img src="${sectionItem.img}" alt="${sectionItem.item}">
              <p class="items">${sectionItem.item} • $${sectionItem.price}</p>
            </div>
          </div>
          `;
    })
  })
  document.getElementById('menuListing').innerHTML = menuHTML;
}
drawMenu();
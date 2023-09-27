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
//             <div class="p-3 fs-1">${categoryName}</div>
//           </div>
//           `;

// const itemHTML = `
//           <div class="col-12 col-md-4 p-3 p-md-4">
//             <div class="card btn btn-primary menuItems" onclick="addItem('${itemName}')">
//               <img src="${itemImg}" alt="${itemName}">
//               <p class="items">${itemName} • $${itemPrice}</p>
//             </div>
//           </div>
//           `

// const cartHTML = `
//           <span class="d-flex justify-content-between">
//             <p>${itemName}</p>
//             <span class="d-flex justify-content-evenly">
//               <p class="px-1"> | ${itemQTY}</p>
//               <p class="px-1"> | $${priceEach}</p>
//               <p class="px-1"> | $${lineTotal}</p>
//             </span>
//           </span>
// `

function drawMenu() {
  let menuHTML = "";

  menu.forEach(section => {
    // console.log(section.category);
    // console.log(section.categoryItems);
    menuHTML += `
    <div class="col-12 category title">
    <div class="fs-1">${section.category}</div>
    </div>
    `;
    section.categoryItems.forEach(sectionItem => {
      // console.log(sectionItem.item);
      // console.log(sectionItem.price);
      // console.log(sectionItem.img);
      menuHTML += `
          <div class="col-12 col-md-4 p-3 p-md-4">
            <div class="card btn btn-primary menuItems" onclick="addItem('${sectionItem.item}',${sectionItem.price})">
              <img src="${sectionItem.img}" alt="${sectionItem.item}">
              <p class="items fs-5 my-3">${sectionItem.item} • $${sectionItem.price}</p>
            </div>
          </div>
          `;
    })
  })
  document.getElementById('menuListing').innerHTML = menuHTML;
}
drawMenu();

let cart = [];

function addItem(item, price) {

  let itemInCartCheck = cart.find(cartItem => cartItem.name == item);
  console.log(!!itemInCartCheck)

  if (!itemInCartCheck) {
    console.log('adding new item to cart');
    const cartItem = {
      name: `${item}`,
      price: price,
      qty: 1
    }
    cart.push(cartItem);
  }
  console.log(cart)

  if (itemInCartCheck) {
    console.log('item in cart, adding qty');
    cart.find(cartItem => {
      if (cartItem.name == item) {
        console.log(cartItem.name);
        console.log(cartItem.qty);
        console.log('adding qty');
        cartItem.qty++;
      }
    })
  }

  drawCart();
}

function drawCart() {
  let cartHTML = "";
  let subtotal = 0;
  let tax = 0.06; //6%

  cart.forEach(cartItem => {
    subtotal += (cartItem.price * cartItem.qty)
    cartHTML += `
          <span class="d-flex justify-content-between">
            <p>${cartItem.name}</p>
            <span class="d-flex justify-content-evenly">
              <p class="px-1"> | ${cartItem.qty}</p>
              <p class="px-1"> | $${(cartItem.price).toFixed(2)}</p>
              <p class="px-1"> | $${(cartItem.price * cartItem.qty).toFixed(2)}</p>
            </span>
          </span>
          `
  })
  document.getElementById('cart').innerHTML = "";
  document.getElementById('cart').innerHTML = cartHTML;

  document.getElementById('subtotal').innerText = subtotal.toFixed(2);
  document.getElementById('tax').innerText = (subtotal * tax).toFixed(2);
  document.getElementById('total').innerText = (subtotal * (1 + tax)).toFixed(2);
}
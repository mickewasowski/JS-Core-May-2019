function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   buttons.forEach((b) =>{
      b.addEventListener('click',clickEvent);
   });

   let totalPrice = 0;
   let array = [];

   function clickEvent(e){
      let current = e.target;
      let buttonParent = current.parentElement;
      let parent = Array.from(buttonParent.parentElement.children);

      let product = parent[1].getElementsByClassName('product-title');
      let productName = product[0].textContent;
      let price = Number(parent[3].textContent).toFixed(2);

      totalPrice += Number(price);

      if (!array.includes(productName)) {
         array.push(productName);
      }
      document.getElementsByTagName('textarea')[0].value += `Added ${productName} for ${price} to the cart.\n`
   }

   let checkoutButton = document.getElementsByClassName('checkout')[0];
   
   checkoutButton.addEventListener('click',checkout);

   function checkout(){
      buttons.forEach((b) =>{
         b.removeEventListener('click',clickEvent);
      });

      checkoutButton.removeEventListener('click',checkout);

      document.getElementsByTagName('textarea')[0].value += `You bought ${array.join(', ')} for ${totalPrice.toFixed(2)}.`
   }
}
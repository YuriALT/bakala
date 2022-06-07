function addTax(price){
      if(!price || price <= 0){
         return 'Nothing is for free! please supply a price';
         }
      const vat = 1.17; 
      const total = (price * vat).toFixed(2);
      return total;
      
}
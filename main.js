// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//using Free Formatters luhn algoritm
const validateCred = cardNum =>{
    let sum = 0;
    let lastDigit = cardNum[cardNum.length -1];
    let newCardNum = cardNum.slice(0, -1);
    newCardNum.reverse();
for(let i = 0; i < newCardNum.length; i += 2){
    newCardNum[i] *= 2;
    if (newCardNum[i] > 9) {
        newCardNum[i] -= 9;
    }
    sum += newCardNum[i];
}
for (let j = 1; j < newCardNum.length; j+= 2){
    sum += newCardNum[j];
}
return (sum + lastDigit) % 10 === 0;
};

//test the fuction
console.log(validateCred(valid1));


//Function to get invalid cards
const findInvalidCards = cards =>{
    let invalidCards = [];

    for ( let k=0; k< cards.length; k++){
         if (validateCred(cards[k]) == true){
             invalidCards.push(cards[k]);
         }
    }
   return invalidCards; 
}
console.log(findInvalidCards(batch));



    const idInvalidCardCompanies = cardCom =>{
        let cardComList = [];
        for( let l =0; l < cardCom.length; l++){
            if(cardCom[l][0] == 3){
            cardComList.push("amex")
            }else if (cardCom[l][0] == 4){
           cardComList.push("visa")
            }else if (cardCom[l][0] == 5){
            cardComList.push("mastercard")
            }else if (cardCom[l][0] == 6){
              cardComList.push("discover")
            }else{
            return "unknown company"
            }
        }     
        let list= [...new Set(cardComList)];
        return list;
     }

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch));
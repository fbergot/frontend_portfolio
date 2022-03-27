/**
 * Add coma on all elements but not of last
 */
const comaOrNot = (arrayOfString: string[]): string => {
   let stringTot = "";

   arrayOfString.forEach((chunk, index) => {
      switch (true) {
         case index === 0:
            stringTot += `${chunk},`;
            break;
         case index < arrayOfString.length - 1:
            stringTot += ` ${chunk},`;
            break;
         default:
            stringTot += ` ${chunk}`;
      }
   });
   return stringTot;
};

export default comaOrNot;

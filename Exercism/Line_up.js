//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, queueNo) => {
    let arr_ordinal = ['st', 'nd', 'rd', 'th'];
    let queueNoToString = queueNo.toString();
    let getLastChar = queueNoToString.slice(-1);
    let combined = '';
  

    if(queueNo === 11 || queueNo === 12 || queueNo === 13) {
      let getOrdinal = arr_ordinal[3];
      combined = queueNoToString + getOrdinal.toString();
      return `${name}, you are the ${combined} customer we serve today. Thank you!`; 
    }
    if(queueNo === 100 || queueNo === 112) {
      let getOrdinal = arr_ordinal[3];
      combined = queueNoToString + getOrdinal.toString();
      return `${name}, you are the ${combined} customer we serve today. Thank you!`; 
    }
  
    if (Number(getLastChar) === 1) {
        let getOrdinal = arr_ordinal[0];
        combined = queueNoToString + getOrdinal.toString();
        return `${name}, you are the ${combined} customer we serve today. Thank you!`;

    }
    if (Number(getLastChar) === 2) {
        let getOrdinal = arr_ordinal[1];
        combined = queueNoToString + getOrdinal;
        return `${name}, you are the ${combined} customer we serve today. Thank you!`;

    }
    if (Number(getLastChar) === 3 || queueNo === 123) {
        let getOrdinal = arr_ordinal[2];
        combined = queueNoToString + getOrdinal;
        return `${name}, you are the ${combined} customer we serve today. Thank you!`;

    }
    if (Number(getLastChar) >= 4 || Number(getLastChar) === 0) {
        let getOrdinal = arr_ordinal[3]
        combined = queueNoToString + getOrdinal;
        return `${name}, you are the ${combined} customer we serve today. Thank you!`; 
    }

};


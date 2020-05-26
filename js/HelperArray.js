
class HelperArray{

    /**
     * This method, calculates the sum of the elements of the array sent as parameters.
     * @param {Array} pArray 
     */
    static sumOfArrayItems(pArray) {
        let result = pArray.reduce((total, value) => {
            return total + value;
        });
        return result;
    }

    /**
     * Bu fonksiyon, parametre olarak gönderilen dizinin en büyük elemanını bulur.
     * 1. Yöntem
     */
    static biggestItemOfArray(pArray) {
        return Math.max.apply(null, pArray);
    }

    /**
     * Bu fonksiyon, parametre olarak gönderilen dizinin en küçük elemanını bulur.
     * 1. Yöntem
     */
    static smallestItemOfArray(pArray) {
        return Math.min.apply(null, pArray);
    }
}
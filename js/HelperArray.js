
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

    /**
     * Bu fonksiyon, parametre olarak gönderilen dizinin en büyük elemanını bulur.
     * 2. Yöntem
     */
    static biggestItemOfArray2(pArray) {
        var arrayLength = pArray.length;
        var maxItem = -Infinity;
        while (arrayLength--) {
        if (pArray[arrayLength] > maxItem) {
            maxItem = pArray[arrayLength];
        }
        }
        return maxItem;
    }

    /**
     * Bu fonksiyon, parametre olarak gönderilen dizinin en küçük elemanını bulur.
     * 2. Yöntem
     */
    static smallestItemOfArray2(pArray) {
        var arrayLength = pArray.length;
        var minItem = Infinity;
        while (arrayLength--) {
        if (pArray[arrayLength] < minItem) {
            minItem = pArray[arrayLength];
        }
        }
        return minItem;
    }
}

class HelperArray{

    /**
     * This method, calculates the sum of the elements of the array sent as parameters.
     * @param {Array} pArray 
     */
    sumOfArrayItems(pArray) {
        let result = pArray.reduce((total, value) => {
            return total + value;
        });
        return result;
    }
}

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


    /**
     * Bu fonksiyon, parametre olarak gönderilen dizinin ortalamasını hesaplar.
     */
    static averageOfArrayItems(array) {
        let total = array.reduce((total, value) => {
            return total + value;
        });
        return total / array.length;
    }


/**
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});

    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});

    var cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
    ];

    cars.sort(function(a, b){return a.year - b.year});

    cars.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });


 */
}
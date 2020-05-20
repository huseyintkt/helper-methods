    
class HelperDOM{
    
    /**
     * This method, selects the Html object according to the id sent as a parameter.
     * @param {String} pId 
     */
    static getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }

    /**
     * This method, selects Html objects according to the class sent as parameters.
     * @param {String} pClass 
     */
    static getElementsByClassName(pClass) {
        return document.querySelectorAll(`.${pClass}`);
    }
}
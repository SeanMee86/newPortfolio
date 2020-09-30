/**
 * Returns a new array of arrays of each equivalent string in original array.
 * Example: ['Hello','Hello','Goodbye','Hello','Goodbye','Goodbye'] => [['Hello','Hello','Hello']['Goodbye','Goodbye','Goodbye']]
 */

/* eslint-disable */
Array.prototype.stringCount = function (){
    const C = this.slice();
    const A = []
    let I = 0;
    C.sort().forEach((e, ind) => {
        if(typeof e === 'string')
            if(ind === 0){
                A.push([])
                A[I].push(e)
            }else if(C[ind] === C[ind-1]){
                A[I].push(e)
            }else {
                A.push([])
                I++
                A[I].push(e)
            }
        else
            throw new Error('elements of array must be of type string');
    })
    return A;
}

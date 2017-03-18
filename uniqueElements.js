/*
* Return a set containing unique values from two given sets
*/

Set.prototype.difference = function(setB) {
    var differenceSet = new Set(this);
    for (var elem of setB) {
        differenceSet.delete(elem);
    }
    return differenceSet;
}

Set.prototype.union = function(setB) {
    var unionSet = new Set(this);
    for (var elem of setB) {
        unionSet.add(elem);
    }
    return unionSet;
}
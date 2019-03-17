function Set(){
    var items = {}

    this.add = function(value){
        if(!this.has(value)){
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function(value){
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value){
        return items.hasOwnProperty(value)
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        return Object.keys(items).length
    }

    this.values = function(){
        var values = [],
        keys = Object.keys(items)

        for (let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])            
        }
        return values
    }

    this.union = function(otherSet){
        var unionSet = new Set(),
        values = this.values()

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])            
        }

        values = otherSet.values()

        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])            
        }

        return unionSet
    }

    this.intersetion = function(otherSet){
        var intersectionSet = new Set(),
        values = this.values()

        for (let i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }            
        }
        return intersectionSet
    }

    this.difference = function(otherSet){
        var differenceSet = new Set(),
        values = this.values()

        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }            
        }
        return differenceSet
    }

    this.subset = function(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            var values = this.values()

            for (let i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])){
                    return false
                }                
            }
            return true
        }
    }
}

// // Part 1 - Add, Delete, Has, Clear, Size, Values
// var set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(4)
// set.add(4)

// set.delete(4)
// console.log(set.values())
// console.log(set.size())
// console.log(set.has(1))
// console.log(set.has(10))
// console.log(set.clear())
// console.log(set.values())

// Part 2 - Union, Intersect, Difference, Subset
var setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)

var setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

var setC = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

var unionAB = setA.union(setB)
console.log(unionAB.values())
var intersectionAB = setA.intersetion(setB)
console.log(intersectionAB.values())
var differenceAB = setA.difference(setB)
console.log(differenceAB.values())

console.log(setA.subset(setB))
console.log(setA.subset(setC))
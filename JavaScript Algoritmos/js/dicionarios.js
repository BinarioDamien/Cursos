function Dictionary(){
    var items = {}

    this.set = function(key, value){
        items[key] = value
    }

    this.delete = function(key){
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key){
        return items.hasOwnProperty(key)
    }

    this.get = function(key){
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        return Object.keys(items).length
    }

    this.keys = function(){
        return Object.keys(items)
    }

    this.values = function(){
        var values = []

        keys = Object.keys(items)

        for (let i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])            
        }
        return values
    }

    this.getItems = function(){
        return items
    }
}

var dic = new Dictionary()

dic.set("Wesley", "wesley.frts@gmail.com")
dic.set("Binario", "binario010@gmail.com")
dic.set("Thais", "thaisales23@gmail.com")

console.log(dic.has("Wesley"))
console.log(dic.has("Murky"))
console.log(dic.size())
console.log(dic.get("Thais"))
console.log(dic.keys())
console.log(dic.values())
console.log(dic.getItems())
dic.delete("Binario")
console.log(dic.has("Binario"))
console.log(dic.clear())
console.log(dic.size())




// create a factory for individual ships

function ship (length, name) {return {
    name: name,
    length: length,
    hits: 0,
    hitReceived() {
        this.hits = this.hits + 1
        if (this.length == this.hits) {
            this.isSunk = true
        }
    },
    isSunk: false,
}}

export {ship}
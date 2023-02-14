// create a factory for individual ships

module.exports.func = function ship (length, player) {return {
    length: length,
    hits: 0,
    hitReceived() {
        this.hits = this.hits + 1
        if (this.length == this.hits) {
            this.isSunk = true
        }
    },
    isSunk: false,
    player: player
}}

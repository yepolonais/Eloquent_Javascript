/**
 * @constructor
 **/
Person = function() {
   // Person#say
    this.say = function() {
        return "I'm an instance.";
    }

    function say() {
        return "I'm inner.";
    }
}
Person.say = function() {
    return "I'm static.";
}

/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the shoe size.
 * @param {string} color - The shoe's color.
 */
Shoe.prototype.setColor = function(color) {
    // ...
};

/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
Shoe.prototype.setColor2 = function(color) {
    // ...
};


/**
 * Returns a pronounceable password with length of "size" shuffled with numbers
 * @author Ricardo Burone
 * @param {integer} size    Total length of the password
 * @param {integer} numbers If > 0 put a total of numbers in
 * @returns {string}
 */
function genPronPassword(size = 8, numbers = 0) {
    const rndInt = (size = 100) => Math.floor(Math.random() * size)
    const other = (char) => (char == 'a') ? 'b' : 'a'
    const aOrB = () => {
        const n = rndInt() 
        return (Math.floor(n/2) == n/2) ? 'a' : 'b'
    }

    const letters = {
        a: 'AaEeIiOoUu',
        b: 'BbCcDdFfGgHhJjKkLkMmNnPpQqRrSsTtVvWwXxYyZz'
    }

    function pickOne(letters) {
        const idx = rndInt(shuffle(letters).length)
        return letters.charAt(idx)
    }

    function shuffle(letter) {
        let char = letter.split('')
        const size = char.length

        for (let pos = 0; pos < size; pos++) {
            const idx = rndInt(size);
            const tmp = char[pos];
            char[pos] = char[idx];
            char[idx] = tmp;
        }
        return char.join(""); 
    }

    function genPair() {
        const type = aOrB() 
        const letter1 = pickOne(letters[type])
        return letter1 + pickOne(letters[other(type)])
    }
    
    function genTrio() {
        const type = aOrB()
        const letter1 = pickOne(letters[type])
        const otherType = other(type)
        const letter2 = letter1 + pickOne(letters[otherType])
        return letter2 + pickOne(letters[other(otherType)])
    }

    function getPart(type) {
        return (type == 'p') ? genPair() : genTrio()
    }

    let count = size
    let password = ''

    while (count > 0) {
        rndInt() 
        aOrB() 
        let part = ''
        if (size > 3) {
            const o = aOrB() 
            part = aOrB() == 'a' ? genTrio() : genPair() 
        } else if (size == 3) {
            part = genTrio()
        } else if (size == 2) {
            part = genPair()
        } else {
            part = pickOne(aOrB())
        }

        count -= part.length 
        password += part
    }

    if (numbers > 0) {
        const char = password.split('')
        for (let i = 0; i < numbers; i++) {
            const num = rndInt(10) //=
            const pos = rndInt(size) //=
            char[pos] = num
        }
        password = char.join('')
    }

    return password
}

module.exports = genPronPassword

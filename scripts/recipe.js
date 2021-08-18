// console.log(location.search)

const index = location.search.split('=')[1]
const recipe = recipes[index]
const {name: recName, img, ingredients, instructions} = recipe

// console.log(ingredients)
// console.log(instructions)

let ingList
let insList

ingredients.forEach((elem) => {
    ingList += `<li>${elem}</li>\n`
})

instructions.forEach((elem) => {
    //legit just had ingredients here instead of insList and forgot to close the ul tag
    insList += `<li>${elem}</li>\n`
})

document.querySelector('#recipe').innerHTML = `<h2>${recName}</h2>
<img src="${img}" width=200/>
<h3>Ingedients</h3>
<ul>
${ingList}
</ul>
<h3>Instructions</h3>
<ol>
${insList}
</ol>
`
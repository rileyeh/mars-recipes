console.log(location.search)

let pageCategory = location.search.includes('break') ? 'break' : location.search.includes('lunch') ? 'lunch' : 'dinner'

console.log(recipes)

// for (let i = 0; i < recipes.length; i++) {
//     if (recipes[i].category === category) {
//         console.log('matched')
//     }
// }

recipes.forEach((elem, index) => {
    if (elem.category === pageCategory) {
        document.getElementById('list').innerHTML += `<a href='./recipe.html?index=${index}'>
            <h2>${elem.name}</h2>
            <img src='${elem.img}' width=200/>
        </a>`
    }
})
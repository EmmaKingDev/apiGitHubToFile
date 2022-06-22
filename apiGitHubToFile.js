import fetch from 'node-fetch'
import fs from 'fs'

const response = await fetch('https://api.github.com/search/repositories?q=language:javascript')
const data = await response.json()

//async solution
let items = data['items']
for (const i in items) {
    let data = `\nNiminen: ${items[i]['name']}\nForkseja: ${items[i]['forks_count']}\nDescri: ${items[i]['description']}\n-------------`
    fs.writeFile("hereAreTheResults.txt", data, {flag: "a+"}, (err) => {
        if (err)
            console.log("Oh shit " + err)
    }) 
}

//sync solution
/* for (const i in items) {
    let data = `\nNiminen: ${items[i]['name']}\nForkseja: ${items[i]['forks_count']}\nDescri: ${items[i]['description']}\n-------------`
    fs.writeFileSync("hereAreTheResults.txt", data + "\n", {flag: "a+"})
} */
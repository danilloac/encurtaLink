export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)
    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);
    const hasLink = linksStored.some( Link => Link.id === newLink.id )
        if (hasLink){
            return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))

}

export function deleteLink(Links, id) {
    let myLinks = Links.filter ( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtalinks', JSON.stringify(myLinks))

    return myLinks;
}
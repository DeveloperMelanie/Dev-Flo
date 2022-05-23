export const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
    }
    const rtf = new Intl.DateTimeFormat('es-ES', options)
    return rtf.format(new Date(date))
}

export const manageSearch = searchOpen => {
    const search = document.querySelector('#search')
    const outOfSearch = document.querySelector('#out-of-search')

    setTimeout(() => {
        search.focus()
    }, 50)

    outOfSearch.onclick = () => searchOpen(false)

    window.onkeydown = e => {
        if (e.key === 'Escape') {
            searchOpen(false)
        }
    }
}

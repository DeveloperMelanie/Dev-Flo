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

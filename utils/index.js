export const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
    const rtf = new Intl.DateTimeFormat('es-ES', options)
    // return new Date(date).toLocaleDateString('es-ES', options)
    return rtf.format(new Date(date))
}

export const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('es-ES', options)
}

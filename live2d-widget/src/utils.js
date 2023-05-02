export function randomSelection(obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
}

// export default randomSelection;

export function modelSelection(obj, textureId) {
    if (Array.isArray(obj)) {
        if (textureId < obj.length) {
            return obj[textureId]
        }
        return obj[Math.floor(Math.random() * obj.length)]
    } else {
        return obj
    }
}

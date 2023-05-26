
export const encodeEmail = (email: string): string => {
    return email.split("")
    .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}

export const decodeEmail = (email: string): string => {
    return email.split(/(\w\w)/g)
    .filter(p => !!p)
    .map(c => String.fromCharCode(parseInt(c, 16)))
    .join("");
}
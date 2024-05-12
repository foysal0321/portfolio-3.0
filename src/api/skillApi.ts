export const addSkill = (data: string) => {
    const res = fetch(`http://localhost:5000/skills`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    return res
}
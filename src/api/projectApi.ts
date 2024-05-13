export const addProject = (data: any) => {
    const res = fetch(`http://localhost:5000/projects`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res
}

export const deleteProject = (data: any) => {
    const res = fetch(`http://localhost:5000/projects/${data._id}`, {
        method: 'DELETE',
    })
    return res
}


export async function projectsData () {
    const res = await fetch(`http://localhost:5000/projects`, {
        next: {
            revalidate: 30
        }
    })
    return await res.json()
}



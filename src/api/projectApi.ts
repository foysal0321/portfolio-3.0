// export const addProject = (data: any) => {
//     const res = fetch(`https://portfolio-wine-three-46.vercel.app/projects`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     return res
// }

// export const deleteProject = (data: any) => {
//     const res = fetch(`https://portfolio-wine-three-46.vercel.app/projects/${data._id}`, {
//         method: 'DELETE',
//     })
//     return res
// }


// export async function projectsData() {
//     const res = await fetch(`https://portfolio-wine-three-46.vercel.app/projects`, {
//         next: {
//             revalidate: 30
//         }
//     })
//     return await res.json()
// }



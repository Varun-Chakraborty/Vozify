export default async function fetchUser(url) {
    return fetch(url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json' },
            body: JSON.stringify()
        })
        .then(response => response.json())
        .catch(err => console.log(err));
}
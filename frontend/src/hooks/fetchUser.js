export default async function fetchUser(url, data) {
    return fetch(url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(err => console.log(err));
}
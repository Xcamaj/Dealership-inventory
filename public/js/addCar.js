async function newCarHandler(event) {
    event.preventDefault();

    const response = await fetch(`/new`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

async function usedCarHandler(event) {
    event.preventDefault();

    const response = await fetch(`/used`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-car-form').addEventListener('submit', newCarHandler);
document.querySelector('.used-car-form').addEventListener('submit', usedCarHandler);

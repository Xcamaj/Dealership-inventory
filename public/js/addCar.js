async function newFormHandler(event) {
    event.preventDefault();
  
    const make = document.querySelector('input[name="post-new-make"]').value;
    const model = document.querySelector('input[name="post-new-model"]').value;
    const price = document.querySelector('input[name="post-new-price"]').value;
    const type = document.querySelector('input[name="post-new-type"]').value;
    const user_id = document.querySelector('input[name="post-new-user_id"]').value;
  
    const response = await fetch(`/api/new`, {
      method: 'POST',
      body: JSON.stringify({
        make,
        model,
        price,
        type,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/newcars');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-car-form').addEventListener('submit', newFormHandler);
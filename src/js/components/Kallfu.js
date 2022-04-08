
    updateCart() = (line, quantity) => {
        fetch('/cart/change.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ quantity, line })
        }).then(response => response.json())
        .then(data => {
            $dispatch('cart-updated')
        })
        .catch((error)=> console.error('Error', error));
    }



AFRAME.registerComponent("markerhandler", {
    init: async function () {
        this.el.addEventListener('markerFound', () => {
            console.log('Marker is found.')
        })
        this.el.addEventListener('markerLost', () => {
            console.log('Marker is lost.')
        })
    },
    handleMarkerFound: function () {
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'flex'
        var ratingButton= document.getElementById('rating-button')
        var orderButton= document.getElementById('order-button')
        ratingButton.addEventListener('click', function(){
            swal({
                icon: 'warning',
                text: 'Thanks for the order..:)',
                timer: 2000,
                button: false

            })
        })
        orderButton.addEventListener('click', function(){
            swal({
                icon: 'https://i.imgur.com/4NZ6uLY.jpg',
                title: 'Order summary',
                text: 'Work in progress...'

            })
        })

    },
    handleMarkerLost: function () {
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    },
});
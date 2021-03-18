import React from 'react'

function Home() {
    return (
        <div>
            <div className="add-to-card">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.transparentpng.com/download/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home

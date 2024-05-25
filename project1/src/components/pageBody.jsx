function PageBody(){

    return (
        <main className="pageBody container">

            <div className="pageBody-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="pageBody-button">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="pageBody-footer">
                    <p>Also available on</p>
                    <div className="logos">
                        <img src="../../public/images/flipkart.png" alt="flipkart logo" />
                        <img src="../../public/images/amazon.png" alt="amazon logo" />
                    </div>
                </div>

            </div>

            <div className="pageBody-img">
                <img src="../../public/images/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    )
}

export default PageBody

export const CardHeader = () => {
  return (
    <>
    
    <div className="card-header">

        <h2 className="no-margin">Mountain retreat</h2>

        <p>Snowy Peaks, NSW, Australia</p>

        <div className="card-review">

            <div className="card-stars">

                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>

            </div> {/*.card-stars */}

            <p className="bold">5.0</p>

            <a href="#" className="card-link">38 reviews</a>

        </div> {/*.card-review */}

        <hr className="line-break"/>

    </div> {/*.card-header */}

    </>
  )
}

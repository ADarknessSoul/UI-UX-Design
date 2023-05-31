
export const CardHeader = ({info, id}) => {

  return (
    <>
    
    <div className="card-header">

        <h2 className="no-margin">{info.title}</h2>

        <p>{info.location}</p>

        <div className="card-review">

            <div className="card-stars">

                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>
                <img src="../../dist/images/star.svg" alt="star" width="15"/>

            </div> {/*.card-stars */}

            <p className="bold">{info.score}</p>

            <a href="#" className="card-link">{info.numReviews} reviews</a>

        </div> {/*.card-review */}

        <hr className="line-break"/>

    </div> {/*.card-header */}

    </>
  )
}

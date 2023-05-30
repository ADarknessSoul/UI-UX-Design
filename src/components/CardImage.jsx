
export const CardImage = ({url, id}) => {

    const imageContainer = document.getElementById(id);
    // console.log(`url(${url})`);
    console.log(imageContainer);
    imageContainer.style.backgroundImage = `url(${url})`;

  return (
    <>
    
    <div className="card-img" id={id}>

        <div className="img-arrow">

            <img src="../../dist/images/left-arrow.svg" alt="left arrow" width="30"/>

        </div>      

        <div className="img-number">

            <div className="number-container">

            <p className="number-text">1 / 8</p>

            </div>

        </div>  

    </div>  {/*.card-img */}

    </>
  )
}

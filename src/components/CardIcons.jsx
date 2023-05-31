
export const CardIcons = ({info, id}) => {

    const { iconsInfo } = info;

  return (
    <>
    
    <div className="card-icons">

        <div className="icons-container">

            <img src="../images/house.svg" alt="house" width="30" className="card-icon"/>
            <p>{iconsInfo.buildType}</p>  

        </div>  {/*.icons-container */}

        <div className="icons-container">

            <img src="../images/bed.svg" alt="house" width="30" className="card-icon"/>
            <p>{iconsInfo.numberOfBeds} beds</p>  

        </div> {/*.icons-container */}

        <div className="icons-container">

            <img src="../images/bath-tub.svg" alt="house" width="30" className="card-icon"/>
            <p>{iconsInfo.numberOfBaths} Baths</p>  

        </div> {/*.icons-container */}

        <div className="icons-container">


            <img src="../images/car.svg" alt="house" width="30" className="card-icon"/>
            <p>{iconsInfo.numberOfGarages} garage(s)</p>  

        </div> {/*.icons-container */}

    </div> {/*.card-icons */}

    <hr className="line-break"/>
    
    </>
  )
}

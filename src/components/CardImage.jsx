import { useEffect, useState } from "react"

export const CardImage = ({url, id}) => {

  useEffect(() => {
 
    const bgImage = document.getElementById(`${id}`);
    bgImage.style.backgroundImage = `url(${url})`

  }, [])
  

  return (
    <>
    
    <div className="card-img" id={id}>

        <div className="img-arrow">

            <img src="../images/left-arrow.svg" alt="left arrow" width="30"/>

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

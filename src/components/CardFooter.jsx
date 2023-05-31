
export const CardFooter = ({info, id}) => {
  return (
    <>
    
    <div className="margin-top-auto">

      <hr className="line-break"/>

      <div className="card-footer">

        <button className="footer-booknow">Book now</button>

        <p className="footer-text bold">${info.price} <span className="footer-subtext">/ night</span></p>

      </div>

    </div>


    
    </>
  )
}

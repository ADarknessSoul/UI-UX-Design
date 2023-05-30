import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import { CardIcons } from "./CardIcons"
import { CardImage } from "./CardImage"

export const Card = ({url, id}) => {

  return (
    <>
    
        <div className="card">

            <CardImage url={url} id={id}/>

            <div className="card-body">

               <CardHeader/> 

               <CardIcons/>

               <div className="card-description">

                    <p>Experience the wonders of nature as you hike through the snow-capped mountains and fish in the nearby river. This newly built cabin is perched high in the mountains with beautiful sees</p>

               </div>

            </div> {/*.card-body */}

            <CardFooter/>

        </div> {/*.card */}

           

    </>
  )
}

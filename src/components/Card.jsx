import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import { CardIcons } from "./CardIcons"
import { CardImage } from "./CardImage"

export const Card = ({url, id, info}) => {

  return (
    <>
    
        <div className="card">

            <CardImage url={url} id={id}/>

            <div className="card-body">

               <CardHeader info={info} id={id}/> 

               <CardIcons info={info} id={id}/>

               <div className="card-description">

                    <p>{info.description}</p>

               </div>

            </div> {/*.card-body */}

            <CardFooter info={info} id={id}/>

        </div> {/*.card */}

           

    </>
  )
}

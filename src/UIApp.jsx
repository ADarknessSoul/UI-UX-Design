import { Card } from "./components/Card"

export const UIApp = () => {
  return (
    <>
    
        <div className="container cards-container">

            <Card url="../dist/images/snow_hut.jpg" id="1"/>
            <Card url="../dist/images/hokkaido.jpg" id="2"/>
            <Card url="../dist/images/Paris.jpg" id="3"/>

        </div>

    </>
  )
}

import { Card } from "./components/Card"

export const UIApp = () => {

  const placeInfo = [

    {

      title: "Mountain retreat",
      location: "Snowy Peaks, NSW, Australia",
      score: 5,
      numReviews: 38,
      description: "Experience the wonders of nature as you hike through the snow-capped mountains and fish in the nearby river. This newly built cabin is perched high in the mountains with beautiful sees",
      url: "../dist/images/snow_hut.jpg",
      price: 299,

      iconsInfo: {

        buildType: "House",
        numberOfBeds: 2,
        numberOfBaths: 1,
        numberOfGarages: 1

      }

    },
    {

      title: "Serenity in hokkaido's paradise",
      location: "Hokkaido, Japan",
      score: 4.7,
      numReviews: 17,
      description: "Nestled amidst Hokkaido's natural beauty, this charming house offers a tranquil escape. Embrace the serene ambiance, unwind in the spacious rooms, and bask in the panoramic views. Experience the allure of Hokkaido from the comfort of your own enchanting retreat.",
      url: "../dist/images/hokkaido.jpg",
      price: 180,

      iconsInfo: {

        buildType: "House",
        numberOfBeds: 2,
        numberOfBaths: 2,
        numberOfGarages: 1

      }

    },
    {

      title: "Charming parisian abode",
      location: "Paris, France",
      score: 4,
      numReviews: 25,
      description: "Step into the heart of Paripp sian elegance with this charming abode. Discover the allure of the city as you stroll through its romantic streets. Immerse yourself in the vibrant culture and indulge in the enchanting views from this delightful Parisian retreat.",
      url: "../dist/images/Paris.jpg",
      price: 300,

      iconsInfo: {

        buildType: "House",
        numberOfBeds: 3,
        numberOfBaths: 1,
        numberOfGarages: 2

      }

    }

  ];


  return (
    <>
    
    <div className="container cards-container">
        {
          
          placeInfo.map((item, index) => (
            <Card key={index + 1} id={index + 1} url={placeInfo[index].url} info={placeInfo[index]}/>
          ))
        
        }
      </div>

    </>
  )
}

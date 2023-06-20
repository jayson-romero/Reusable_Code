import './App.css'
import Button from './components/button/button'
import Card from './components/card/card'

const cards = [
  {
  id: 1,
  title: 'Card Title 1',
  description: 'Card Description 1',
  imageUrl: "https://images.pexels.com/photos/2632670/pexels-photo-2632670.jpeg"
  },
{
  id: 2,
  title: 'Card Title 2',
  description: 'Card Description 1',
  imageUrl: "https://images.pexels.com/photos/2632670/pexels-photo-2632670.jpeg"
}
];




function App() {

 
  return (
   <> 
      <h6>Button</h6>
      <Button type="submit" title="CLICK"/>
      <h6 className='mt-[10px]'>Card</h6>
      <div className='flex flex-row gap-[10px]'>
      {cards.map((card) => (      
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />     
       ))
      }
       </div>
   
 
   </>
  )
}

export default App

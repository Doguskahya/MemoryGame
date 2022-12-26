import './AnimalCard.css'
export default function AnimalCard({animal, clickManage, backSide, disabled}){

  const clickedCard = () => {
    if(!disabled){
      clickManage(animal)
    }
  }
  
    return (
        <div className='animal'>
            <div className={backSide ? "backSide" : ""}>
              <img className='front' src={animal.src} alt='animal front'/>
              <img className='back' src='/img/card-back.png' alt='animal back' onClick={clickedCard}/>
            </div>
          </div>
    )
}
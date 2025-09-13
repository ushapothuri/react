import "./card.css"


function Card() {
    const CARD =
    {
        border: '2px solid',
        width: '200px',
        height: '300px',
        margin: '20px',
        padding: '20px',
        textAlign: 'centre',
    }
    const Name =
    {
        color: "red",
    }
    return (
        <div className={CARD}>
            <div className="image">
                 <img src="./image.jpg" alt="" />
            </div>
        
          
            <h2 className="Name">P.USHA</h2>
            <p>course:CSE</p>
            <p>Roll Number:548</p>
        </div>
    )

}

export default Card;
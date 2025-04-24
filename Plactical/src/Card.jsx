import img from './gramer.png' 

function Card(){

    return(

        <div className='card'>

            <img className='card-image' src= {img} alt="pfofile picture" width/>

            <h2 className='card-title'> IRAEL</h2>

            <p className='card-text'>The programming skills trainner</p>

        </div>
    );
}
export default Card
import DP from './assets/DP.jpg'

function Card() {
    return(
        <div className="card">
            <img className='dp' src= {DP} alt="Profile Picture" />
            <h2 className='dp_person'>Rishav Kumar</h2>
            <p className='paragraph-content'>I am a student, who is learning React</p>

        </div>
    );
}

export default Card
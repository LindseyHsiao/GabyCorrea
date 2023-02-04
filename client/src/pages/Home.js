import bwBarLift from '../assets/images/bwBarLift.jpg'

export default function Home() {
    return (
        <>
        <div id='home-page-img'>
        <img src={bwBarLift} alt='' className='max-w-full h-auto'></img>
        </div>
        <div className="bg-orange-50 h-40 w-auto">
            <p>Strengthen from the inside out</p>
        </div>
        
        </>
    )
}
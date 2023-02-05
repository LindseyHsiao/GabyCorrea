import bwBarLift from '../assets/images/bwBarLift.jpg'
import sand from '../assets/images/sand.jpg'

export default function Home() {
    return (
        <>
            <div id='home-page-img'>
                <img src={bwBarLift} alt='' className='max-w-full h-auto'></img>
            </div>

            <section id="strengthen" class="py-36 bg-orange-50">
                <div className="container mx-auto px-3">
                    <h2 className="text-4xl mb-6 font-bold text-center uppercase">
                        Strengthen from the inside out
                    </h2>
                    <p className="max-w-xs mx-auto text-center text-xl opacity-70 md:max-w-md italic">
                        Custom meal plans and workouts based on your needs
                    </p>
                </div>
            </section>

            <section id="contact-details" >
                <div className="section-container contact">
                    <div className="relative flex flex-col md:flex-row md:space-x-32">
                        {/* image */}
                        <div className="md:w-1/2">
                            <img src={sand} alt="sand" className="md:absolute top-0 right-[50%]" />
                        </div>
                        {/* items container */}
                        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                            {/* item 1 */}
                            <div>
                                <h4 className="uppercase text-center">get the app</h4>
                                
                            </div>
                            {/* item 2 */}
                            <div>
                                
                            <a href='#' className="max-w-md opacity-70 italic">access workouts</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}
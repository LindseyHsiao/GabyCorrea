import bwBarLift from '../assets/images/bwBarLift.jpg'
import sand from '../assets/images/sand.jpg'

export default function Home() {
    return (
        <>
            <div id='home-page-img'>
                <img src={bwBarLift} alt='' className='max-w-full h-auto'></img>
            </div>

            <section id="strengthen" className="py-36 bg-orange-50">
                <div className="container mx-auto px-3">
                    <h2 className="text-4xl mb-6 font-bold text-center uppercase">
                        Strengthen from the inside out
                    </h2>
                    <p className="max-w-xs mx-auto text-center text-xl opacity-70 md:max-w-md italic">
                        Custom meal plans and workouts based on your needs
                    </p>
                </div>
            </section>



            {/* <!-- Feature Box Section --> */}
            <section id="features" className="pb-32 bg-orange-50">
                <div className="relative container flex flex-col items-center px-6 mx-auto md:flex-row md:space-x-7">
                    {/* <!-- Horizontal Line --> */}
                    <div className="hidden absolute top-24 w-10/12 left-16 h-1 bg-black md:block"></div>
                    {/* <!-- Vertical Line --> */}
                    <div className="absolute w-1 left-1/2 h-full -ml-1 bg-black md:hidden"></div>
                    {/* <!-- Box 1 --> */}
                    <div className="relative flex flex-col p-6 space-y-6 bg-white rounded md:w-1/3">
                        {/* <!-- Image Positioning --> */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* <!-- Image container for background and center --> */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                                <img src="images/icon-brand-recognition.svg" alt="" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center uppercase md:text-left">
                            Nutrition
                        </h5>
                        <p className="text-center opacity-70 md:text-left">
                        Generic links don't mean a thing. Branded links help instill confidence in your concept.
                        </p>
                    </div>

                    {/* <!-- Box 2 --> */}
                    <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded md:mt-0 md:w-1/3">
                        {/* <!-- Image Positioning --> */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* <!-- Image container for background and center --> */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                                <img src="images/icon-detailed-records.svg" alt="" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center uppercase md:text-left">
                            Workouts
                        </h5>
                        <p className="text-center opacity-70 md:text-left">
                            Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>

                    {/* <!-- Box 3 --> */}
                    <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded md:mt-0 md:w-1/3">
                        {/* <!-- Image Positioning --> */}
                        <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                            {/* <!-- Image container for background and center --> */}
                            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-black">
                                <img src="images/icon-fully-customizable.svg" alt="" />
                            </div>
                        </div>
                        <h5 className="pt-6 text-xl font-bold text-center uppercase md:text-left">
                            Results
                        </h5>
                        <p className="text-center opacity-70 md:text-left">
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </section>

            
            <section id="contact-details">
        <div className="section-container contact">
            <div className="relative flex flex-col md:flex-row md:space-x-32">
                {/* image */}
                <div className="md:w-1/2">
                    <img src={sand} alt="Jan" className="md:absolute top-0 right-[40%]"/>
                </div>
                {/* items container */}
                <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-2/5 md:mb-10 md:text-left md:pl-36">
                    {/* item 1 */}
                    <div>
                        <h4>email</h4>
                        <a href='mailto:mail@harpbiz.com' className="max-w-md text-gray-700">mail@harpbiz.com</a>
                    </div>
                    {/* item 2 */}
                    <div>
                        <h4>phone</h4>
                        <p className="max-w-md text-gray-700">407-905-2501</p>
                    </div>
                    {/* item 3 */}
                    <div>
                        <h4>address</h4>
                        <p className="max-w-md text-gray-700">Jan Jennings <br />P.O. Box 680451 <br /> Orlando, FL 32868-0451</p>
                    </div>
                </div>
            </div>
        </div>
       </section>


        </>
    )
}
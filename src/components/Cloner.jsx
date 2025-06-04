import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Cloner() {

    return (
        <>
            <div className="p-6 text-center flex justify-around mx-20items-center text-stone-500 border-t  border-stone-500">
                <h1 className='hover:text-amber-500'>@ Developed by Hafeez Rafeeq</h1>

                <div>
                    <a
                        href="https://www.linkedin.com/in/your-profile-id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-500 transition-colors mx-4 duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>

                    <a
                        href="https://https://github.com/hafeezrafeeq031"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-500 transition duration-200 mx-4"
                    >
                          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61576188887654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-500 mx-4"
                    >
                        <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
                    </a>


                    <a
                        href="https://www.behance.net/hafeezrafeeq2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-amber-500 transition duration-200 mx-4"
                    >
                        <FontAwesomeIcon icon={faSquareBehance} size="2x" />
                    </a>


                </div>
            </div>
 
            <div className=' text-center flex justify-around items-center text-stone-800 bg-stone-400 lg:none md:none sm:hidden '>
                <h1>@ 2024 Solar Saver , All Rights Reserved.</h1><br />
                <h2>(Suitable for portfolio/personal site)</h2>
            </div>
        </>

    )

}

export default Cloner;
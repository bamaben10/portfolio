import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { 
    faAngular, 
    faCss3, 
    faGitAlt, 
    faHtml5, 
    faJsSquare, 
    faReact 
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a very ambitious software developer looking to improve and develop my skills even more.  When I'm not coding, I love hanging out at the beach, playing cornhole and chilling with my family.
                </p>
                <p>I'm quietly confident, naturally curious, and perpetually becoming the best software developer out there.
                </p>
                <p>If I need to define myself in one sentence, that would be a family man, sports fanatic, and have a passion for the stock market!!
                </p>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
                    </div>
                </div>
            </div>
           </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;
import { FaInstagram,FaTiktok } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
export const links = [
    {
        id:1,
        child:(
            <> 
            Instagram &nbsp;<FaInstagram size={30}/> 
            </>
        ),
        href:'https://www.instagram.com/iamluciag/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <> 
            Twitter X &nbsp; &nbsp;<FaXTwitter size={30}/> 
            </>
        ),
        href:'https://twitter.com/soyluciagomez',
        style:'rounded-mr-md'
    },
    {
        id:3,
        child:(
            <>
            TikTok &nbsp; &nbsp; &nbsp; &nbsp;<FaTiktok size={30}/>
            </>
        ),
        href:'https://www.tiktok.com/@iamluciag?_t=8ikt4oVVwOn&_r=1',
        style:'rounded-br-md'
    }
]
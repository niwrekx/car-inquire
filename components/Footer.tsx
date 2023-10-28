import Image from "next/image";
import Link from "next/link";
import {footerLinks} from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col text-gray-100 mt-5 border-gray-100 bg-sky-500 ">     
      <div className="max-width flex max-md-flex-col flex-wrap justify-between gap-25 sm:px-16 px-6 py-10 max-sm:flex-col">
        {/* img & copyright */}
        {/* <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo-ko.png" alt="logo" width={118} height={20} className="object-contain"/>
           
           <p className="text-base text-gray-700">All Rights Reserved ©</p>            
        </div> */}
        {/* navbar */}
        <div className="footer__links ">
          {footerLinks.map((link)=> (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item)=>(
                <Link 
                  key={item.title}  
                  href={item.url}  
                  className="text-gray-200"              
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>        
      {/* privacy policy */} 
      <div className="w-full flex justify-center items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 max-sm:text-sm text-gray-200" >
          <p className="max-sm:text-center">{`Copyright © ${year} NIWREKX. All Rights Reserved. `}</p>
            {/* <div className="footer__copyrights-link ">
                <Link href="/"className="text-gray-500" > 
                  Privacy Policy
                </Link>
                <Link href="/"className="text-gray-500" > 
                  Terms of Use
                </Link>
            </div> */}
      </div>
    </footer>
  )
}

export default Footer;
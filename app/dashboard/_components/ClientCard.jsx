// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Facebook, Github, Instagram, Linkedin, X } from 'lucide-react';

export default function Card() {
  const peopleList = [
    {
      id: 1,
      name: 'Anila Davis',
      image: '/AnilaDavis.jpg',
      Desc: 'Club Facilitator',
      links: {
        instagram: '',
        linkedin: ''
      }
    },
    {
      id: 2,
      name: 'Vivek Tarnallya',
      image: '/VivekT.jpg',
      Desc: 'Student Coordinator',
      links: {
        instagram: 'https://www.instagram.com/vivektarnallya',
        linkedin: 'https://www.linkedin.com/in/vivek-tarnallya-981684259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '
      }
    },
    {
      id: 3,
      name: 'Nikhil George Mathew',
      image: '/Nikhil.jpg',
      Desc: 'Student Coordinator',
      links: {
        instagram: 'https://www.instagram.com/nikhilnithinmathew?igsh=cThqY3c4emdpbjlp',
        linkedin: 'https://www.linkedin.com/in/nikhil-george-mathew-560615246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '
      }
    }
  ];

  return (
    <div className="card-container grid grid-cols-1 gap-8">
      {peopleList.map(person => (
        <div key={person.id} className="card-client bg-gray-700 w-[250px] h-[300px] p-6 md:w-[380px] md:h-[450px] border-4 border-white shadow-[0_6px_10px_#212121] rounded-lg text-center text-white font-poppins transition-transform duration-300 hover:-translate-y-2">
          <div className="user-picture overflow-hidden object-cover mt-8 w-20 md:w-[200px] md:h-[200px] h-20 border-4 border-white rounded-full flex justify-center items-center mx-auto">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
          </div>
          <p className="name-client m-0 mt-5 font-semibold text-lg">
            {person.name}
            <span className="block font-light text-base">{person.Desc}</span>
          </p>
          <div className="social-media relative flex justify-center mt-5">
            <a href={person.links.instagram} target="_blank" className="relative mx-2 z-20 text-pink-600 bg-white h-fit rounded-md border-0">
              <Instagram className="w-5 h-full" />
            </a>
            {/* <a href={person.links.facebook} target="_blank" className="relative mx-2 z-20 bg-blue-600 text-white h-fit rounded-md">
              <Facebook className="w-5 h-full" />
            </a> */}
            <a href={person.links.linkedin} target="_blank" className="relative mx-2 z-20 bg-blue-700 text-white h-fit rounded-md">
              <Linkedin className="w-5 h-full" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

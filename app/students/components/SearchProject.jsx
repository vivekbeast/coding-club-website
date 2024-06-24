import React, { useEffect, useState } from 'react';
import LottieAnimation from './LottieAnimation';
import { useRouter } from 'next/navigation';
import LottieAnima from '@/app/LottieAnima';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PenBox, Plus } from 'lucide-react';

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + ' .....';
  }
  return text;
}

function SearchProject({ projectData }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (projectData) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [projectData]);

  const isValidURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(url);
  };

  const navigateToProject = (projectLink) => {
    if (isValidURL(projectLink)) {
      window.location.href = projectLink;
    } else {
      console.warn('Invalid project link:', projectLink);
    }
  };

  return (
    <section className='w-full h-full flex justify-center items-center p-6'>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <LottieAnima />
        </div>
      ) : projectData ? (
        <div className='container mx-auto p-4'>
          <div className=' overflow-hidden md:grid lg:grid xl:grid  gap-6 p-4 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {projectData.map((project, index) => (
              <div key={index} className="relative bg-zinc-300 mb-8 flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-2 h-[160px] text-center flex items-center justify-center text-lg w-full md:w-[95%] shadow-lg overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-800/40 border border-black bg-zinc-800">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt='ErrorNetwork' className='w-full h-full object-cover' />
                  ) : (
                    <div className='text-center object-cover bg-gradient-to-r from-blue-100 to-blue-300 w-40 rounded-md py-2 text-gray-950'>
                      <h2 className='bebas-neue-regular font-thin text-xl'>No Image Uploaded</h2>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block overflow-hidden font-sans text-xl font-semibold leading-snug tracking-normal text-black antialiased">
                    {project.Project_Name}
                  </h5>
                  <p className="block font-sans text-sm overflow-hidden font-medium leading-relaxed text-inherit antialiased">
                    {truncateText(project.Description, 6)}
                  </p>
                </div>
                <div className="p-6 pt-0 text-left">
                  <AlertDialog>
                    <AlertDialogTrigger className="select-none rounded-lg bg-black mr-0 py-2 px-4 font-semibold text-center border-[2px] border-gray-900 align-middle font-sans text-xs uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Read More</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Description</AlertDialogTitle>
                        <AlertDialogDescription>
                          {project.Description}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <button data-ripple-light="true" type="button" onClick={() => navigateToProject(project.Link)} className="select-none rounded-lg bg-white ml-4 py-2 px-4 text-center border-[2px] border-blue-500 align-middle font-sans text-sm font-semibold uppercase text-blue-500 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <LottieAnimation />
          <button onClick={() => { router.replace('#CREATEPRO') }} className="bg-blue-500 hover:bg-blue-700 mt-5 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Create a New Project
          </button>
        </div>
      )}
      <div className='CART-POPUP fixed z-40 bottom-6 right-8 flex items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className='h-[49px] w-[49px] bg-blue-600 rounded-full'><Plus className='h-full w-full text-black' /></DropdownMenuTrigger>
          <DropdownMenuContent className='right-8 w-[200px] h-[100px]'>
            <DropdownMenuLabel>Hello!!</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-lg gap-2' onClick={() => { router.replace('#CREATEPRO') }}><PenBox /> <h1>Create Project</h1></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}

export default SearchProject;

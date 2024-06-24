"use client";
import React, { useState } from 'react';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { app, storage } from '@/config/firebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Image, LinkIcon } from 'lucide-react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function NewProject() {
  const [name, setName] = useState('');
  const [framework, setFramework] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLink] = useState('');
  const [imageUpload ,setImageUpload] = useState(null);

  const { user } = useKindeBrowserClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    let imageUrl = '';
    if (imageUpload) {
      // Upload the image file to Firebase Storage
      const imageRef = ref(storage, `images/${user.email}/${uuid}.jpg`);
      await uploadBytes(imageRef, imageUpload);
      imageUrl = await getDownloadURL(imageRef);
      console.log("Image uploaded and URL retrieved:", imageUrl);
    }
    
    const projectDatas = {
      Project_Name: name,
      Tools_used: framework,
      Description: description,
      Link: links,
      UUID: uuid,
      userEmail: user?.email,
      createdAt: serverTimestamp(),
      imageUrl: imageUrl, // Store the image URL in the project data
    };

    try {
      // Convert project data to JSON
      const projectJson = JSON.stringify(projectDatas);

      // Create a blob from the JSON string
      const projectBlob = new Blob([projectJson], { type: 'application/json' });

      // Define the file reference in storage
      const fileRef = ref(storage, `projects/${user.email}/${uuid}.json`);

      // Upload the JSON file to storage
      await uploadBytes(fileRef, projectBlob);
      console.log(imageUpload);
      console.log("Project details uploaded");

      // if (imageUpload) {
      //   const imageRef = ref(storage, `images/${user.email}/${uuid}`);
      //   await uploadBytes(fileRef);
      //   alert("Image Uploaded");
      // }
      
      // Reset form fields
      setName('');
      setFramework('');
      setDescription('');
      setLink('');
      setImageUpload(null);
    } catch (error) {
      console.error('Error uploading project data: ', error);
    }
  };
  // bg-gradient-to-r from-blue-100 to-blue-300
  return (
    <section id='CREATEPRO' className='w-[100%] justify-center  items-center flex md:p-6 h-screen'>
      <div className="md:w-[450px] bg-slate-300 w-[300px]  shadow-xl flex flex-col justify-center border-2 rounded-lg  p-6 transform transition-transform duration-300 hover:scale-105">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black mb-2">Create Project</h2>
          <p className="text-black">Specify details about your project here!</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Name of your project"
                />
              </div>
              <div>
                <label htmlFor="framework" className="block text-sm font-medium text-black">Framework / Languages Used *</label>
                <select
                  id="framework"
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  className="mt-1 focus:ring-blue-600 font-sans focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                >
                  <option value="">Select</option>
                  <option value="java">Java</option>
                  <option value="react">React.js</option>
                  <option value="html-css-js">HTML, CSS & JS</option>
                  <option value="python">Python3</option>
                  <option value="c-cpp">C/C++</option>
                  <option value="next-js">Next.js</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-black">Description *</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Provide a brief description..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="link" className="text-sm font-medium text-black flex gap-1"><h2>Project Link</h2><LinkIcon className=' h-4 self-center' /> *</label>
                <input
                  type="text"
                  id="links"
                  value={links}
                  onChange={(e) => setLink(e.target.value)}
                  className="mt-1 focus:ring-gray-600 focus:border-gray-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Link to Github / Site / Google Drive "
                />
              </div>
              <div className=' mt-2'>
                <label htmlFor="description" className="text-sm font-medium text-black flex gap-1"><h2>Screenshots</h2> <Image className=' h-4 w-4 self-center' /> *</label>
                <input type="file" className="mt-1 focus:ring-gray-600 focus:border-gray-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  accept="image/*" id="imageUpload" onChange={(event) => { setImageUpload(event.target.files[0]) }} name="imageUpload" />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={()=>{ setName('');
                  setFramework('');
                  setDescription('');
                  setLink('');
      setImageUpload(null);
                }}
                className="mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transform transition-transform duration-300 hover:scale-110"
              >Cancel</button>
              <button
                type="submit"
                disabled={!name || !framework || !description || !links }
                className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                  (!name || !framework || !description)
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-110'
                }`}
              >
                Deploy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewProject;

import React, { useEffect, useState } from 'react'
import { images } from './Component/Firebase'
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'

function ImageFirebase() {
  const [img, setImg] = useState(null);
  const [imgId, setImgId] = useState('');
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
       const fetchImages = async () => {
            try {
                 const images = await listAll(ref(images));
                 const urls = await Promise.all(images.items.map(getDownloadURL));
                 setImgUrl(urls);
            } catch (error) {
                 console.error('Error downloading images', error);
            }
       };
       fetchImages();
  }, []);

  const handleUpload = async () => {
       try {
            if (img && imgId) {
                 const imgRef = ref(images, imgId);
                 await deleteObject(imgRef);
            }

            const imgRef1 = ref(images, v4());
            await uploadBytes(imgRef1, img);
            const url = await getDownloadURL(imgRef1);
            setImgUrl(prevUrls => [...prevUrls, url]);
       } catch (error) {
            console.error('Error uploading image', error);
       }
  };

  const deleteData = async id => {
       try {
            const imgRef = ref(images, id);
            await deleteObject(imgRef);
            setImgUrl(prevUrls => prevUrls.filter(url => url !== id));
       } catch (error) {
            console.error('Error deleting image', error);
       }
  };

  const editData = id => {
       setImgId(id);
  };

  return (
       <div>
            <input type="file" name="img" id="img" onChange={e => setImg(e.target.files[0])} className="mt-3" /><br />
            <button onClick={handleUpload} className="btn btn-info fw-bold px-2 mx-2 mt-5">Upload</button>

            <table className="h-auto w-auto m-auto mt-5">
                 <thead>
                      <tr className="border border-primary">
                           <td className="border border-primary m-2 p-2 fw-bold">ID</td>
                           <td className="border border-primary m-2 p-2 fw-bold">Image</td>
                           <td className="border border-primary m-2 p-2 fw-bold">Action</td>
                      </tr>
                 </thead>
                 <tbody>
                      {imgUrl.map((url, index) => (
                           <tr key={index} className="border border-primary">
                                <td className="border border-primary">{index + 1}</td>
                                <td className="border border-primary m-2 mx-2">
                                     <img src={url} alt={`img-${index}`} width={150} />
                                </td>
                                <td className="border border-primary">
                                     <button onClick={() => editData(url)} className="btn btn-primary fw-bold mx-2">Edit</button>
                                     <button onClick={() => deleteData(url)} className="btn btn-danger fw-bold mx-2">Delete</button>
                                </td>
                           </tr>
                      ))}
                 </tbody>
            </table>
       </div>
  );
}



export default ImageFirebase;

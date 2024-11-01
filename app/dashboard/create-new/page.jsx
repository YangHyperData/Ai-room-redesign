"use client"
import React, { useState } from 'react'
import ImageSelection from './_component/ImageSelection'
import RoomType from './_component/RoomType'
import DesignType from './_component/DesignType'
import AdditonReq from './_component/AdditonReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseConfig'

function CreateNew() {
  const [formdata, setFormdata] = useState([]);
  const onHandleInputChange = (value, fieldName) => {
    setFormdata(prev => ({
      ...prev,
      [fieldName]: value
    }))

    console.log(formdata)
  }
  const GenerateAiIamge = async () => {
    const rawImageUrl= await SaveRawImageToFirebase();
    const result = await axios.post('/api/redesign-room', {
      imageUrl:rawImageUrl,
      roomType:formdata?.roomType,
      designType:formdata?.designType,
      additionalReq:formdata?.additionalReq
    });
    console.log(result);
  }

  const SaveRawImageToFirebase = async() => {
      const fileName = Date.now() + "_raw.png";
      const imageRef = ref(storage,'room-redesign/' + fileName)

      await uploadBytes(imageRef,formdata.image).then(resp=>{
        console.log("File uploaded...")
      })

      const downloadUrl = await getDownloadURL(imageRef)
      console.log(downloadUrl)
      return downloadUrl;
  }
  return (
    <div>
      <h2 className='font-bold text-3xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
      <p className='text-center text-gray-500'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimages your invironment</p>

      <div className='grid grid-cols-1 md:grid-cols-2 
       mt-10 gap-10'>
        {/* Image Section */}
        <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />
        {/* Form Input Section */}
        <div>
          {/* Room type */}
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
          {/* Design Type */}
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />
          {/* Additional Requirement */}
          <AdditonReq additionalReqirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />
          {/* Button To Generate Image */}
          <Button className="mt-5 w-full" onClick={GenerateAiIamge}>Generate</Button>
          <p className='text-sm text-gray-400'>NOTE: 1 Credit will use to redesign your room</p>
        </div>
      </div>
    </div>
  )
}

export default CreateNew

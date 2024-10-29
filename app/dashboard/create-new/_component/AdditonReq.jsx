import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditonReq({additionalReqirementInput}) {
  return (
    <div className='mt-5'>
      <label className='text-gray-400'>Enter Additional Requirement (Optional)</label>
      <Textarea className="mt-2" onChange={(e) => additionalReqirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditonReq

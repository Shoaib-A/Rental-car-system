"use client"
import { ShowMoreProps } from '@types'
import { updateSearchParams } from '@utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton'

const ShowMore = ({pageNumber , isNext } : ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber+1) *10;
        const newPathName = updateSearchParams("limit" ,String( newLimit) );

        router.push(newPathName);
    }
  return (
    <div className='w-ful flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton title='Show more' btnType='button' containerStyle='bg-primary-blue text-white rounded-full ' 
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore
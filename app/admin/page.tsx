"use client"
import React from 'react'
import AuthForm from './components/authform/AuthForm'
import { useActionStore } from './store/useAction';
import Upload from './components/Upload/Upload';

export default function page() {
  const { isOpenNotificationBar } = useActionStore();
  return (
    <main className='w-full ml-30 mt-20 flex justify-center min-h-screen p-5'>
      <Upload />
    </main>
  )
}

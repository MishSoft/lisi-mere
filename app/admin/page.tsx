"use client"
import React from 'react'
import AuthForm from './components/authform/AuthForm'
import { useActionStore } from './store/useAction';
import Statistic from './components/Statistic/Statistic';

export default function page() {
  const { isOpenNotificationBar } = useActionStore();
  return (
    <main className='w-full mt-20 min-h-screen p-5'>
     <Statistic/>
    </main>
  )
}

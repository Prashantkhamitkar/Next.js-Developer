import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profile from "../../public/images/profile/profile-removebg-preview (2).png"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
const AnimatedNumbers=({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInView=useInView(ref,{once:true});
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }

    },[isInView,value,motionValue])
    useEffect(()=>{
        springValue.on("change",(latest)=>{
           if(ref.current&&latest.toFixed(0)<=value){
            ref.current.textContent=latest.toFixed(0);
           } 
        })
    },[springValue,value])

    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
        <title>Prashant | About Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Welcome To My Creative Space!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 '>About&nbsp;Me</h2>
            <p className='font-medium'>
            I have recently completed my Post Graduation Diploma in Advance Computing (PG-DAC) training at the Sunbeam Institute of Information Technology, Pune.
            </p>
            <p className='font-medium my-4'>
            Throughout this program, I've acquired knowledge in several technologies, including the MySQL database, Data Structures and Algorithms, Cloud Computing, DevOps, and programming languages such as Java, JavaScript, and C#.
            </p>
            <p className='font-medium'> I've also explored frameworks like Node.js, React, Spring Boot, and .NET, all in a short period with a strong understanding of these concepts.</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'></div>
                <Image src={profile} alt="Prashant's Pic" className='w-full h-auto rounded-2xl'/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={5}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={3}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Frameworks</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={10}/>+</span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Skills</h2>
                </div>
            </div>
        </div>
        </Layout>
    </main>

    </>
  )
}

export default about
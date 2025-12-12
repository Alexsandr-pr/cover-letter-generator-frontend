import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Join the Waitlist — Get Early Access to the AI Cover Letter Generator'
}

export default async function HomePage() {

    return (
        <div className="">
            <Header />
            <main className='mt-[59px] sm:mt-[74px] md:mt-[88px]'>
                <section className="pt-14 pb-20 lg:py-24 h-dvh xl:py-[140px] bg-primary">
                    <div className="md:container flex flex-col gap-10 items-center justify-center">
                        <Title className='text-center px-5 md:px-0 text-white max-w-[600px]' variant="h1">
                            Join the waitlist
                        </Title>
                        <div className="max-w-2xl w-full mx-auto bg-white md:rounded-lg p-6 md:p-10">
                            <form action="#" className='flex flex-col gap-4'>
                                <input className='w-full border border-gray-500 rounded-lg p-4' type="email" placeholder='Email' />
                                <Button type="submit">
                                    Join the waitlist
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { LOGO_TEXT } from '@/constants/logo';
import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
    title: 'AI Cover Letter Generator — Write Winning Upwork Proposals in Seconds'
}

export default async function HomePage() {

    return (
        <div className="">
            <Header />
            <main className="mt-[59px] sm:mt-[74px] md:mt-[88px]">
                <section className="pt-14 pb-20 lg:py-24 xl:py-[140px] bg-primary">
                    <div className="container flex flex-col lg:flex-row items-center lg:gap-10 justify-between">
                        <div className="">
                            <Title className='text-center lg:text-left text-white mb-6 max-w-[780px]' variant="h1">
                                Получай больше заказов на Upwork с умными Cover Letter
                            </Title>
                            <Text className='text-center lg:text-left text-white mb-4 md:mb-6 lg:mb-14 mx-auto lg:mx-0 max-w-[580px]'>
                                Генерируй персонализированные письма, которые цепляют клиентов и выделяют тебя среди конкурентов. Быстро, просто и эффективно с {LOGO_TEXT}.
                            </Text>
                            <Button href="/waitlist" variant="secondary" className='hidden lg:flex'>
                                Start writing for free
                            </Button>
                        </div>
                        <div className="w-full sm:max-w-[460px] lg:max-w-[460px] lg:min-w-[460px] lg:h-[460px] xl:min-w-[549px] xl:h-[549px] bg-white rounded-lg overflow-hidden">
                            <Image className='w-full h-full object-cover' src="/assets/images/hero.png" alt="Cover Letter" width={549} height={549} />
                        </div>
                        <Button href="/waitlist" variant="secondary" className='flex mt-8 lg:hidden'>
                            Start writing for free
                        </Button>
                    </div>
                </section>
                <section className='pt-20 lg:pt-24 xl:pt-[140px] pb-10 md:pb-[50px]'>
                    <div className="container">
                        <div className="flex flex-col lg:flex-row items-center lg:gap-30 justify-between">
                            <div className="w-full lg:w-1/2">
                                <Title className='text-center lg:text-left text-black mx-auto lg:mx-0 mb-4 md:mb-6 max-w-[580px]' variant="h2">
                                    Создавай письма, которые выделяются
                                </Title>
                                <Text className='text-center lg:text-left text-black mb-6 lg:mb-14 mx-auto lg:mx-0 max-w-[580px]'>
                                    {LOGO_TEXT} помогает писать персонализированные cover letter, точно подстраиваясь под требования вакансии. Произведи впечатление на заказчиков и увеличь свои шансы получить проект.
                                </Text>
                                <Button href="/waitlist" className='hidden lg:flex'>
                                    Get Started
                                </Button>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image
                                    className='max-w-full  mx-auto lg:mx-0  h-full object-cover'
                                    src="/assets/images/create-cover-letters.png"
                                    alt="Create Cover Letters"
                                    width={748}
                                    height={547}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pb-20 lg:pt-24 xl:pb-[140px] md:pt-[50px] '>
                    <div className="container">
                        <div className="flex border-t border-primary/30 pt-14 md:pt-[50px] flex-col-reverse lg:flex-row items-center lg:gap-30">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    className='max-w-full  mx-auto lg:mx-0  h-full object-cover'
                                    src="/assets/images/work-smarter.png"
                                    alt="Work Smarter"
                                    width={561}
                                    height={561}
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Title className='text-center  lg:text-left text-black mx-auto lg:mx-0 mb-4 md:mb-6 max-w-[580px]' variant="h2">
                                    Работай умнее, откликайся быстрее
                                </Title>
                                <Text className='text-center lg:text-left text-black mb-6 lg:mb-14 mx-auto lg:mx-0 max-w-[748px]'>
                                    Хватит тратить время на однотипные письма. UpCoverlyAI автоматизирует отклики, чтобы ты мог сосредоточиться на поиске лучших заказов и получать больше проектов.
                                </Text>
                                <Button href="/waitlist" className='hidden lg:flex'>
                                    Try it now
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-20 lg:py-24 xl:py-[140px] bg-primary'>
                    <div className="container">
                        <Title className='text-center text-white mb-4 md:mb-6 mx-auto max-w-[600px]' variant="h2">
                            Пиши где угодно и когда угодно
                        </Title>
                        <Text className='text-center text-white mb-6 lg:mb-14 mx-auto max-w-[645px]'>
                            Используй {LOGO_TEXT} с любого устройства и создавай эффективные письма в любой момент. Будь продуктивным дома, в дороге или в любимом кафе.
                        </Text>
                        <Button href="/waitlist" variant="secondary" className='mx-auto'>
                            Попробовать бесплатно
                        </Button>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
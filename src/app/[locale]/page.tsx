import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import Image from 'next/image';

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
                                Генерируй персонализированные письма, которые цепляют клиентов и выделяют тебя среди конкурентов. Быстро, просто и эффективно с UpCoverlyAI.
                            </Text>
                            <Button variant="secondary" className='hidden lg:flex'>
                                Start writing for free
                            </Button>
                        </div>
                        <div className="w-full sm:max-w-[460px] lg:max-w-[460px] lg:min-w-[460px] lg:h-[460px] xl:min-w-[549px] xl:h-[549px] bg-white rounded-lg overflow-hidden">
                            <Image className='w-full h-full object-cover' src="/assets/images/hero.png" alt="Cover Letter" width={549} height={549} />
                        </div>
                        <Button variant="secondary" className='flex mt-8 lg:hidden'>
                            Start writing for free
                        </Button>
                    </div>
                </section>
                <section className='pt-20 lg:pt-24 xl:pt-[140px] pb-10 md:pb-[50px]'>
                    <div className="container">
                        <div className="flex flex-col lg:flex-row items-center lg:gap-10 justify-between">
                            <div className="max-w-[692px]">
                                <Title className='text-center lg:text-left text-black mb-4 md:mb-6 max-w-[580px]' variant="h2">
                                    Создавай письма, которые выделяются
                                </Title>
                                <Text className='text-center lg:text-left text-black mb-6 lg:mb-14 mx-auto lg:mx-0 max-w-[580px]'>
                                    UpCoverlyAI помогает писать персонализированные cover letter, точно подстраиваясь под требования вакансии. Произведи впечатление на заказчиков и увеличь свои шансы получить проект.
                                </Text>
                                <Button className='hidden lg:flex'>
                                    Get Started
                                </Button>
                            </div>
                            <div className="max-w-[748px]">
                                <Image
                                    className='max-w-full h-full object-cover'
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
                        <div className="flex border-t border-primary/30 pt-14 md:pt-[50px] flex-col-reverse lg:flex-row items-center lg:gap-[100px]">
                            <div className="max-w-[661px]">
                                <Image
                                    className='max-w-full h-full object-cover'
                                    src="/assets/images/work-smarter.png"
                                    alt="Work Smarter"
                                    width={661}
                                    height={661}
                                />
                            </div>
                            <div className="max-w-[719px]">
                                <Title className='text-center lg:text-left text-black mb-4 md:mb-6 max-w-[580px]' variant="h2">
                                    Работай умнее, откликайся быстрее
                                </Title>
                                <Text className='text-center lg:text-left text-black mb-6 lg:mb-14 mx-auto lg:mx-0 max-w-[580px]'>
                                    Хватит тратить время на однотипные письма. UpCoverlyAI автоматизирует отклики, чтобы ты мог сосредоточиться на поиске лучших заказов и получать больше проектов.
                                </Text>
                                <Button className='hidden lg:flex'>
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
                            Используй UpCoverlyAI с любого устройства и создавай эффективные письма в любой момент. Будь продуктивным дома, в дороге или в любимом кафе.
                        </Text>
                        <Button variant="secondary" className='mx-auto'>
                            Попробовать бесплатно
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}
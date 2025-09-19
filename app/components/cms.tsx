import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
    const cms = [
        {
            src: '/icons/tailwindcss.svg',
            name: 'Tailwind CSS',
        },
        // Diğer ikonları da aynı şekilde ekleyebilirsin:
        // {
        //     src: '/icons/nextjs.svg',
        //     name: 'Next.js',
        // },
        // {
        //     src: '/icons/remix.svg',
        //     name: 'Remix',
        // },
        // {
        //     src: '/icons/shadcn.svg',
        //     name: 'shadcn/ui',
        // },
        // {
        //     src: '/icons/supercharged.svg',
        //     name: 'Supercharged',
        // },
    ]

    return (
        <div className='mx-5'>
            <p className='mb-8 text-center text-sm font-medium text-muted-foreground'>
                Eren Akdeniz tarafından TypeScript, React, TSX, Next.js, Tailwind CSS ve shadcn/ui kullanılarak geliştirildi.
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14'>
                {cms.map((item) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger
                                    aria-label={item.name}
                                    className='cursor-default flex items-center justify-center'
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className='h-15 w-15'
                                    />
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Cms
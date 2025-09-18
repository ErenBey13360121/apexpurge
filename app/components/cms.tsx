import React from 'react'
// import Nextjs from '~/components/icons/nextjs'
// import Remix from '~/components/icons/remixlogo'
// import Shadcn from '~/components/icons/shadcn'
// import Supercharged from '~/components/icons/supercharged'
// import Tailwindcss from '~/components/icons/tailwindcss'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
    const cms = [
        // {
        //     component: <Tailwindcss height={60} width={60} />,
        //     name: 'Tailwind CSS',
        // },
        // {
        //     component: <Nextjs height={60} width={60} />,
        //     name: 'Next.js',
        // },
        // {
        //     component: <Remix height={60} width={60} />,
        //     name: 'Remix',
        // },
        // {
        //     component: <Shadcn height={60} width={60} />,
        //     name: 'shadcn/ui',
        // },
        // {
        //     component: <Supercharged height={60} width={60} />,
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
                                    {item.component}
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
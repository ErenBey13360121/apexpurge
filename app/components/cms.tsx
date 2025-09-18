import React from 'react'
// import Drupal from '~/components/icons/drupal'
// import Framer from '~/components/icons/framer'
// import Joomla from '~/components/icons/joomla'
// import Notion from '~/components/icons/notion'
// import Sanity from '~/components/icons/sanity'
// import Storyblok from '~/components/icons/storyblok'
// import Strapi from '~/components/icons/strapi'
// import Typedream from '~/components/icons/typedream'
// import Wordpress from '~/components/icons/wordpress'
import Nextjs from '~/components/icons/nextjs'
import Remix from '~/components/icons/remixlogo'
import Shadcn from '~/components/icons/shadcn'
import Supercharged from '~/components/icons/supercharged'
import Tailwindcss from '~/components/icons/tailwindcss'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
    const cms = [
        {
            component: <Tailwindcss height={42} width={42} />,
            name: 'Tailwind CSS',
        },
        {
            component: <Nextjs height={42} width={42} />,
            name: 'Next.js',
        },
        {
            component: <Remix height={42} width={42} />,
            name: 'Remix',
        },
        {
            component: <Shadcn height={42} width={42} />,
            name: 'shadcn/ui',
        },
        {
            component: <Supercharged height={42} width={42} />,
            name: 'Supercharged',
        },
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
                                    className='cursor-default'
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
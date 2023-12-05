import { BTN_SOUND, IC_EN, IC_TH } from '@/assets'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Bar() {
    return (
        <Box
            sx={{

                position: 'fixed',
                top: '0.75rem !important',
                right: '0.75rem !important',
                zIndex: '1000',
            }}
        >
            <Box className="flex flex-row items-center gap-2">
                <button

                >
                    <Image
                        src={IC_TH.src}
                        width={16}
                        height={16}
                        alt='IC_TH'
                        className='h-8 w-auto object-contain'

                    />
                </button>
                <Box
                    className="h-4 w-[3px] "
                    sx={{
                        backgroundColor: '#000 !important',
                    }}
                >

                </Box>
                <button

                >
                    <Image
                        src={IC_EN.src}
                        width={16}
                        height={16}
                        alt='IC_EN'
                        className='h-8 w-auto object-contain'

                    />
                </button>
                <Box
                    className="h-4 w-[3px] "
                    sx={{
                        backgroundColor: '#000 !important',
                    }}
                >

                </Box>
                <button

                >
                    <Image
                        src={BTN_SOUND.src}
                        width={16}
                        height={16}
                        alt='BTN_SOUND'
                        className='h-8 w-auto object-contain'

                    />
                </button>
            </Box>
        </Box>
    )
}


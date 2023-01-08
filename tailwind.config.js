/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "blue": "#5E46F8",
            "purple": "#C03EFE",
            "black-BG": "#0F0817",
            "white": "#FAFAFA",
            "gray-icon": "#B8B8B8",
            "gray-A": "#BBB8C2",
            "gray-B": "#6B7280",
            "black-box": "#28242D",
            "yellow": "#FFD600",
            "red": "#EB5757",
            "green": "#219653",
            "violet": "#310E58",
            "violet-light": "#561F94",
            "transparent": "transparent",
            "border-gradiant-1": "rgb(94,70,248)",
            "border-gradiant-2": "rgba(192,62,254,1)",
            "bg-gradiant-1": "rgba(192,62,254,0.1)",
            "bg-gradiant-2": "rgba(94,70,248,0.1)",
            "card-time": "rgba(21, 16, 31, 0.4)",
            "shimmer-bg": "rgb(110 107 161 / 11%)",
            "support-background": "#0F0817",
            "closed-ticket": "rgba(235, 87, 87, 0.2)",
            "open-ticket": "rgba(33, 150, 83, 0.2)",
            "show-ticket-detail-bg": "rgba(94, 70, 248, 0.3)",
            "player-control-bg": "rgba(15, 8, 23, 0.2)",
            "show-ticket-detail-bg": "rgba(94, 70, 248, 0.3)",
            "about-us-border": "rgba(250, 250, 250, 0.15)",
            "popular-artist-bg":"rgba(0, 0, 0, 0.3)"
        },
        extend: {
            fontFamily: {
                iranSans: ["iransansXV"],
            },
            screens: {
                "sm-500": "500px",
            },
            backgroundImage: {
                'login-svg': "url('../../components/')",
                "svg-gradient": "linear-gradient(106.01deg, #5E46F8 -13.47%, #C03EFE 66.55%, #C03EFE 108.85%)",
                "svg-gradient2": " linear-gradient(179.51deg, rgba(15, 8, 23, 0) 0.44%, rgba(15, 8, 23, 0.64) 68.98%, #0F0817 99.57%)",
                "login-gradient": " linear-gradient(106.01deg, rgba(94, 70, 248, 0.1) -13.47%, rgba(192, 62, 254, 0.1) 108.85%)",
                "shimmer-gradient": "linear-gradient( 90deg,    transparent,rgba(255,255,255,0.1),transparent)",
                'getOtpBoxBackground': "url(\"data:image/svg+xml,%3Csvg width='296' height='88' viewBox='0 0 296 88' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='295.5' y='87.5' width='295' height='87' rx='9.5' transform='rotate(-180 295.5 87.5)' fill='url(%23paint0_linear_109_12)' fill-opacity='0.1' stroke='url(%23paint1_linear_109_12)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_109_12' x1='220.631' y1='112.948' x2='461.89' y2='345.764' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_109_12' x1='220.631' y1='112.948' x2='461.89' y2='345.764' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
                'edit-phone-number-box-background': "url(\"data:image/svg+xml,%3Csvg width='296' height='88' viewBox='0 0 296 88' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='295.5' y='87.5' width='295' height='87' rx='9.5' transform='rotate(-180 295.5 87.5)' fill='url(%23paint0_linear_109_12)' fill-opacity='0.1' stroke='url(%23paint1_linear_109_12)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_109_12' x1='220.631' y1='112.948' x2='461.89' y2='345.764' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_109_12' x1='220.631' y1='112.948' x2='461.89' y2='345.764' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
                "manage-active-devices-box-background": " url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 346 114' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='346' height='184' rx='15' fill='url(%23paint0_linear_1_58)' fill-opacity='0.1'/%3E%3Crect x='0.5' y='0.5' width='345' height='113' rx='14.5' stroke='url(%23paint1_linear_1_58)' stroke-opacity='0.5'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_58' x1='326.444' y1='-4.04733' x2='74.1387' y2='194.121' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FAFAFA'/%3E%3Cstop offset='1' stop-color='%23FAFAFA' stop-opacity='0.15'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_58' x1='329.452' y1='-6.21253e-06' x2='57.0704' y2='202.782' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FAFAFA'/%3E%3Cstop offset='1' stop-color='%23FAFAFA' stop-opacity='0.15'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\")",
                "payment-box-background": "url(\"data:image/svg+xml,%3Csvg width='302' height='159' viewBox='0 0 302 159' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='301.5' y='158.5' width='301' height='158' rx='9.5' transform='rotate(-180 301.5 158.5)' fill='url(%23paint0_linear_23_21)' fill-opacity='0.1' stroke='url(%23paint1_linear_23_21)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_23_21' x1='225.103' y1='204.076' x2='591.639' y2='403.808' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_23_21' x1='225.103' y1='204.076' x2='591.639' y2='403.808' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235E46F8'/%3E%3Cstop offset='1' stop-color='%23C03EFE'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\")",
                "background-place": "url(\"data:image/svg+xml, %3Csvg className='rounded-%5B15px%5D h-full w-full ' xmlns='http://www.w3.org/2000/svg' width='346' height='200' fill='none' viewBox='0 0 346 200' %3E%3Cpath fill='%23310E58' d='M0 0H346V200H0z'%3E%3C/path%3E%3Cpath fill='%23561F94' d='M229.28 119.888v6.042c0 5.561-4.509 10.07-10.07 10.07h-92.14c-5.561 0-10.07-4.509-10.07-10.07v-14.098l27.692-20.14a11.413 11.413 0 0114.602.671l18.461 16.112a11.918 11.918 0 0013.763 1.175l37.762-22.154v32.392zM184.133 85.483c5.932 0 10.742-4.81 10.742-10.742 0-5.932-4.81-10.741-10.742-10.741-5.932 0-10.741 4.81-10.741 10.741 0 5.933 4.809 10.742 10.741 10.742z' %3E%3C/path%3E%3C/svg%3E\")"
            },
            boxShadow: {
                "otp-shadow": "0px 6px 12px #171717"
            },
            dropShadow: {
                "card-item-shadow": "drop-shadow(7px 7px 38px rgba(33, 29, 38, 0.3))"
            },
            animation: {
                'spin-slow': 'animation-wiooy9 1s linear 0.5s infinite',
            }
        },
        plugins: [
            require('@tailwindcss/line-clamp'),
        ],
    }
}

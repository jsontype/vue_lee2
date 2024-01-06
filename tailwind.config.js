/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'my-color1':'rgb(0, 255, 38)',
        primary: {
          0: '#000000',
          10: '#001126',
          20: '#00245C',
          30: '#043393',
          40: '#1144C9',
          50: '#335FFF',
          60: '#637CFF',
          70: '#939DFF',
          80: '#C2C5FF',
          90: '#F2F2FF',
          100: '#FFFFFF',
        },
        secondary: {
          0: '#000000',
          10: '#260011',
          20: '#5C0024',
          30: '#910433',
          40: '#C71143',
          50: '#FC325E',
          60: '#FE627B',
          70: '#FF929D',
          80: '#FFC2C5',
          90: '#FFF2F2',
          100: '#FFFFFF',
        },
        error: {
          0: '#000000',
          10: '#260404',
          20: '#570909',
          30: '#881111',
          40: '#BA2222',
          50: '#EB4646',
          60: '#F67A72',
          70: '#FCA99E',
          80: '#FFD2C9',
          90: '#FFF2F2',
          100: '#FFFFFF',
        },
        neutral: {
          0: '#000000',
          10: '#222426',
          20: '#45484C',
          30: '#696C71',
          40: '#8E9097',
          50: '#B3B5BD',
          60: '#C4C6CD',
          70: '#D6D7DD',
          80: '#E8E8ED',
          90: '#FAFAFC',
          100: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

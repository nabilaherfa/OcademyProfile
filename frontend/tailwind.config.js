module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F7FF',
        'oren1': '#D14A20',
        'oren2': '#F07B00',
        'oren3': '#FF8300',
        'oren4': '#FFB669',
        'kuning': '#FAC851',
        'navy': '#003962',
        'text-footer': '#F8F6EE',
        'bg-footer': '#003962',
        'text-navbar': 'rgba(5, 63, 92, 0.8)',
        'register-subtitle-oren': '#E3572B',
        'register-title-oren': '#D14A20',
        'navbar': '#053F5C'
      },
      fontFamily: {
        roboto: ["Roboto"],
        'open-sans': ["./public/font/OpenSans-Regular.ttf"]
      }
    },
  },
  plugins: [
  ]
}

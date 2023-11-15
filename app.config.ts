export default defineAppConfig({
  alpine: {
    title: 'D4RT5',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: 'home.svg', // path of the logo
        pathDark: 'home.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'home' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'D4RT5'
      },
      navigation: true, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Made by D4RT5 with ☕, based on Alpine Nuxt Theme' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'D4RT5'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
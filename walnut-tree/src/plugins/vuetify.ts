import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const artisticLightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',  
        surface: '#02A676',  
        'surface-bright': '#FAFAFA', 
        'surface-light': '#F0F0F0', 
        'surface-variant': '#E0E0E0', 
        'on-surface-variant': '#424242', 
        primary: '#FF7A73',  
        'primary-darken-1': '#E86A63', 
        secondary: '#8AB8DC', 
        'secondary-darken-1': '#6D9DC5',  
        error: '#FF6F61',  
        info: '#42A5F5',  
        success: '#66BB6A',  
        warning: '#FFD54F',  
    },
    variables: {
        'border-color': '#DDDDDD',  
        'border-opacity': 0.15,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'hover-opacity': 0.1,
        'focus-opacity': 0.15,
        'selected-opacity': 0.1,
        'pressed-opacity': 0.15,
        'dragged-opacity': 0.08,
        'theme-kbd': '#F0F0F0',  
        'theme-on-kbd': '#000000',  
        'theme-code': '#F5F5F5',  
        'theme-on-code': '#000000', 
    }
};

const artisticDarkTheme = {
    dark: true,  
    colors: {
        background: '#121212',  
        surface: '#003840',  
        'surface-bright': '#2C353C',  
        'surface-light': '#3A3C40',  
        'surface-variant': '#4C545C',  
        'on-surface-variant': '#FFFFFF',  
        primary: '#66C6C2',  
        'primary-darken-1': '#45B7B1', 
        secondary: '#E6C77C',  
        'secondary-darken-1': '#D9AA30',  
        error: '#FF3D00', 
        info: '#00BFFF',  
        success: '#4CAF50',  
        warning: '#FFAA00',  
    },
    variables: {
        'border-color': '#CCCCCC',  
        'border-opacity': 0.25,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'hover-opacity': 0.1,
        'focus-opacity': 0.15,
        'selected-opacity': 0.1,
        'pressed-opacity': 0.15,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',  
        'theme-on-kbd': '#FFFFFF',  
        'theme-code': '#F5F5F5',  
        'theme-on-code': '#000000',  
    }
};

export default createVuetify({
    theme: {
      defaultTheme: 'artisticLightTheme',
      themes: {
        artisticLightTheme,
        artisticDarkTheme
      },
    },
});

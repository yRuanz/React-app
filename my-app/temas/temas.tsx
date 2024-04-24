import { useColorScheme } from "react-native";

interface cores {
    /*Cores de Fundo*/
    bgPrimary: string
    bgSecundary: string
    bgTertiary: string
    bgQuaternary: string
    bgPatrimonio: string
    bginfo: string
    textColorPrimary: string
    textColorSecundary: string

    /*Cor do botão*/
    bgButton: string

    /*Cor do Input */
    bgPrimaryVariant: string
    bgHover: string
    textColorPrimaryVariant: string
}

const light: cores = {
    /* Backgrounds */
    bgPrimary: '#FFFFFF',
    bgSecundary: '#FF0000',
    bgTertiary: '#011E83',
    bgQuaternary: '#101010',
    bgPatrimonio: '#FF0000',

    /* Texto */
    bginfo: '#011E83',
    textColorPrimary: '#101010',
    textColorSecundary: '#FFFFFF',

    /* Button */
    bgButton: '#101010',

    /* Input */
    bgPrimaryVariant: '#F5F5F5',
    textColorPrimaryVariant: '#595959',
    bgHover: '#F39200',


    
}

const dark: cores = {
    /* Backgrounds */
    bgPrimary: '#240707',
    bgSecundary: '#240707',
    bgTertiary: '#240707',
    bgQuaternary: '#240707',
    bgPatrimonio: '#FF0000',

    /* Texto */
    bginfo: '#ffffff',
    textColorPrimary: '#FFFFFF',
    textColorSecundary: '#D9D9D9',

    /* Button */
    bgButton: '#FF0000',

    /* Input */
    bgPrimaryVariant: '#3A2828',
    textColorPrimaryVariant: '#CBCBCB',
    bgHover: '#F39200',

}


export function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme ==  'dark') { return dark } 
    else { return light }
}

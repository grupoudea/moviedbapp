export const getVectorTextPrimary = (text: string) => {

    const primerCaracter = text.charAt(0);
    const restoDeLaFrase = text.slice(1);
    return { 
        primerCaracter, 
        restoDeLaFrase 
    };

}
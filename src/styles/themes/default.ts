export const defaultTheme = {
  color: {
    mainFontLight: "#FFF",
    neutralColor100: "#130C25",
    neutralColor200: "#423D51",
    neutralColor300: "#5A5566",
    brandColorDark: "#432E98",
    brandColorPure: "#5F41D9",
    brandColorTealLight: "#99F3F5",
  },
  fonts: {
    menuOptions: `
      font-family: Inter;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 0.98438rem;
    `,
    menuClient: `
      font-family: Inter;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 600;
      line-height:  0.98438rem;`,
    submenuTitle: `
      font-family: sans-serif;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.17188rem;
      letter-spacing: 0.00469rem;`,
    submenuDescription: `
      font-family: Inter;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.21875rem;
    `,
    tittleHat: `
      font-family: sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.05rem ;
      letter-spacing: 0.15rem;
      text-transform: uppercase;`,
    tittleH32: `
      font-family: sans-serif;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem 
      letter-spacing: 0.01rem;`,
    tittleH20: `
      font-family: sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height:  1.5625rem; 
      letter-spacing: 0.00625rem;
    `,
    bodyText16: `
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;`,
    bodyLink: `
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.25rem;`,
    languageOptions: `
      font-family: Inter;
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 0.98438rem;`,

  }
} as const

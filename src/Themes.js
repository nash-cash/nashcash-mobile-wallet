// Copyright (C) 2018, Zpalmtree
//
// Please see the included LICENSE file for more information.

export const Themes = {
    lightMode: {
        /**
         * Background colour for every component
         */
        backgroundColour: '#C1BCB7',

        /**
         * The primary colour used by the wallet, for NashCash is Blue
         */
        primaryColour: '#454CBE',

        /**
         * Colour for the background circles on the pin page
         */
        pinCodeBackgroundColour: '#D8F3E8',

        /**
         * Colour for the pin code numbers
         * Note that when you click them, a different theme is applied.
         */
        pinCodeForegroundColour: '#40C18E',

        /**
         * We chose to use a darker green here. It is very rarely used.
         */
        secondaryColour: '#454CBE',

        /**
         * Terrible name, lol. This is used things which shouldn't pop out
         * much, like the 'TOTAL BALANCE' text.
         */
        notVeryVisibleColour: 'lightgray',

        /**
         * This is used for the same sort of things as notVeryVisibleColour,
         * but pops out a little more. Used for things like the $ balance value.
         */
        slightlyMoreVisibleColour: 'gray',

        /**
         * Colour for disabled things, like bottom buttons
         */
        disabledColour: '#DADEE0',

        /**
         * Colour for the address book icon background
         */
        iconColour: 'lightgray',

        /**
         * Filepath of the logo to use.
         */
        logo: require('../assets/img/logo.png'),

        qrCode: {
            /**
             * Your foreground colour needs to be a darkish colour, or the
             * code will not scan.
             */
            foregroundColour: '#101112',

            /**
             * Your background colour needs to be a lightish colour, or the
             * code will not scan.
             */
            backgroundColour: 'white',
        },
    },
    darkMode: {
        /**
         * Background colour for every component
         */
        backgroundColour: '#101112',

        /**
         * The primary colour used by the wallet, for NashCash is it blue
         */
        primaryColour: '#317E31',

        /**
         * Colour for the background circles on the pin page
         */
        pinCodeBackgroundColour: 'gray',

        /**
         * Colour for the pin code numbers
         * Note that when you click them, a different theme is applied.
         */
        pinCodeForegroundColour: 'white',

        /**
         * We chose to use a darker green here. It is very rarely used.
         */
        secondaryColour: '#454CBE',

        /**
         * Terrible name, lol. This is used things which shouldn't pop out
         * much, like the 'TOTAL BALANCE' text.
         */
        notVeryVisibleColour: 'gray',

        /**
         * This is used for the same sort of things as notVeryVisibleColour,
         * but pops out a little more. Used for things like the $ balance value.
         */
        slightlyMoreVisibleColour: 'lightgray',

        /**
         * Colour for disabled bottom buttons
         */
        disabledColour: '#23272A',

        /**
         * Colour for the address book icon background
         */
        iconColour: '#23272A',

        /**
         * Filepath of the logo to use.
         */
        logo: require('../assets/img/logo-white.png'),

        qrCode: {
            /**
             * Your foreground colour needs to be a darkish colour, or the
             * code will not scan.
             */
            foregroundColour: '#2C2F33',

            /**
             * Your background colour needs to be a lightish colour, or the
             * code will not scan.
             */
            backgroundColour: 'lightgray',
        },
    },
}

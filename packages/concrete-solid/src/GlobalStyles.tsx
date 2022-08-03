import { createGlobalStyles } from 'solid-styled-components';
// import { useTheme } from './provider';

export const GlobalStyles = () => {
  // const theme = useTheme();

  const Styles = createGlobalStyles`
    *,
    ::before,
    ::after {
      box-sizing: border-box; /* 1 */
      border-width: 0; /* 2 */
      border-style: solid; /* 2 */
      background-repeat: no-repeat; /* 2 */
    }

    ::before,
    ::after {
      text-decoration: inherit; /* 1 */
      vertical-align: inherit; /* 2 */
    }

    html {
      line-height: 1.5; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      -moz-tab-size: 4; /* 3 */
      tab-size: 4; /* 3 */
      font-family:
        system-ui,
        /* macOS 10.11-10.12 */ -apple-system,
        /* Windows 6+ */ "Segoe UI",
        /* Android 4+ */ "Roboto",
        /* Ubuntu 10.10+ */ "Ubuntu",
        /* Gnome 3+ */ "Cantarell",
        /* KDE Plasma 5+ */ "Noto Sans",
        /* fallback */ sans-serif,
        /* macOS emoji */ "Apple Color Emoji",
        /* Windows emoji */ "Segoe UI Emoji",
        /* Windows emoji */ "Segoe UI Symbol",
        /* Linux emoji */ "Noto Color Emoji";
    }

    body {
      margin: 0; /* 1 */
      line-height: inherit; /* 2 */
    }

    hr {
      height: 0; /* 1 */
      color: inherit; /* 2 */
      border-top-width: 1px; /* 3 */
    }

    abbr:where([title]) {
      text-decoration: underline dotted;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
      font-family:
        ui-monospace,
        /* macOS 10.10+ */ "Menlo",
        /* Windows 6+ */ "Consolas",
        /* Android 4+ */ "Roboto Mono",
        /* Ubuntu 10.10+ */ "Ubuntu Monospace",
        /* KDE Plasma 5+ */ "Noto Mono",
        /* KDE Plasma 4+ */ "Oxygen Mono",
        /* Linux/OpenOffice fallback */ "Liberation Mono",
        /* fallback */ monospace,
        /* macOS emoji */ "Apple Color Emoji",
        /* Windows emoji */ "Segoe UI Emoji",
        /* Windows emoji */ "Segoe UI Symbol",
        /* Linux emoji */ "Noto Color Emoji";
      font-size: 1em; /* 2 */
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    table {
      text-indent: 0; /* 1 */
      border-color: inherit; /* 2 */
      border-collapse: collapse; /* 3 */
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      font-weight: inherit; /* 1 */
      line-height: inherit; /* 1 */
      color: inherit; /* 1 */
      margin: 0; /* 2 */
      padding: 0; /* 3 */
    }

    button,
    select {
      text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button; /* 1 */
      background-color: transparent; /* 2 */
      background-image: none; /* 2 */
    }

    :-moz-focusring {
      outline: auto;
    }

    :-moz-ui-invalid {
      box-shadow: none;
    }

    progress {
      vertical-align: baseline;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }


    summary {
      display: list-item;
    }


    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    fieldset {
      margin: 0;
      padding: 0;
    }

    legend {
      padding: 0;
    }

    ol,
    ul,
    menu {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    textarea {
      resize: vertical;
    }

    input::placeholder,
    textarea::placeholder {
      opacity: 1; /* 1 */
    }

    button,
    [role="button"] {
      cursor: pointer;
    }

    :disabled {
      cursor: default;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block; /* 1 */
      vertical-align: middle; /* 2 */
    }

    img,
    video {
      max-width: 100%;
      height: auto;
    }
  `;

  return <Styles />;
};

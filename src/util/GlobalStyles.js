import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    div{
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px white;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #2c77ce;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #2e50c1;
        }
    };
`;

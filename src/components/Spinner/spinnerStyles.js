import styled from 'styled-components';

export const SpinnerClass = styled.div`

.loader {
    border: 5px solid #ff0000; /* Vermelho e cinza*/
    border-top: 5px solid #504c4c; /*  */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    margin-top: 50px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;
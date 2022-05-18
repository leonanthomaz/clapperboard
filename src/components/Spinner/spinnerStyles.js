import styled from 'styled-components';

export const SpinnerClass = styled.div`

.loader {
    position: relative;
    width: 5em;
    height: 5em;
    transform: rotate(165deg);
    margin-bottom: 5rem;
}

.loader:before,
.loader:after {
    content: '';
    position: absolute;
    top: 150%;
    left: 50%;
    display: block;
    width: 5em;
    height: 5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
}

.loader:before {
    animation: before 2s infinite;
}

.loader:after {
    animation: after 2s infinite;
}

`;
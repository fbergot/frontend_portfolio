import styled from "styled-components";

interface LinkProjectStyledCom {
   widthX: string;
   widthY: string;
   index: number;
   sw?: string;
}

interface ContentDateStyledCom extends LinkProjectStyledCom {
   widthContDate: string;
}

export const LinkProjectStyled = styled.div<LinkProjectStyledCom>`
   left: calc(${(props) => (props.index % 2 === 0 ? props.widthX + 6 + 1 : 0)}px);
   ${(props) => (props.index % 2 !== 0 ? `left: -12vw` : "")};
   top: ${(props) => parseInt(props.widthY) / 2}px;
   background-color: #000;
   ${(props) =>
      props.sw
         ? `right: -450px; width: 1px; height: 200px; top: 194px; left: calc(${props.widthX}px + 18vw + 100px / 2);`
         : null};
   ${(props) => (props.index % 2 !== 0 && props.sw ? "left: -15vw; height: 15vw;" : "")};
   z-index: 1000;
`;

export const ContentDateStyled = styled.div<ContentDateStyledCom>`
   position: absolute;
   width: ${(props) => props.widthContDate}px;
   height: ${(props) => props.widthContDate}px;
   border: 1px solid black;
   ${(props) =>
      props.index % 2 !== 0 ? `left: calc(-15vw - 50px)` : `right: calc(-18vw - 105px)`};
   top: ${(props) => parseInt(props.widthY) / 2 - parseInt(props.widthContDate) / 2}px;
   font-size: 0.8rem;
   text-align: center;
   padding: 0.5rem;
   border-radius: 10px;
   z-index: 1000;
`;

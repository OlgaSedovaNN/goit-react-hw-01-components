import styled from "@emotion/styled";

export const Item = styled.li`
 display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &:last-child {
       margin-bottom: 0;
   }
  padding: 10px;
  width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const Status = styled.span`
 width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.isOnline) {
        case true: return "#008000";
        case false: return "#ff0000";
        default: return "#cd5c5c"
    }
  }
    
  };
  align-self: center;
  margin-right: 20px;
`
export const Avatar = styled.img`
display: block;
  margin-right: 20px;
`
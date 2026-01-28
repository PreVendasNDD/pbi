import styled from 'styled-components';

export const VizContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VizHeader = styled.div`
  padding: 10px 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #333;
`;

export const VizContent = styled.div`
  flex: 1;
  padding: 15px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    color: #ff4444;
  }
`;

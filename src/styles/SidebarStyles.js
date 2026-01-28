import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 280px;
  background: white;
  border-right: 1px solid #ddd;
  padding: 20px;
  overflow-y: auto;
  
  h3 {
    margin-bottom: 20px;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 2px solid #0078d4;
  }
`;

export const ChartTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 30px;
`;

export const ChartTypeButton = styled.button`
  background: ${props => props.selected ? '#e6f2ff' : '#f8f9fa'};
  border: 2px solid ${props => props.selected ? '#0078d4' : '#ddd'};
  border-radius: 5px;
  padding: 15px 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.selected ? '#e6f2ff' : '#f0f0f0'};
    border-color: ${props => props.selected ? '#0078d4' : '#ccc'};
  }
  
  span {
    font-size: 12px;
    color: #333;
  }
  
  svg {
    font-size: 20px;
    color: ${props => props.selected ? '#0078d4' : '#666'};
  }
`;

export const ConfigPanel = styled.div`
  background: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  
  h4 {
    margin-bottom: 15px;
    color: #333;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #555;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #0078d4;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #0078d4;
  }
`;

import styled from 'styled-components';

export const UploadArea = styled.div`
  border: 2px dashed ${props => props.isDragActive ? '#0078d4' : '#ccc'};
  border-radius: 10px;
  padding: 60px 40px;
  text-align: center;
  background: ${props => props.isDragActive ? '#f0f8ff' : '#fff'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #0078d4;
    background: #f0f8ff;
  }
  
  h2 {
    margin: 20px 0 10px;
    color: #333;
  }
  
  p {
    color: #666;
    margin: 10px 0;
  }
`;

export const UploadButton = styled.button`
  background: #0078d4;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #106ebe;
  }
`;

export const FileInfo = styled.div`
  color: #666;
  font-size: 14px;
  margin-top: 10px;
`;

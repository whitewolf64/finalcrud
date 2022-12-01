import React from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Table = styled.table`
 width: 100%;
 background-color: #fff;
 padding : 10px;
 box-shadow: 10px 10px 2px #000000;
 border-radius: 15px;
 max-width: 700px;
 margin: 20px auto;
 word-break: break-all;
 background-color: #ADD8E6;
 opacity: 0.8;
 height: 300px;
`;

export const Thead = styled.thead`
 color: #191970
`;

export const Tbody = styled.tbody`
 flex-wrap: wrap;
 display: flex;
 flex-direction: row;
 padding-top: 20px;
 padding-right: 10px;
 padding-bottom: 10px;
 padding-left: 40px;
 overflow-y: auto;
 height: 190px;
`;

export const Tr = styled.tr`
 width: 200px;
 height: 40px;
 align-items: stretch;
 text-align: center;
 box-sizing: border-box;
 border: 2px solid #FFFFFF;
 border-radius: 5px;
`;

export const Th = styled.th`
 text-align: start;
 border-bottom: inset;
 padding-bottom: 3px;
`;

export const Td = styled.td`
 padding-top: 5px;
 text-align: ${(props) => (props.alignCenter ? "center" : "start")};
 width: ${(props) => (props.width ? props.width : "auto")}; 
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !==id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
        <Thead>
          <Tr>
            <Th>Argonautes.</Th>
          </Tr>
        </Thead> 
        <Tbody>
          {users.map((item, i) => (
             <Tr key={i}>
                <Td width="30%">{item.nouveauargonaute}</Td>
                <Td alignCenter width="1%">
                  <FaEdit onClick={() => handleEdit(item)} />
                </Td>
                <Td alignCenter width="1%">
                  <FaTrash onClick={() => handleDelete(item.id)} />
                </Td>
             </Tr>
           ))}
         </Tbody>    
    </Table>
 );
};

export default Grid;
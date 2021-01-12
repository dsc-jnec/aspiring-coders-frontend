import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
const RankTable=styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 1rem;
    border-color: grey;
    font-size:1.2rem;

tr{
    border:1px solid white;

}
th{

}
td{
    text-align:center;
    padding:0.6rem;
    a{
        color:rgb(255, 130, 0)
    }
}
`;
const TableWrapper=styled.div`
flex-grow:1;
width:80%;
background-color:rgba(255,255,255,0.04);
border-radius:12px;
padding:1rem;
`;
export const RankList = ({coderData}) => {
    const [tableData, settableData] = useState([])
    useEffect(() => {
        var data=coderData
        settableData(data.sort(function(x,y){return y["rating"]-x["rating"]}));
    }, [coderData])
    const renderTableData=()=>{
       return tableData.map((coder,index)=>{
            return(
                <tr key={coder?.user_details?.username}>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        {coder?.user_details?.name}
                    </td>
                    <td>
                       {coder.rating}     
                    </td>
                    <td>
                       {coder.stars} 
                    </td>
                    <td>
                      <a target="_blank" href={`https://www.codechef.com/users/${coder?.user_details?.username}`}>{coder?.user_details?.username} </a> 
                    </td>
                </tr>
            )
        })
    }
    return (
        <TableWrapper>
        <RankTable>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Stars</th>
                <th>CodeChef ID</th>
            </tr>
            </thead>
            <tbody>

            {tableData?renderTableData():null}
            </tbody>
        </RankTable>
        </TableWrapper>
    )
}

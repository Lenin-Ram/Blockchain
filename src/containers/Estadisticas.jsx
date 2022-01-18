import React from 'react';
import { Table } from 'reactstrap';

const Estadistica = () => {

 return( 
          <div>   
          <button className='button'> 
                    <a href="/">Home</a>
          </button>

                    <Table bordered>
                     
                    <thead>
                              <tr>
                                        <th>
                                        Name
                                        </th>
                                        <th>
                                        Value
                                        </th>
                              </tr>
                    </thead>


                    <tbody>
                    <tr>
                      <th scope="row">
                        Name
                      </th>
                    <td>
                    Contract
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                    Target amount
                    </th>
                    <td>
                    100
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                    Total collected
                    </th>
                    <td>
                    50
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">
                    Has Finished
                    </th>
                    <td>
                    false
                    </td>
                    </tr>


                    <tr>
                    <th scope="row">
                    I am beneficiary
                    </th>
                    <td>
                    true
                    </td>
                    </tr>
                   
                    
                    
                    <tr>
                    <th scope="row">
                    Contract state
                    </th>
                    <td>
                    0
                    </td>
                    </tr>
                    
                    <tr>
                    <div>
                    <button className="button">Contribute</button>
                    <input  
                    name='name'
                    className="input" 
                    type="text"
                    placeholder="1"
                     />
                     </div>
                     </tr>

                    </tbody>
                   </Table>
                   
                    
  </div>


  );
 }
export default Estadistica;
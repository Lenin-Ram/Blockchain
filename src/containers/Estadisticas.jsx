import React from 'react';
import { Table, Button} from 'reactstrap';
import  swal  from 'sweetalert';





const Estadistica = () => {

          const HandleClick = () => {
                    
                    swal(" Contribute:", {
                              content: "input",
                            })
                            .then((value) => {
                              swal(`Contribute: ${value}`);
                            });

                  }
 return( 
          <>   
                              
           <Button type='submit' className='button'>
                    <a href="/">Home</a>
          </Button>

          
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
                    <td>
                    
                    
                    <Button onClick={()=>HandleClick()} type='submit' className='button'>
                               Contribute
                    </Button>

                    {/* <input  
                    name='name'
                    className="input" 
                    type="text"
                    placeholder="1"
                     /> */}

                    
                    
                     </td>
                     </tr>

                     

                    </tbody>
                   </Table>

                   
                   
                    
  </>


  );
 
 }
export default Estadistica;
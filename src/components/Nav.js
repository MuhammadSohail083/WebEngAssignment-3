import React,{useState} from "react";
import {NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import { Grid } from '@mui/material'

const Nav = () => {
  const [state, setState] = React.useState(true);

  let newtime=new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newtime)

  const updatetime=()=>{
      let newtime=new Date().toLocaleTimeString();
setCtime(newtime)
  }


  //setinterval is the thing which fn we pass in this it will run after every that time we give in this
  setInterval(updatetime,1000)

  return (
    <>
    <Grid  container className="navbar container">
         <Grid item xs={4} >

                            <div className="digital">
                                <h1>{ctime}</h1>
                            </div>
         </Grid>

         <Grid item xs={8} >

              {state ? (
                            <ul className="navbar__right">
                                    <li>
                                        <NavLink to="/home"  >
                                        Home
                                          </NavLink>
                                    </li>
                        
                                    <li>
                                        <NavLink to="/about" >
                                        About
                                          </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to="" >
                                        Skills
                                          </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="" >
                                        Portfolio
                                          </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to="/project" >
                                        Project
                                          </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" >
                                        Contact
                                          </NavLink>
                                    </li>
                            </ul>
                                ) : (
                                  ""
                                )}

               <div className="toggle" onClick={() => setState(!state)}>
                        <FaAlignJustify />
                </div>
       
       </Grid>


</Grid>

    </>
  );
};

export default Nav;

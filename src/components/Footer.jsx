import React from 'react';

const iconSize = {
  fontSize : '20px',
  color: '#d9e3f0'
};

const Association = () => {
          return (
                    <div className="container">
                      <div className="row">
                        <div className="col l6 s12">
                          <h5 className="white-text">Contest Name :</h5>
                          <p className="grey-text text-lighten-4"> Talk about the competition .. and organize ( you can write any informations ) ... </p>
                        </div>
                      </div>
                    </div>   
          );
};

const Author = () =>  {
          return (
                   <div className="footer-copyright grey darken-4">
                      <div className="container center-align">
                          &copy; 2019 Copyright || Made by 3imed-jaberi 
                          <a href="https://www.instagram.com/3imed_jaberi/"> <i className="fab fa-instagram" style={iconSize}></i> </a>
                          <a href="https://github.com/3imed-jaberi"> <i className="fab fa-github-square" style={iconSize}></i> </a>
                      </div>
                   </div>
          );
}


export default function Footer() {
  return (
          <div>
             <footer className="page-footer grey darken-3">
                 <Association/>
                 <br/>
                 <Author/>
             </footer> 
          </div>
  )
}

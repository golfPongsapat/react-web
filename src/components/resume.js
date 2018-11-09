import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profile_resume from '../img/profile_resume.jpg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profile_resume}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '5px'}}>Pongsapat Timtham</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <p>Learn and find new for challenging myself and enjoy with teamwork.</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <h5>Address</h5>
            <p>16/278 sunisaplace condo tomn bangsean</p>
            <h5>Phone</h5>
            <p>093-7318593</p>
            <h5>Email</h5>
            <p>golftimtham@gmail.com</p>
            <h5>Line</h5>
            <p>gaalobcopy</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Burapha University"
              schoolDescription="Degree in Informatics Major Software Engineering"
            />
                <hr style={{borderTop: '3px solid #990000'}} />
              <h2>Teamwork Experience</h2>
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="First Job"
              jobDescription="Leader team cluster, manage teammates to work together effectively. As a result, the future can work together with others, smoothly without any defects."
              />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Second Job"
                jobDescription="Quality assurance manager, training the work progress based on reality, focusing on the quality of the product. Every piece is made out to be quality. And can be put to practical use."/>
              <hr style={{borderTop: '3px solid #990000'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
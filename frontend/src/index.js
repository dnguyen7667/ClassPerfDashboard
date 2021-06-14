import 'semantic-ui-css/semantic.min.css'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GeneralStats from '../components/GeneralStats';
import AssignmentSelector from '../components/AssignmentSelector';
import { Grid, Image, Segment, Container, Header } from 'semantic-ui-react'
import DonutChartAttemptCount from '../components/Charts/DonutChartAttemptCount';
import DueDate from '../components/DueDate';
import AverageTimeTaken from '../components/AverageTimeTaken';
import ItemsChart from '../components/Charts/ItemsChart';
import AvgMaxBoxPlot from '../components/Charts/AvgMaxBoxPlot';


const square = { width: 175, height: 175 }

const style = {
    height: '20 %',
    'verticalAlign': 'middle',
    'textAlign': 'center',
}

const textArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// create new component and it should produce some html
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
           }
    }


    render () {
        return (
            <Container fluid={true}>
                <Header as='h1' dividing color='red'>
                    Welcome Professor J!
                </Header>

                <Grid>
                    <Grid.Row>
                    
                        <Grid.Column width={12}>
                            <GeneralStats />
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <AssignmentSelector />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>


                <Header as='h2' dividing textAlign='center' color='red'>
                    Class general performance on Quiz 1
                </Header>

              
                <Grid>
                    <Grid.Column width = {4}>
                        <Segment padded="very" color='orange'>
                            <Grid.Row > 
                            <DueDate />
                                
                            </Grid.Row>

                        </Segment>

                        <Segment padded="very" color='orange' inverted >
                            <Grid.Row divided>
                                <AverageTimeTaken />
                            </Grid.Row>
                        </Segment>
             
                      
                        <Segment padded="very" color='orange'>
                            <Grid.Row divided>
                                <DonutChartAttemptCount />
                            </Grid.Row>
                        </Segment>
                    </Grid.Column>
     

                    {/* ALL HISTOGRAM OF GRADES DISTRIBUTION */} 
                     <Grid.Column width = {8}>
                        <Segment color='orange'>
                            <AvgMaxBoxPlot />
                        </Segment>
                        <Segment padded="very" color='orange'>
                            <AvgMaxBoxPlot />
                        </Segment>
                    </Grid.Column>
      


                    {/* A TALL BAR CHART SHOWING PERCENTAGE OF RIGHT/WRONG ASWERS */}

                    <Grid.Column width = {4}>
                        <ItemsChart />
                    </Grid.Column>

                </Grid>
                
                
                

            </Container>
            
        );
    }
}


// take this component's generated html and put on the page (in the DOM)
var root =  document.getElementById('app');
ReactDOM.render(
  <App {...(root.dataset)} />,
  root
);
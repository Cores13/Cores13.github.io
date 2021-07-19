import React from 'react';
import './Timeline.css'
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeIcon from '@material-ui/icons/Code';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Sep 2013 - Jun 2017
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Mechanical Hight School
            </Typography>
            <Typography>Mixed Hight School, Banovići, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Oct 2017 - Jul 2020
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Engineer of Information Technology
            </Typography>
            <Typography><strong>American University in Bosnia and Herzegovina</strong><br/>
            Tuzla, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Oct 2018 - Jan 2019
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Help Desk
            </Typography>
            <Typography><strong>American University in Bosnia and Herzegovina</strong><br/>
            Tuzla, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>

      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Oct 2019 - Jul 2020
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            System Administrator
            </Typography>
            <Typography><strong>Comversum</strong><br/>
            Tuzla, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>

      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug 2020 - Nov 2020
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Web Developer
            </Typography>
            <Typography><strong>Leftor</strong><br/>
            Tuzla, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>

      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May 2021 - Now
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Web Developer
            </Typography>
            <Typography><strong>Ideaology</strong><br/>
            Lukavac, Bosnia and Herzegovina</Typography>
          </Paper>
        </TimelineContent>

      </TimelineItem>
    </Timeline>
  );
}
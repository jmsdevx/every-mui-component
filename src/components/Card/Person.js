import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Person = props => {
  return (
    <div>
      {props.name ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={props.url}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.name}
            </Typography>
            <Typography component="p">Age: {props.age}</Typography>
            <Typography component="p">Job: {props.job}</Typography>
            <Typography component="p">Bio: {props.bio}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" target="_blank">
              Details
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default Person;

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

export const Figure = (props) => (
    <Card>
        <CardMedia stile={{
            height: 500
        }}
            image={props.url}
            title="paella dish" />
        <CardContent>
            <Typography variant="body" color="textPrimary" component="p">
                {props.facts}
            </Typography>
        </CardContent>
    </Card>
);